# **Monitoramento de Temperatura e Umidade com ESP32 e Firebase**

Este projeto visa monitorar a temperatura e umidade em tempo real utilizando o **ESP32** com o sensor **DHT22**. Os dados capturados são enviados para o **Firebase Realtime Database** para visualização em um sistema web desenvolvido com HTML, CSS e JavaScript.

## **🔧 Requisitos**

- **ESP32**
- **Sensor DHT22** (temperatura e umidade)
- **Firebase Realtime Database**
- **Conexão Wi-Fi**
- **Editor de Código** (VSCode, Sublime, etc.)
- **Bibliotecas**: `machine`, `time`, `network`, `urequests`, `dht`

## **🌐 Arquitetura do Sistema**

1. **ESP32**: Responsável por ler os dados do sensor **DHT22** (temperatura e umidade).
2. **Firebase**: O **ESP32** envia as leituras de temperatura e umidade para o banco de dados em tempo real do **Firebase**.
3. **Página Web**: A interface web exibe os dados obtidos do Firebase de maneira dinâmica, com atualização em tempo real.

---

## **⚙️ Funcionamento**

O processo básico do sistema envolve três partes principais:

1. **Leitura de Dados (ESP32)**:
   - O **ESP32** conecta-se à rede Wi-Fi.
   - O sensor **DHT22** é acionado para coletar a temperatura e umidade.
   - Esses dados são enviados para o **Firebase Realtime Database** em tempo real.

2. **Armazenamento no Firebase**:
   - Os dados de temperatura e umidade são armazenados no Firebase através de uma requisição `PATCH`.

3. **Interface Web**:
   - Uma página web exibe os dados do sensor de forma organizada e atualiza-os automaticamente em tempo real.

---

## **📝 Conclusão**

Esse projeto proporciona uma **monitoramento simples e eficiente** de temperatura e umidade em tempo real. Utilizando o **ESP32** e o sensor **DHT22**, ele envia os dados para o **Firebase**, permitindo que sejam acessados e visualizados facilmente via uma interface web moderna.  

Esse tipo de aplicação pode ser expandido para outros tipos de sensores e integrações com diferentes plataformas IoT.
