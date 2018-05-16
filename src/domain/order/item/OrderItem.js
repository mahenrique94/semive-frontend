import Order from "../Order";
import Product from "../../product/Product";

export default class OrderItem {

    static new(data) {
        if (data) {
            return new OrderItem(data.count, data.dateCreated, data.dateUpdated, data.id, Order.new(data.idOrder), Product.new(data.idProduct))
        }
        return new OrderItem()
    }

    constructor(count, dateCreated = new Date(), dateUpdated = new Date(), id, idOrder, idProduct) {
        this.count = count
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.id = id
        this.idOrder = idOrder
        this.idProduct = idProduct
    }

    get product() {
        if (this.idProduct) {
            return this.idProduct.description
        }
        return null
    }

}