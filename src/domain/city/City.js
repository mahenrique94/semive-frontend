import State from "../state/State";

export default class City {

    static new(data) {
        if (data) {
            return new City(data.dateCreated, data.dateUpdated, data.description, data.id, State.new(data.idState))
        }
        return new City()
    }

    constructor(dateCreated = new Date(), dateUpdated = new Date(), description, id, idState) {
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
        this.idState = idState
    }

}