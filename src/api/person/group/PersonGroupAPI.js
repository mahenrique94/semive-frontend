import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import PersonGroup from "../../../domain/person/group/PersonGroup";

const PERSON_GROUP_ENDPOINT = "person/group"

export default class PersonGroupAPI {

    static async edit(id) {
        return await http.get(`${PERSON_GROUP_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => PersonGroup.new(data))
    }

    static async list() {
        return await http.get(PERSON_GROUP_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(PersonGroup.new(item)))
                return list
            });
    }

    static async remove(id) {
        return await http.delete(`${PERSON_GROUP_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PERSON_GROUP_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}