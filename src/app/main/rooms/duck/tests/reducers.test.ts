import { ActionTypes, Action } from "../types";
import { room } from "../reducers";

describe('room Reducer', ()=> {
    it("ADD_ROOM success", () => {
        const state = {}
        const action : Action = {
            type : ActionTypes.ADD_ROOM,
            title : "Room 1"
        }
        const results = room(state, action);
        
        expect(results).toEqual({
            title : "Room 1"
        })
    })
})