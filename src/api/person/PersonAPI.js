import { http } from "../"
import Person from "../../models/Person"

import APIHelper from "../../helpers/APIHelper"
import DateHelper from "../../helpers/DateHelper"

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

}