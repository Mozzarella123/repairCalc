import { ActionTypes, Action } from "../duck/types";
import { room, rooms } from "../duck/reducers";

describe('room Reducer', () => {
    it("ADD_ROOM success", () => {
        const state = {}
        const action: Action = {
            type: ActionTypes.ADD_ROOM,
            title: "Room 1"
        }
        const results = room(state, action);

        expect(results).toEqual({
            title: "Room 1"
        })
    })
})

describe('rooms Reducer', () => {
    const state = [{ id : '1', title: "Room 1" }, { id: '2', title: "Room 2" }]

    it("ADD_ROOM success", () => {
        const action: Action = {
            type: ActionTypes.ADD_ROOM,
            title: "Room 3"
        }

        expect(rooms(state, action)).toEqual([...state, { title: "Room 3" }])
    });

    it('REMOVE_ROOM success', () => {
        const action : Action = {
            type : ActionTypes.REMOVE_ROOM,
            id : '1'
        }

        expect(rooms(state, action)).toEqual([{id:'2', title: 'Room 2'}])
    })
})