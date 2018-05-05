export default class FunctionalHelper {

    static pipeline(parameter, ...fns) {
        return fns.reduce((result, fn) => fn(result), parameter);
    }
    
}