import MainState, {initialMainState} from "../main/duck/redux/MainState";
import TemplateEditorState, {initialTemplateEditorState} from "../templateEditor/redux/TemplateEditorState";
import RoomEditorState, {initialRoomEditorState} from "../roomEditor/redux/RoomEditorState";

export default interface AppState {
	main: MainState;
	templateEditor: TemplateEditorState;
	roomEditor: RoomEditorState;
}

export const initialAppState : AppState = {
	main: initialMainState,
	templateEditor: initialTemplateEditorState,
	roomEditor: initialRoomEditorState
}
