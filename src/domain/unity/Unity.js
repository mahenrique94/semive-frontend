export default class Unity {

    static new(data) {
        return new Unity(data.dataCreated, data.dataUpdated, data.description, data.id, data.unity)
    }

    constructor(dataCreated = new Date(), dataUpdated = new Date(), description, id, unity) {
        this.dataCreated = new Date(dataCreated)
        this.dataUpdated = new Date(dataUpdated)
        this.description = description
        this.id = id
        this.unity = unity
    }

}