import Country from "../country/Country";

export default class State {

    static new(data) {
        if (data) {
            return new State(data.dateCreated, data.dateUpdated, data.description, data.id, Country.new(data.idCountry), data.state)
        }
        return new Country()
    }

    constructor(dateCreated = new Date(), dateUpdated = new Date(), description, id, idCountry, state) {
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.description = description
        this.id = id
        this.idCountry = idCountry
        this.state = state
    }

}