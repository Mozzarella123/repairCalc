import { MenuTab } from "./duck/types";
import React from "react";

interface Props {
    currentTab: MenuTab;
    setTab: (tab: MenuTab) => any;
}

export const MainComponent = ({ currentTab , setTab}: Props) => {
    console.log(MenuTab)
    return (
        <div>
            <div>
                <p>rooms</p>
            </div>
        </div>
    )
}