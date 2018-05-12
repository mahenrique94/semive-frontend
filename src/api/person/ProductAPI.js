import { http } from "../"
import Product from "../../domain/product/Product"

import APIHelper from "../../helpers/APIHelper"

const PRODUCT_ENDPOINT = "product"

export default class ProductAPI {

    static async edit(id) {
        return await http.get(`${PRODUCT_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => Product.new(data))
    }

    static async list() {
        return await http.get(PRODUCT_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = []
                data.forEach(item => list.push(Product.new(item)))
                return list
            })
    }

    static async remove(id) {
        return await http.delete(`${PRODUCT_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PRODUCT_ENDPOINT
        }).then(APIHelper.handleSuccess)
            .then(response => Product.new(response))
    }

}