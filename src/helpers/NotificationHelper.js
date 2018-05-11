import Vue from "vue";

import i18n from "../translate";

export default class NotificationHelper {

    static success(message) {
        Vue.swal({
            showCloseButton : true,
            text : message,
            title : i18n.t("title.success"),
            type : "success"
        })
    }

}