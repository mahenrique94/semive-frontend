import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import PersonAddress from "../../../domain/person/address/PersonAddress";

const PERSON_ADDRESS_ENDPOINT = "person/address"

export default class PersonAddressAPI {

    static async edit(id) {
        return await http.get(`${PERSON_ADDRESS_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => PersonAddress.new(data))
    }

    static async listByIdPerson(idPerson) {
        return await http.get(`${PERSON_ADDRESS_ENDPOINT}/person/${idPerson}`)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(PersonAddress.new(item)))
                return list
            });
    }

    static async remove(id) {
        return await http.delete(`${PERSON_ADDRESS_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PERSON_ADDRESS_ENDPOINT
        }).then(APIHelper.handleSuccess)
            .then(response => PersonAddress.new(response))
    }

}