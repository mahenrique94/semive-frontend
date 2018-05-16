import ProductCattegory from "../cattegory/ProductCattegory";

export default class ProductType {

    static new(data) {
        if (data) {
            return new ProductType(data.active, data.dateCreated, data.dateUpdated, data.description, data.id, ProductCattegory.new(ProductCattegory.new(data.idCattegory)))
        }
        return new ProductType()
    }

    constructor(active = true, dateCreated = new Date(), dateUpdated = new Date(), description, id, idCattegory) {
        this.active = active
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
        this.idCattegory = idCattegory
    }

    get cattegory() {
        if (this.idCattegory) {
            return this.idCattegory.description
        }
        return null
    }

}