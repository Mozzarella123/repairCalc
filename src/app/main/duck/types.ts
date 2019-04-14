export enum ActionTypes {
    CREATE_PROJECT = 'CREATE_PROJECT',
    SELECT_PROJECT = 'SELECT_PROJECT',
    SELECT_ROOM = 'SELECT_ROOM',
}

export interface CreateProjectAction {
    type : ActionTypes.CREATE_PROJECT,
    title: string
}

export type Action = CreateProjectAction; /* | AnotherAciton | AnotherAciton | ... */