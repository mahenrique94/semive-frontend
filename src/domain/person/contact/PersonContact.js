import Person from "../Person";

export default class PersonContact {

    static new(data) {
        if (data) {
            return new PersonContact(data.active, data.areaCode, data.cellphone, data.dateCreated, data.dateUpdated, data.email, data.id, Person.new(data.idPerson), data.name, data.telephone)
        }
        return new PersonContact()
    }

    constructor(active = true, areaCode, cellphone, dateCreated = new Date(), dateUpdated = new Date(), email, id, idPerson, name, telephone) {
        this.active = active
        this.areaCode = areaCode
        this.cellphone = cellphone
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.email = email
        this.id = id
        this.idPerson = idPerson
        this.name = name
        this.telephone = telephone
    }

}