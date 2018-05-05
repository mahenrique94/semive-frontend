import { http } from "../config"

import APIHelper from "../../helpers/APIHelper"
import DateHelper from "../../helpers/DateHelper"

export default class PersonAPI {

    static async list() {
        return await http.get("person")
            .then(APIHelper.handleSuccess)
            .then(list => {
                list.forEach(item => item.dateBorn_brazilian = DateHelper.brazilian(item.dateBorn))
                return list
            })
    }

}