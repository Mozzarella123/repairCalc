import Project from "../models/Project";
import ProjectInfo from "../models/ProjectInfo";

export interface SelectedState {
	roomId: number;
}

export default interface MainState {
	project: Project;
	projectsList: Array<ProjectInfo>;
	selected: SelectedState;
}
