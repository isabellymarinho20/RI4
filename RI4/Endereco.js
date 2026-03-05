export class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado=estado
        this.cidade=cidade
        this.rua=rua
        this.numero=numero
    }

 get ruaMaiuscula(){
        return this.rua.toUpperCase()
    }
    get ruaMinuscula(){
        return this.rua.toLowerCase()
    }

     get cidadeMaiuscula(){
        return this.cidade.toUpperCase()
    }
    get cidadeMinuscula(){
        return this.cidade.toLowerCase()
    }
    
     get estadoMaiuscula(){
        return this.estado.toUpperCase()
    }
    get estadoMinuscula(){
        return this.estado.toLowerCase()
    }


}