export default class Country {

    static new(data) {
        return new Country(data.dateCreated, data.dateUpdated, data.description, data.id)
    }

    constructor(dateCreated = new Date(), dateUpdated = new Date(), description, id) {
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
    }

}