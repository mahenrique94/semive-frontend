import { http } from "../../"

import APIHelper from "../../../helpers/APIHelper";

import DocumentType from "../../../domain/document/type/DocumentType";

const DOCUMENT_TYPE_ENDPOINT = "document/type"

export default class DocumentTypeAPI {

    static async list() {
        return await http.get(DOCUMENT_TYPE_ENDPOINT)
            .then(APIHelper.handleSuccess)
            .then(data => {
                const list = [];
                data.forEach(item => list.push(DocumentType.new(item)))
                return list
            });
    }

}