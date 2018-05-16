import ProductCattegory from "./ProductCattegory";

export default class ProductType {

    static new(data) {
        if (data) {
            return new ProductType(data.active, data.dataCreated, data.dataUpdated, data.description, data.id, data)
        }
        return new ProductType()
    }

    constructor(active = true, dataCreated = new Date(), dataUpdated = new Date(), description, id, data) {
        this.active = active
        this.dataCreated = new Date(dataCreated)
        this.dataUpdated = new Date(dataUpdated)
        this.description = description
        this.id = id
        this.idCattegory = ProductCattegory.new(data.idCattegory)
    }

}