// actions, that will be handled only in main redux sub-store

import Room from "../models/Room";

export enum MainActionType {
	CREATE_PROJECT = 'CREATE_PROJECT',
	ADD_ROOM = 'ADD_ROOM',
	REMOVE_ROOM = 'REMOVE_ROOM',
	SELECT_ROOM = 'SELECT_ROOM'
}

export interface CreateProjectAction {
	type : MainActionType.CREATE_PROJECT,
	title: string
}

export const createProject = (title: string) : CreateProjectAction => ({
	type : MainActionType.CREATE_PROJECT,
	title
});

export interface AddRoomAction {
	type: MainActionType.ADD_ROOM,
	title: string
}

export const addRoom = (title: string): AddRoomAction => ({
	type: MainActionType.ADD_ROOM,
	title
});

export interface RemoveRoomAction {
	type: MainActionType.REMOVE_ROOM,
	id: number
}

export const removeRoom = (id: number): RemoveRoomAction => ({
	type: MainActionType.REMOVE_ROOM,
	id
});

export interface SelectRoomAction {
	type: MainActionType.SELECT_ROOM,
	id: number
}

export const selectRoom = (id: number): SelectRoomAction => ({
	type: MainActionType.SELECT_ROOM,
	id
});

type MainAction =
	CreateProjectAction |
	AddRoomAction |
	RemoveRoomAction |
	SelectRoomAction;

export default MainAction;
