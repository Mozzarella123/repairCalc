import { roomReducer, roomsReducer } from "../duck/reducers";
import MainAction, {addRoom, MainActionType, removeRoom} from "../../duck/redux/actions";

describe('room Reducer', () => {
    it("ADD_ROOM success", () => {
        const state = {},
            action = addRoom("Room 1"),
            results = roomReducer(state, action);

        expect(results).toEqual({
            title: "Room 1"
        })
    })
})

describe('roomsReducer Reducer', () => {
    const state = [{ id : 1, title: "Room 1" }, { id: 2, title: "Room 2" }]

    it("ADD_ROOM success", () => {
        const action = addRoom("Room 3");

        expect(roomsReducer(state, action)).toEqual([...state, { title: "Room 3" }])
    });

    it('REMOVE_ROOM success', () => {
        const action = removeRoom(1);

        expect(roomsReducer(state, action)).toEqual([{id:2, title: 'Room 2'}])
    })
})