import Person from "../Person";
import PersonGroup from "../group/PersonGroup";

export default class PersonDefinition {

    static new (data) {
        if (data) {
            return new PersonDefinition(data.active, data.dateCreated, data.dateUpdated, data.id, PersonGroup.new(data.idGroup), Person.new(data.idPerson))
        }
        return new PersonDefinition()
    }

    constructor(active = true, dateCreated = new Date(), dateUpdated = new Date(), id, idGroup, idPerson) {
        this.active = active
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.id = id
        this.idGroup = idGroup
        this.idPerson = idPerson
    }

    get group() {
        return this.idGroup.description
    }

}