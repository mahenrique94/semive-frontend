export default class ProductStock {

    static new(data) {
        if (data) {
            return new ProductStock(data.count, data.dateCreated, data.dateUpdated, data.id)
        }
        return new ProductStock()
    }

    constructor(count, dateCreated = new Date(), dateUpdated = new Date(), id) {
        this.count = count
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.id = id
    }

}