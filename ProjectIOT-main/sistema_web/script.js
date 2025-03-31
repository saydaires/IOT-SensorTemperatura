import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCZKDE_augJEXOPiFqCnM497iy5O31Vn-o",
    authDomain: "iotdatabase-6d965.firebaseapp.com",
    databaseURL: "https://sensortemperatura-71222-default-rtdb.firebaseio.com/",
    projectId: "sensortemperatura-71222",
    storageBucket: "sensortemperatura-71222.firebasestorage.app",
    messagingSenderId: "184487448468",
    appId: "1:184487448468:web:ffcf22ad20b3d5d1538981"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const temperaturaElemento = document.getElementById("temperatura");
const umidadeElemento = document.getElementById("umidade");

function obterDadosSensores() {
    const temperaturaRef = ref(db, "sensor/temperatura");
    const umidadeRef = ref(db, "sensor/umidade");


    onValue(temperaturaRef, (snapshot) => {
        if (snapshot.exists()) {
            temperaturaElemento.innerText = `${snapshot.val()}°C`;
        } else {
            temperaturaElemento.innerText = "Sem dados";
        }
    }, (error) => {
        console.error("Erro ao buscar a temperatura:", error);
        temperaturaElemento.innerText = "Erro";
    });

    onValue(umidadeRef, (snapshot) => {
        if (snapshot.exists()) {
            umidadeElemento.innerText = `${snapshot.val()}%`;
        } else {
            umidadeElemento.innerText = "Sem dados";
        }
    }, (error) => {
        console.error("Erro ao buscar a umidade:", error);
        umidadeElemento.innerText = "Erro";
    });
}

obterDadosSensores();
