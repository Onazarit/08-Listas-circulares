/* Crear una lista circular que permita manejar un ruta formada por bases, las bases contarán con un nombre y una cantidad de minutos 
que son los que se tarda un camión a ella.
La lista circular, debe permitir, agregar bases, eliminar bases por nombre, listar las bases y se implementará un método llamado 
"crearTarjeta(base,hora, minutos)". Este método recibe el nombre de la base donde se comenzará el recorrido y un numero que se tomará 
como la hora de inicio (considerando el minuto 0), además la cantidad de minutos que debe trabajar, 
ejemplo crearTarjeta("Deportes",7,200), quiere decir que en la base cuyo nombre sea Deportes, comenzará a las 7:00 y durante 200 minutos 
estará avanzando entre las bases para devolver  cuales bases forman parte del recorrido y en que momento llegará a cada una de 
ellos hasta cumplir los 200 minutos.
Trabajar la vista del HTML que permita probar toda la funcionalidad y que tenga un DIV para ir mostrando los detalles de lo que se va mandando llamar de la estructura. */


import Base from "./base.js";
import Tarjet from "./tarjet.js";

class Main{
    constructor(){
        const btnAdd = document.getElementById("btnAdd");
        const btnDelete = document.getElementById("btnDelete");
        const btnShowAll = document.getElementById("btnShowAll");

        const btnTarjetStart = document.getElementById("btnTarjetStart");

        this._tarjet = new Tarjet();

        btnAdd.addEventListener('click', this._addToList);
        btnDelete.addEventListener('click', this._removeFromList);
        btnShowAll.addEventListener('click', this._ShowAll);

        btnTarjetStart.addEventListener('click', this._TarjetStart);
    }

    sendMessage(tipo,text){
        let detalles = document.getElementById("detalles");
        detalles.innerHTML=`
            <h2>${tipo}</h2>
            <p>${text}
        `;
    }

    _addToList = () => {
        let nombreBase = document.getElementById("baseName").value;
        let tiempoBase = document.getElementById("baseTime").value;

        let base = new Base(nombreBase, tiempoBase);
        
        let msg = this._tarjet.add(base);

        this.sendMessage("Añadir", msg);
    }

    // _removeFromList = () => {
    //     let codigo = document.getElementById("id").value;
    //     let result = this._storage.remove(codigo);
    //     if(result == null){
    //         this.sendMessage("Eliminar",`No se encontro un producto con el codigo ${codigo}`);
    //     }else{
    //     let text = `Se elimino: <br> ${result.info()}`
    //     this.sendMessage("Eliminar",text);
    //     }
    // }

    _ShowAll = () => {
        let text = this._tarjet.showAll();
        if(text == ""){
            this.sendMessage("Mostrar","No se encontro ninguna base")
        }
        else{
            this.sendMessage("Mostrar",`Las bases encontrados fueron: <br>` + text);
        }
    }

    _TarjetStart = () => {

    }

    
}

new Main();