import Vue from "vue"
import VueMultiLanguage from "vue-multilanguage"

Vue.use(VueMultiLanguage, {
    default : "pt",
    pt : {
        describe : {
            app : "O Semive é um sistema simples para controle de clientes, fornecedores, produtos e pedidos."
        },
        menu : {
            dashboard : "Dashboard",
                orders : "Pedidos",
                person : "Pessoas",
                products : "Produtos",
                register : "Cadastro"
        },
        message : {
            app : {
                enjoy : "Aproveite as nossas funcionalides!"
            }
        },
        title : {
            app : "Semive",
                welcome : "Bem vindo ao Semive"
        }
    }
})