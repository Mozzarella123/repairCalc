import { SetMenuTabAction, ActionTypes, MenuTab } from "./types";

export const setMenuTab = (tab: MenuTab): SetMenuTabAction => ({
    type: ActionTypes.SET_MENU_TAB,
    tab: tab
})