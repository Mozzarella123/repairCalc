import Room from "./Room";
import ProjectInfo from "./ProjectInfo";

export default interface Project extends ProjectInfo {
	rooms : Array<Room>;
}
