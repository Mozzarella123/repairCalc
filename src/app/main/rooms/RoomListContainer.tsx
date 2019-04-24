import { connect } from "react-redux";
import {RoomListComponent, RoomListDispatchProps, RoomListStateProps} from "./RoomListComponent";
import AppState from "../../duck/state";
import {selectRoom} from "../duck/actions";

export const RoomListContainer = connect(
    ({ main : state }: AppState): RoomListStateProps => ({
        rooms: state.project.rooms,
        selectedRoomId: state.selected.roomId
    }),
    (dispatch): RoomListDispatchProps => ({
        selectRoom: id => dispatch(selectRoom(id))
    })
)(RoomListComponent);
