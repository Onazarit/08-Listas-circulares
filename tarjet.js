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

    // remove(id){
    //     let elim = null;
    //     if(id == this._inicio.getId()){
    //         elim = this._inicio;
    //         this._inicio = this._inicio.siguiente;
    //         if(this._inicio != null){
    //             this._inicio.anterior = null;
    //             this._limite--;
    //         }
    //         elim.siguiente = null;
    //         return(elim);
    //     }
    //     let temp = this._inicio;
    //     while(temp.siguiente != null && elim == null){
    //         if(temp.siguiente.getId() == id){
    //             elim = temp.siguiente;
    //             temp.siguiente = temp.siguiente.siguiente;
    //             temp.siguiente.siguiente.anterior = temp;
    //             elim.siguiente = null;
    //             elim.anterior = null;
    //         }
    //         else{
    //             temp = temp.siguiente;
    //         }
    //     }
    //     return(elim);
    // }

    // showAll(){
    //     if(this._inicio == null){
    //         return("");
    //     }
    //     else{
    //         return(this._showAll(this._inicio));
    //     }
    // }

    // _showAll(n){
    //     if(n.siguiente == null){
    //         return(n.info());
    //     }
    //     else{
    //         return(n.info() + "<br>" + this._showAll(n.siguiente));
    //     }
    // }

}