import {ActionTypes} from './types'

const addRoom = (title : string) => ({
    type : ActionTypes.ADD_ROOM,
    title
})

const removeRoom = (id : string) => ({
    type : ActionTypes.REMOVE_ROOM
})

const selectRoom = (id : string) => ({
    type : ActionTypes.SELECT_ROOM
})