import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import PersonDocument from "../../../domain/person/document/PersonDocument";

const PERSON_DOCUMENT_ENDPOINT = "person/document"

export default class PersonDocumentAPI {

    static async edit(id) {
        return await http.get(`${PERSON_DOCUMENT_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => PersonDocument.new(data))
    }

    static async listByIdPerson(idPerson) {
        return await http.get(`${PERSON_DOCUMENT_ENDPOINT}/person/${idPerson}`)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(PersonDocument.new(item)))
                return list
            });
    }

    static async remove(id) {
        return await http.delete(`${PERSON_DOCUMENT_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PERSON_DOCUMENT_ENDPOINT
        }).then(APIHelper.handleSuccess)
            .then(response => PersonDocument.new(response))
    }

}