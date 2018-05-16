import Person from "../person/Person";

import DateHelper from "../../helpers/DateHelper";

export default class Order {

    static new(data) {
        if (data) {
            return new Order(data.dateCreated, data.dateDelivery, data.dateUpdated, data.id, Person.new(data.idPerson))
        }
        return new Order()
    }

    constructor(dateCreated = new Date(), dateDelivery = new Date(), dateUpdated = new Date(), id, idPerson) {
        this.dateCreated = new Date(dateCreated)
        this.dateDelivery = new Date(dateDelivery)
        this.dateUpdated = new Date(dateUpdated)
        this.id = id
        this.idPerson = idPerson
    }

    get person() {
        if (this.idPerson) {
            return this.idPerson.name
        }
        return null
    }

    get dateDeliveryBrazilian() {
        if (this.dateDelivery) {
            return DateHelper.brazilian(this.dateDelivery)
        }
        return null
    }

}