import { Empresa } from "./Empresa.js";
import { Telefone } from "./Telefone.js";
import { Endereco } from "./Endereco.js";
import { Clientx } from "./Cliente.js";

let enderecoEmpresa = new Endereco('SP', 'SJC', 'alegria', '308')
let empresa = new Empresa('Maquiagem LTDA', 'Boti', '1245367-0001', enderecoEmpresa)

let endereco1 = new Endereco('SP','SJC','felicidade', '777')
let endereco2 = new Endereco('SP','SJC','humor', '888')
let endereco3 = new Endereco('SP','SJC','inveja', '333')
let endereco4 = new Endereco('SP','SJC','raiva', '666')
let endereco5 = new Endereco('SP','SJC','medo', '111')

let telefone1 = new Telefone('12', '3135467')
let telefone2 = new Telefone('12', '3132489')
     
     
let cliente1 = new Clientx('Isabelly', '40401877632', endereco1)
    cliente1.telefones.add(new Telefone('17', '947642738'))
    cliente1.telefones.add(new Telefone('18', '947642739'))
     
let cliente2 = new Clientx('Leticia', '49857377632', endereco2)
    cliente2.telefones.add(new Telefone('10', '947642938'))
    cliente2.telefones.add(new Telefone('+1', '9476424539'))
     
let cliente3 = new Clientx('rosita', '09743421632', endereco3)
    cliente3.telefones.add(new Telefone('13', '9476073938'))
    cliente3.telefones.add(new Telefone('15', '947642793739'))
     
let cliente4 = new Clientx('walmir', '04367277632', endereco4)
    cliente4.telefones.add(new Telefone('45', '947642983218'))
    cliente4.telefones.add(new Telefone('34', '94786573739'))
     
let cliente5 = new Clientx('fernando', '38762347632', endereco5)
    cliente5.telefones.add(new Telefone('+1', '94769732738'))
    cliente5.telefones.add(new Telefone('+2', '947823739'))


empresa.clientes.add(cliente1)
empresa.clientes.add(cliente2)
empresa.clientes.add(cliente3)
empresa.clientes.add(cliente4)
empresa.clientes.add(cliente5)

empresa.telefones.add(telefone1)
empresa.telefones.add(telefone2)
    
console.log(empresa.detalhe())