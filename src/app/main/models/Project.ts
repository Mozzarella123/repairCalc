import Room from "./Room";

export default interface Project {
	title : string;
	currentRoom? : string;
	rooms : Array<Room>;
}
