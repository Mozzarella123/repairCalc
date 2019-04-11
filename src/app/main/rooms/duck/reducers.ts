import { Action, ActionTypes, Room } from "./types";
import Context from "../../../../libraries/Context";

export const rooms = (state: Array<Room>, action: Action): any => {
  switch (action.type) {
    case ActionTypes.ADD_ROOM:
      return [...state, room({}, action)];
    case ActionTypes.REMOVE_ROOM:
      return state.filter(v => v.id !== action.id);
  }
};

export const room = (state: Room = {}, action: Action): any => {
  switch (action.type) {
    case ActionTypes.ADD_ROOM:
      return {
        title: action.title,
      };
  }
};
