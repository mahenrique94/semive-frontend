import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import AddressType from "../../../domain/address/type/AddressType";

const ADDRESS_TYPE_ENDPOINT = "address/type"

export default class AddressTypeAPI {

    static async list() {
        return await http.get(ADDRESS_TYPE_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(AddressType.new(item)))
                return list
            });
    }

}