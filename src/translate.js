import Vue from "vue"
import VueI18n from "vue-i18n"

import BrowserHelper from "./helpers/BrowserHelper";

Vue.use(VueI18n)

const messages = {
    pt : {
        describe : {
            app : "O Semive é um sistema simples para controle de clientes, fornecedores, produtos e pedidos."
        },
        label : {
            date : {
                born : "Data de Nascimento"
            },
            name : "Nome",
            sex : "Sexo"
        },
        link : {
            dashboard : "/",
            orders : "/pedidos",
            person : "/pessoas",
            products : "/produtos"
        },
        menu : {
            dashboard : "Dashboard",
            orders : "Pedidos",
            person : "Pessoas",
            products : "Produtos"
        },
        message : {
            app : {
                enjoy : "Aproveite as nossas funcionalides!"
            },
            table : {
                empty : "A tabela está vázia",
                linePerPage : "Linhas por página",
                lines : "Linhas",
                noResult : "Nenhum registro encontrado",
                of : "de"
            }
        },
        placeholder : {
            search : "Digite aqui para filtrar"
        },
        title : {
            app : "Semive",
            welcome : "Bem vindo ao Semive"
        },
        validator : {
            form : {
                required : "É obrigatório"
            }
        }
    }
}

export default new VueI18n({
    locale : BrowserHelper.getLocale(),
    messages
})