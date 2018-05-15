import DocumentType from "../../document/type/DocumentType";
import Person from "../Person";

export default class PersonDocument {

    static new(data) {
        return new PersonDocument(data.active, data.dateCreated, data.dateupdated, data.id, Person.new(data.idPerson), DocumentType.new(data.idType), data.value)
    }

    constructor(active = true, dateCreated = new Date(), dateUpdated = new Date(), id, idPerson, idType, value) {
        this.active = active
        this.dateCreated = dateCreated
        this.dateUpdated = dateUpdated
        this.id = id
        this.idPerson = idPerson
        this.idType = idType
        this.value = value
    }

    get document() {
        return this.idType.description
    }

}