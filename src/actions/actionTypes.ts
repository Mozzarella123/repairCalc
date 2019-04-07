import MenuTab from "../models/MenuTab";

export enum ActionType {
    SET_MENU_TAB = 'SET_MENU_TAB'
}

export interface SetMenuTabAction {
    type: ActionType.SET_MENU_TAB,
    tab: MenuTab
}

export type Action = SetMenuTabAction; /* | AnotherAciton | AnotherAciton | ... */