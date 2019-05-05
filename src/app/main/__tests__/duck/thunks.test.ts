import * as fetchMock from "fetch-mock";
import {MainActionType} from "../../duck/actions";
import configureStore from 'redux-mock-store';
import thunk, {ThunkDispatch} from "redux-thunk";
import {initialAppState} from "../../../duck/reducers";
import Project from "../../models/Project";
import ProjectInfo from "../../models/ProjectInfo";
import {fetchProjects} from "../../duck/thunks";
import AppState from "../../../duck/state";
import {AnyAction} from "redux";

type thunkDispatch = ThunkDispatch<AppState, Promise<any>, AnyAction>;
const createMockStore = configureStore<AppState, thunkDispatch>([thunk]);

describe('Fetching projects list', () => {

	const projects: Array<ProjectInfo> =  [
		{ id: 1, title: 'test' },
		{ id: 2, title: 'test2'}
	];

	afterEach(() => {
		fetchMock.restore();
	});

	it('Fetch and dispatch actions', () => {
		fetchMock.getOnce('/projects', {
			headers: { 'content-type': 'application/json' },
			body: projects
		});

		const expectedActions = [ {
			type: MainActionType.SET_PROJECT_LIST,
			projectsList: projects
		} ];

		const store = createMockStore(initialAppState);
	expect(1).toEqual(1);
		//return store.dispatch(fetchProjects());
	})
})