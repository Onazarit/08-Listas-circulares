export default class Tarjet{
    constructor(){
        this._inicio = null;
        this._limite = 0;
    }

    add(nuevo){
        if(this._inicio == null){ // En caso de lista vacia
            this._inicio = nuevo;
            this._inicio.siguiente = this._inicio;
            this._inicio.anterior = this._inicio
            return(`Se añadio: ${nuevo.info()}`);
        }
        else{
            let ultimo = this._inicio.anterior;
            nuevo.siguiente = this._inicio;
            nuevo.anterior = ultimo;
            ultimo.siguiente = nuevo;
            this._inicio.anterior = nuevo;
            return(`Se añadio: ${nuevo.info()}`);
        }
    }

    remove(baseNombre){
        let elim = null;
        if(baseNombre == this._inicio.getName()){
            elim = this._inicio;
            let ultimo = this._inicio.anterior;
            this._inicio = this._inicio.siguiente;
            this._inicio.anterior = ultimo;
            ultimo.siguiente = this._inicio;
            return(elim);
        }
        
        let temp = this._inicio
        do{
            if(temp.siguiente.getName() == baseNombre){
                elim = temp.siguiente;
                temp.siguiente = temp.siguiente.siguiente;
                temp.siguiente.anterior = temp;
                elim.siguiente = null;
                elim.anterior = null;
            }
            else{
                temp = temp.siguiente;
            }
        }while(temp != this._inicio)
        return(elim);
    }

    showAll(){
        let res="";
        if (this._inicio!=null){
            let temp=this._inicio;
            do{
                res += temp.info() + '\n';
                temp=temp.siguiente;
            }while(temp!=this._inicio);
        }
        return res;
    }

}