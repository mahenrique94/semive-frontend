import { http } from "../../index"

import ProductType from "../../../domain/product/type/ProductType"

import APIHelper from "../../../helpers/APIHelper"

const PRODUCT_TYPE_ENDPOINT = "product/type"

export default class ProductTypeAPI {

    static async edit(id) {
        return await http.get(`${PRODUCT_TYPE_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => ProductType.new(data))
    }

    static async list() {
        return await http.get(PRODUCT_TYPE_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = []
                data.forEach(item => list.push(ProductType.new(item)))
                return list
            })
    }

    static async remove(id) {
        return await http.delete(`${PRODUCT_TYPE_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PRODUCT_TYPE_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}