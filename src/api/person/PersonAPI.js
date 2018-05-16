import { http } from "../"
import Person from "../../domain/person/Person"

import APIHelper from "../../helpers/APIHelper"

const PERSON_ENDPOINT = "person"

export default class PersonAPI {

    static async edit(id) {
        return await http.get(`${PERSON_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => Person.new(data))
    }

    static async list() {
        return await http.get(PERSON_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = []
                data.forEach(item => list.push(Person.new(item)))
                return list
            })
    }

    static async remove(id) {
        return await http.delete(`${PERSON_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        data.dateBorn = data.dateBornBrazilian
        return await http({
            data : JSON.stringify(data),
            method,
            url : PERSON_ENDPOINT
        }).then(APIHelper.handleSuccess)
            .then(response => Person.new(response))
    }

}