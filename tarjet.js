export default class Tarjet{
    constructor(){
        this._inicio = null;
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

    crearTarjeta(base,hora, minutos){
        let recorrido = `Saliendo a las ${hora}:00 de la base ${base}<br>`;
        let minsHora = 0;
        let temp = this._inicio;
        if(base == temp.getName()){
            console.log(base + " - " + temp.getName());
            base = temp.siguiente;
        }else{
            temp = temp.siguiente;
            while(temp != this._inicio){
                if(base == temp.getName()){
                    console.log(base + " - " + temp.getName());
                    base = temp.siguiente;
                }
                temp = temp.siguiente;
            }
        }
        console.log(temp);
        console.log(base);
        while(minutos > 0){
            minutos -= base.getTime();
            minsHora += Number(base.getTime());
            if(minsHora > 59){
                hora++;
                minsHora -= 60;
                if(minsHora < 10){
                    minsHora = `0${minsHora}`
                }
            }
            if(minutos > 0){
                recorrido += `[${hora}:${minsHora}] Se llega a la base ${base.getName()} | Quedan ${minutos} minutos de recorrido <br>`
            }else if(minutos == 0){
                let final = minsHora - Math.abs(minutos);
                recorrido += `[${hora}:${final}] Se detiene el reccorrido llegando justo a la base ${base.getName()}`
            }else{
                let final = minsHora - Math.abs(minutos);
                recorrido += `[${hora}:${final}] Se detiene el reccorrido faltando ${Math.abs(minutos)} minutos para llegar a la base ${base.getName()}`
            }
            minsHora = Number(minsHora)
            base = base.siguiente;
        }
        return(recorrido)
    }

}