import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import PersonDefinition from "../../../domain/person/definition/PersonDefinition";

const PERSON_DEFINITION_ENDPOINT = "person/definition"

export default class PersonDefinitionAPI {

    static async edit(id) {
        return await http.get(`${PERSON_DEFINITION_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => PersonDefinition.new(data))
    }

    static async listByIdPerson(idPerson) {
        return await http.get(`${PERSON_DEFINITION_ENDPOINT}/person/${idPerson}`)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(PersonDefinition.new(item)))
                return list
            });
    }

    static async remove(id) {
        return await http.delete(`${PERSON_DEFINITION_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PERSON_DEFINITION_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}