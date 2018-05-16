import { http } from "../../index"

import ProductCattegory from "../../../domain/product/cattegory/ProductCattegory"

import APIHelper from "../../../helpers/APIHelper"

const PRODUCT_CATTEGORY_ENDPOINT = "product/cattegory"

export default class ProductCattegoryAPI {

    static async edit(id) {
        return await http.get(`${PRODUCT_CATTEGORY_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => ProductCattegory.new(data))
    }

    static async list() {
        return await http.get(PRODUCT_CATTEGORY_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = []
                data.forEach(item => list.push(ProductCattegory.new(item)))
                return list
            })
    }

    static async remove(id) {
        return await http.delete(`${PRODUCT_CATTEGORY_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : PRODUCT_CATTEGORY_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}