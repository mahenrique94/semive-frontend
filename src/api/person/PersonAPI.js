import { http } from "../"
import Person from "../../models/Person"

import APIHelper from "../../helpers/APIHelper"

export default class PersonAPI {

    static async list() {
        return await http.get("person")
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = []
                data.forEach(item => list.push(Person.new(item)))
                return list
            })
    }

    static async remove(id) {
        return await http.delete(`person/${id}`);
    }

    static async save(person) {
        person.dateBorn = person.dateBornBrazilian
        return await http.post("person", JSON.stringify(person))
            .then(APIHelper.handleSuccess)
    }

}