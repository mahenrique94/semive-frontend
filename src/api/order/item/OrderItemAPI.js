import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import OrderItem from "../../../domain/order/item/OrderItem";

const ORDER_ITEM_ENDPOINT = "order/item"

export default class OrderItemAPI {

    static async edit(id) {
        return await http.get(`${ORDER_ITEM_ENDPOINT}/${id}`)
            .then(APIHelper.handleSuccess)
            .then(data => OrderItem.new(data))
    }

    static async listByIdOrder(idOrder) {
        return await http.get(`${ORDER_ITEM_ENDPOINT}/order/${idOrder}`)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(OrderItem.new(item)))
                return list
            });
    }

    static async remove(id) {
        return await http.delete(`${ORDER_ITEM_ENDPOINT}/${id}`);
    }

    static async save(data) {
        let method = "post"
        if (data.id) {
            method = "put"
        }

        return await http({
            data : JSON.stringify(data),
            method,
            url : ORDER_ITEM_ENDPOINT
        }).then(APIHelper.handleSuccess)
    }

}