import { http } from "../config"

import APIHelper from "../../helpers/APIHelper"

export default class PersonAPI {

    static async list() {
        return await http.get("person")
            .then(APIHelper.handleSuccess)
    }

}