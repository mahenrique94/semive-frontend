import { http } from "../"

import Order from "../../domain/order/Order"

import APIHelper from "../../helpers/APIHelper"

const ORDER_ENDPOINT = "order"

export default class OrderAPI {

    static async edit(id) {
        return await http.get(`${ORDER_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => Order.new(data))
    }

    static async list() {
        return await http.get(ORDER_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = []
                data.forEach(item => list.push(Order.new(item)))
                return list
            })
    }

    static async remove(id) {
        return await http.delete(`${ORDER_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        data.dateDelivery = data.dateDeliveryBrazilian
        return await http({
            data : JSON.stringify(data),
            method,
            url : ORDER_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}