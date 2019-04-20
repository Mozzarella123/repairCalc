import { connect } from "react-redux";
import {RoomListComponent, RoomListDispatchProps, RoomListStateProps} from "./RoomListComponent";
import AppState from "../../redux/AppState";
import {selectRoom} from "../duck/redux/actions";

export const RoomListContainer = connect(
    ({ main : state }: AppState): RoomListStateProps => ({
        rooms: state.project.rooms,
        selectedRoomId: state.selected.roomId
    }),
    (dispatch): RoomListDispatchProps => ({
        selectRoom: id => dispatch(selectRoom(id))
    })
)(RoomListComponent);
