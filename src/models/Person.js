import DateHelper from "../helpers/DateHelper"

export default class Person {

    static new(data) {
        return new Person(data.active, data.dateBorn, data.dateCreated, data.dateUpdated, data.id, data.name, data.sex)
    }

    constructor(active, dateBorn, dateCreated = new Date(), dateUpdated = new Date(), id, name, sex) {
        this.active = active
        this.dateBorn = dateBorn
        this.dateCreated = dateCreated
        this.dateUpdated = dateUpdated
        this.id = id
        this.name = name
        this.sex = sex
    }

    get dateBornBrazilian() {
        if (this.dateBorn) {
            return DateHelper.brazilian(this.dateBorn)
        }
        return null
    }

    get fullSex() {
        if (this.sex === "M") {
            return "Masculino"
        }
        return "Feminino"
    }

}