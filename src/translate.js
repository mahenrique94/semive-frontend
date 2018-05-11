import Vue from "vue"
import VueI18n from "vue-i18n"

import BrowserHelper from "./helpers/BrowserHelper";

Vue.use(VueI18n)

const messages = {
    pt : {
        button : {
            no : "Não",
            yes : "Sim"
        },
        describe : {
            app : "O Semive é um sistema simples para controle de clientes, fornecedores, produtos e pedidos."
        },
        label : {
            active : "Ativo",
            all : "Todos",
            date : {
                born : "Data de Nascimento"
            },
            female : "Feminino",
            male : "Masculino",
            name : "Nome",
            sex : "Sexo"
        },
        link : {
            dashboard : "/",
            form : "form",
            list : "list",
            orders : "/pedidos",
            person : "/pessoas",
            products : "/produtos"
        },
        menu : {
            dashboard : "Dashboard",
            form : "Formulário",
            list : "Lista",
            orders : "Pedidos",
            person : "Pessoas",
            products : "Produtos"
        },
        message : {
            api : {
                remove : {
                    success : "Registro removido com sucesso"
                },
                save : {
                    success : "Registro criado com sucesso"
                }
            },
            app : {
                enjoy : "Aproveite as nossas funcionalides!"
            },
            confirm : {
                remove : "Atenção, a remoção de um registro é PERMANENTE"
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
            confirm : "Você tem certeza?",
            success : "Sucesso",
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