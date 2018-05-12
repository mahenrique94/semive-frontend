import ProductType from "./ProductType";
import Unity from "../unity/Unity";

export default class Product {

    static new(data) {
        return new Product(data.active, data.barCode, data.brand, data.dateCreated, data.dateUpdated, data.description, data.id, data)
    }

    constructor(active = true, barCode, brand, dateCreated = new Date(), dateUpdated = new Date(), description, id, data) {
        this.active = active
        this.barCode = barCode
        this.brand = brand
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
        this.idUnity = Unity.new(data.idUnity)
        this.idType = ProductType.new(data.idType)
    }

}