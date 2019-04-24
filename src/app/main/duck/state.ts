import Project from "../models/Project";

export interface SelectedState {
	roomId: number;
}

export default interface MainState {
	project: Project;
	selected: SelectedState;
}
