import { ThunkAction, ThunkDispatch } from "redux-thunk";
import AppState from "../../duck/state";
import TemplatesAction from "./actions";
import { isTemplatesArray } from "../models/Template";
import { setTemplates } from "./action-creators";

const TEMPLATES_PATH = '/templates'

export function fetchTemplates(): ThunkAction<void, {}, {}, TemplatesAction> {
    return (dispatch: ThunkDispatch<AppState, {}, TemplatesAction>) => {
        fetch(TEMPLATES_PATH)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error(`Templates fetching response: ${res.status} - ${res.statusText}`)
                }
            })
            .then(templates => {
                if (isTemplatesArray(templates)) {
                    dispatch(setTemplates(templates));
                } else {
                    throw new Error('Invalid templates format recieved.')
                }
            })
            .catch(err => console.error(err))
    }
}