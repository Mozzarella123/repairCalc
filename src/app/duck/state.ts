import MainState from "../main/duck/state";
import TemplateEditorState from "../templateEditor/duck/state";
import RoomEditorState from "../roomEditor/duck/state";

export default interface AppState {
	main: MainState;
	templateEditor: TemplateEditorState;
	roomEditor: RoomEditorState;
}
