export default class BrowserHelper {

    static getLocale() {
        const language = navigator.languages.length ? navigator.languages[0] : navigator.language;
        const locale = language.split("-")[0];
        return locale
    }

}