export default class Unity {

    static new(data) {
        return new Unity(data.dateCreated, data.dateUpdated, data.description, data.id, data.unity)
    }

    constructor(dateCreated = new Date(), dateUpdated = new Date(), description, id, unity) {
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
        this.unity = unity
    }

}