export class Empresa{
    #cnpj
    constructor(rasaoSocial, nomeFantasia, cnpj, endereco){
        this.rasaoSocial=rasaoSocial
        this.nomeFantasia=nomeFantasia
        this.#cnpj=cnpj
        this.clientes= new Set()
        this.telefones= new Set()
    }


    get rasaoSocialMaiuscula(){
          return this.rasaoSocial.toUpperCase()
      }
      
      get rasaoSocialMinuscula(){
          return this.rasaoSocial.toLowerCase()
      }


      get nomeFantasiaMaiuscula(){
          return this.nomeFantasia.toUpperCase()
      }
      
      get raznomeFantasiaMinuscula(){
          return this.nomeFantasia.toLowerCase()
    }



    detalhe(){
       let detalhe = `Razão Social: ${this.rasaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n`;
        detalhe += "--------------- \n";
        
        this.clientes.forEach(cliente => {
            detalhe += `Nome: ${cliente.nome}\n`;
            // CORREÇÃO: Acessando corretamente as propriedades do endereço
            detalhe += `Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numeroE} \n`;
            
            cliente.telefones.forEach(telefone => {
                detalhe += `ddd: ${telefone.ddd} numero: ${telefone.numero} \n`;
            });
            detalhe += "--------------- \n";
        });
        return detalhe;
    }

}