import { ThunkAction, ThunkDispatch } from "redux-thunk";
import AppState from "../../duck/state";
import TemplatesAction from "./actions";
import { isTemplatesArray, isTemplate } from "../models/Template";
import { setTemplates, updateTemplate, selectTemplate } from "./action-creators";

const TEMPLATES_PATH = '/reports'

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

export function saveTemplate(): ThunkAction<void, {}, {}, TemplatesAction> {
    return (dispatch: ThunkDispatch<AppState, {}, TemplatesAction>, getState: () => AppState) => {
        const { template } = getState().templateEditor.selected;

        fetch(`${TEMPLATES_PATH}/${template.id}`, {
            method: 'POST',
            headers: {
                contentType: 'application/json'
            }, 
            body: JSON.stringify(template)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.text;
                } else {
                    throw new Error(`Error occured during saving template : ${res.status} - ${res.statusText}`);
                }
            })
            .then(() => {
                dispatch(updateTemplate(template));
                dispatch(selectTemplate(null));
            })
            .catch(err => console.error(err))
    }
}
