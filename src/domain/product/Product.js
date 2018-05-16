import ProductStock from "./stock/ProductStock";
import ProductType from "./type/ProductType";
import ProductValue from "./value/ProductValue";
import Unity from "../unity/Unity";

export default class Product {

    static new(data) {
        if (data) {
            return new Product(data.active, data.barCode, data.brand, data.dateCreated, data.dateUpdated, data.description, data.id, ProductType.new(data.idType), Unity.new(data.idUnity), ProductStock.new(data.stock), ProductValue.new(data.value))
        }
        return new Product()
    }

    constructor(active = true, barCode, brand, dateCreated = new Date(), dateUpdated = new Date(), description, id, idType, idUnity, stock, value) {
        this.active = active
        this.barCode = barCode
        this.brand = brand
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
        this.idType = idType
        this.idUnity = idUnity
        this.stock = stock
        this.value = value
    }
}