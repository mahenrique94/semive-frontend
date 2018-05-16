export default class AddressType {

    static new(data) {
        if (data) {
            return new AddressType(data.active, data.dateCreated, data.dateUpdated, data.description, data.id)
        }
        return new AddressType()
    }

    constructor(active = true, dateCreated = new Date(), dateUpdated = new Date(), description, id) {
        this.active = active
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
    }

}