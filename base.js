export default class Base{
    constructor(name, time){
        this._name = name;
        this._time = time;
        this._siguiente = null;
        this._anterior = null;
    }

    info(){
        return `<br>Base: ${this._name} | Tiempo: ${this._time} `;
    }

    getName(){
        return(this._name);
    }
}