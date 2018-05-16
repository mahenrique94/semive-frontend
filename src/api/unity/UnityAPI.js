import { http } from "../"

import APIHelper from "../../helpers/APIHelper";

import Unity from "../../domain/unity/Unity";

const UNITY_ENDPOINT = "unity"

export default class UnityAPI {

    static async list() {
        return await http.get(UNITY_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(Unity.new(item)))
                return list
            });
    }

}