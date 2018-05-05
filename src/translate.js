import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

const language = navigator.languages.length ? navigator.languages[0] : navigator.language;
const locale = language.split("-")[0];
const messages = {
    locale : "pt",
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
        label : {
            date : {
                born : "Data de Nascimento"
            },
            name : "Nome"
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
        }
    }
}

export default new VueI18n({
    locale,
    messages
})