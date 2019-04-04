import MenuTab from "../models/MenuTab";
import { SetMenuTabAction, ActionType } from "./actionTypes";

export const setMenuTab = (tab: MenuTab): SetMenuTabAction => ({
    type: ActionType.SET_MENU_TAB,
    tab: tab
})