export default class ProductCattegory {

    static new(data) {
        if (data) {
            return new ProductCattegory(data.active, data.dataCreated, data.dataUpdated, data.description, data.id)
        }
        return new ProductCattegory()
    }

    constructor(active = true, dataCreated = new Date(), dataUpdated = new Date(), description, id) {
        this.active = active
        this.dataCreated = new Date(dataCreated)
        this.dataUpdated = new Date(dataUpdated)
        this.description = description
        this.id = id
    }

}