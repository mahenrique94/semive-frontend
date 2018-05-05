import DateHelper from "../helpers/DateHelper"

export default class Person {

    static new(data) {
        return new Person(data.dateBorn, data.dateCreated, data.dateUpdated, data.id, data.name, data.sex)
    }

    constructor(dateBorn = new Date(), dateCreated = new Date(), dateUpdated = new Date(), id = 0, name = "", sex = "") {
        this.dateBorn = dateBorn
        this.dateCreated = dateCreated
        this.dateUpdated = dateUpdated
        this.id = id
        this.name = name
        this.sex = sex
    }

    get dateBornBrazilian() {
        return DateHelper.brazilian(this.dateBorn)
    }

    get fullSex() {
        if (this.sex === "M") {
            return "Masculino"
        }
        return "Feminino"
    }

}