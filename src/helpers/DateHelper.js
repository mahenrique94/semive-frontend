import moment from "moment";

export default class DateHelper {
    
    static format(date) {
        return moment(date);
    }
    
    static brazilian(date) {
        return DateHelper.format(date).format("DD/MM/YYYY");
    }
    
}