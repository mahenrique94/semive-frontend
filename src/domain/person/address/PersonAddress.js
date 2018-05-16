import AddressType from "../../address/type/AddressType";
import City from "../../city/City";
import Person from "../Person";

export default class PersonAddress {

    static new(data) {
        if (data) {
            return new PersonAddress(data.active, data.address, data.complement, data.dateCreated, data.dateUpdated, data.district, data.id, City.new(data.idCity), Person.new(data.idPerson), AddressType.new(data.idType), data.number, data.zipCode)
        }
        return new PersonAddress()
    }

    constructor(active = true, address, complement, dateCreated = new Date(), dateUpdated = new Date(), district, id, idCity, idPerson, idType, number, zipCode) {
        this.active = active
        this.address = address
        this.complement = complement
        this.dateCreated = new Date(dateCreated)
        this.dateUpdated = new Date(dateUpdated)
        this.district = district
        this.id = id
        this.idCity = idCity
        this.idPerson = idPerson
        this.idType = idType
        this.number = number
        this.zipCode = zipCode
    }

    get type() {
        if (this.idType) {
            return this.idType.description
        }
        return null
    }

}