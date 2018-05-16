import Vue from "vue"
import VeeValidate, { Validator } from "vee-validate"

import BrowserHelper from "./helpers/BrowserHelper";

const dictionary = {
    custom : {
        name : {
            required : () => "Name é obrigatório"
        }
    }
}

Vue.use(VeeValidate)
Validator.localize(BrowserHelper.getLocale(), dictionary)