from machine import Pin
import time
import network
import urequests
import dht

FIREBASE_URL = "https://sensortemperatura-71222-default-rtdb.firebaseio.com/"
FIREBASE_SECRET = "AIzaSyCZKDE_augJEXOPiFqCnM497iy5O31Vn-o"

sensor = dht.DHT22(Pin(4))  # Adaptado para o pino 15
led = Pin(2, Pin.OUT)  # LED para status

def conectar_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect('Wokwi-GUEST', '')
    
    time.sleep(20)
    if wlan.isconnected():
        print("Conectado:", wlan.ifconfig())
    else:
        print("Falha na conexão WiFi")

def enviar_para_firebase(temp, hum):
    url = f"{FIREBASE_URL}/sensor.json?auth={FIREBASE_SECRET}"
    dado = {"temperatura": temp, "umidade": hum}
    resposta = urequests.patch(url, json=dado)
    print("Resposta Firebase:", resposta.text)
    resposta.close()

def get_firebase():
    url = f"{FIREBASE_URL}/status.json?auth={FIREBASE_SECRET}"
    response = urequests.get(url)
    if response.status_code == 200:
        data = response.json()
        print("Dados recebidos:", data)
        return data.get("status")
    else:
        print("Erro ao obter dados:", response.status_code)
        return False
    response.close()

# Conectar ao WiFi
conectar_wifi()

while True:
    
    try:
        led.value(1)
        sensor.measure()
        temp = sensor.temperature()
        hum = sensor.humidity()
        #temp =2
        #hum=80
        print(f"Temperatura: {temp}°C, Umidade: {hum}%")
        enviar_para_firebase(temp, hum)
    except Exception as e:
        print("Erro ao ler/enviar dados:", e)
    
    
    time.sleep(5)
