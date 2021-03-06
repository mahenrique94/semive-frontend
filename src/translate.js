import Vue from "vue"
import VueI18n from "vue-i18n"

import BrowserHelper from "./helpers/BrowserHelper";

Vue.use(VueI18n)

const messages = {
    pt : {
        button : {
            cancel : "Cancelar",
            new : "Adicionar novo",
            no : "Não",
            save : "Salvar",
            yes : "Sim"
        },
        describe : {
            app : "O Semive é um sistema simples para controle de clientes, fornecedores, produtos e pedidos."
        },
        label : {
            active : "Ativo",
            address : "Endereço",
            all : "Todos",
            areaCode : "DDD",
            barCode : "Código de Barra",
            brand : "Marca",
            cattegory : "Categoria",
            cellphone : "Celular",
            city : "Cidade",
            complement : "Complemento",
            count : "Quantidade",
            date : {
                born : "Data de Nascimento",
                delivery : "Data de Entrega"
            },
            description : "Descrição",
            district : "Bairro",
            document : "Documento",
            email : "Email",
            female : "Feminino",
            group : "Grupo",
            male : "Masculino",
            name : "Nome",
            number : "Número",
            person : "Pessoa",
            product : "Produto",
            sex : "Sexo",
            state : "Estado",
            telephone : "Telefone",
            type : "Tipo",
            unity : "Unidade",
            value : "Valor",
            zipCode : "CEP"
        },
        link : {
            dashboard : "/",
            form : "form",
            list : "list",
            orders : "/order",
            person : "/person",
            personDocument : "/person/document",
            personAddress : "/person/address",
            products : "/product",
            productsCattegory : "/product/cattegory",
            productsType : "/product/type"
        },
        menu : {
            dashboard : "Dashboard",
            form : "Formulário",
            list : "Lista",
            mock : "Mockar",
            orders : "Pedidos",
            person : "Pessoas",
            products : "Produtos",
            productsCattegory : "Produtos / Categorias",
            productsType : "Produtos / Tipos",
            unmock : "Desmockar"
        },
        message : {
            api : {
                edit : {
                    error : "Não foi possível editar o registro"
                },
                list : {
                    error : "Não foi possível listar os registros"
                },
                remove : {
                    error : "Não foi possível excluir o registro",
                    success : "Registro removido com sucesso"
                },
                save : {
                    error : "Não foi possível criar um novo registro",
                    success : "Registro criado com sucesso"
                },
                update : {
                    error : "Não foi possível atualizar o registro",
                    success : "Registro atualizado com sucesso"
                }
            },
            app : {
                enjoy : "Aproveite as nossas funcionalides!"
            },
            confirm : {
                mock : "Inserir registros para teste no banco de dados",
                remove : "Atenção, a remoção de um registro é PERMANENTE",
                unmock : "Atenção, ao remover os registros para teste será PERMANENTE"
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
            search : "Digite aqui para filtrar",
            select : "Nenhuma opção adicionada"
        },
        tab : {
            address : "Endereço",
            contact : "Contato",
            definition: "Definição",
            document : "Documento",
            item : "Item",
            stock : "Estoque",
            value : "Valor"
        },
        title : {
            app : "Semive",
            confirm : "Você tem certeza?",
            error : "Erro",
            form : {
                address : "Formulário de Endereço",
                contact : "Formulário de Contato",
                definition : "Formulário de Definição",
                document : "Formulário de Documento",
                item : "Formulário de Item"
            },
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