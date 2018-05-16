import { http } from "../"

import APIHelper from "../../helpers/APIHelper";

import State from "../../domain/state/State";

const STATE_ENDPOINT = "state"

export default class StateAPI {

    static async list() {
        return await http.get(STATE_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(State.new(item)))
                return list
            });
    }

}