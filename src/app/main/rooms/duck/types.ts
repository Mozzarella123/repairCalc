import Context from "../../../../libraries/Context";

export enum ActionTypes {
  ADD_ROOM = "ADD_ROOM",
  REMOVE_ROOM = "REMOVE_ROOM",
  SELECT_ROOM = "SELECT_ROOM"
}

export interface AddRoomAction {
    type : ActionTypes.ADD_ROOM,
    title : string
}

export interface RemoveRoomAction {
    type : ActionTypes.REMOVE_ROOM,
    id : string
}

export interface Room extends Context {
    id? : string,
    title? : string
}

export type Action = AddRoomAction | RemoveRoomAction