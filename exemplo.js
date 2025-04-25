import { Verify } from "./verifyBody";

//aqui vc coloca um objeto com as propriedades que um certo corpo deve ter:
const usuario = new Verify({Name:'',Password:''}) 

function RegisterUser(body){
    const [err,result] = usuario.VerifyIfIsCorrect(body)
    if(result){
        console.log('As credenciais estão corretas')
    }
    else{
        console.log(`As credenciais não estão corretas err: ${err}`)
    }
}

RegisterUser({Idade:22,ComidaFavorita:'Picanha'}) //  vai dar erro pois você n colocou as credenciais corretas
RegisterUser({Name:'Nicolas',Password:'2324920394'}) // vai dar certo

//Você pode usar isso em sua API para validar o body do seu request