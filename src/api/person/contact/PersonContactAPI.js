import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import PersonContact from "../../../domain/person/contact/PersonContact";

const PERSON_CONTACT_ENDPOINT = "person/contact"

export default class PersonContactAPI {

    static async edit(id) {
        return await http.get(`${PERSON_CONTACT_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => PersonContact.new(data))
    }

    static async listByIdPerson(idPerson) {
        return await http.get(`${PERSON_CONTACT_ENDPOINT}/person/${idPerson}`)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(PersonContact.new(item)))
                return list
            });
    }

    static async remove(id) {
        return await http.delete(`${PERSON_CONTACT_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PERSON_CONTACT_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}