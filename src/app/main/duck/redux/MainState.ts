import Project from "../models/Project";

export interface SelectedState {
	roomId: number;
}

export const initialSelectedState: SelectedState = {
	roomId: null
};

export default interface MainState {
	project: Project;
	selected: SelectedState;
}

export const initialMainState: MainState = {
	project: null,
	selected: initialSelectedState
};
