export default class ProductValue {

    static new(data) {
        if (data) {
            return new ProductValue(data.dateCreated, data.dateUpdated, data.id, data.value)
        }
        return new ProductValue()
    }

    constructor(dateCreated = new Date(), dateUpdated = new Date(), id, value) {
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.id = id,
        this.value = value
    }

}