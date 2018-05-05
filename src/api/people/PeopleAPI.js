import { http } from "../config"

export default class PeopleAPI {

    static async list() {
        return await http.get("person")
    }

}