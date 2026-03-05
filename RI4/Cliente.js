export class Clientx{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome=nome
        this.#cpf=cpf
        this.endereco=endereco
        this.telefones= new Set()
    }

    get nomeMaiuscula(){
        return this.nome.toUpperCase()
    }
    get nomeMinuscula(){
        return this.nome.toLowerCase()
    }
    
}


