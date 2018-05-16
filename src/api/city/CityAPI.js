import { http } from "../"

import APIHelper from "../../helpers/APIHelper";

import City from "../../domain/city/City";

const CITY_ENDPOINT = "city"

export default class CityAPI {

    static async listByState(idState) {
        return await http.get(`${CITY_ENDPOINT}/state/${idState}`)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(City.new(item)))
                return list
            });
    }

}