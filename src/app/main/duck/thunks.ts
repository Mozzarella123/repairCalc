// actions for async operations, like fetching from server, handled by redux-thunk middleware

import {SetProjectListAction, setProrjectList} from "./actions";
import {ActionCreator, AnyAction, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import AppState from "../../duck/state";

export function fetchProjects()  {
	return (dispatch: Dispatch<AnyAction>) => {
		fetch('/projects')
			.then(response => response.json())
			.then(projects => dispatch(setProrjectList(projects)))
			.catch(e => {
				setProrjectList([]);
				console.log(e);
			})
	}
}
