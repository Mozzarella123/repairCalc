import { connect } from "react-redux";
import AppState from "../duck/state";
import { TemplatesMenuComponent, TemplatesMenuStateProps } from "./TemplatesMenuComponent";

export const TemplatesMenuContainer = connect(
    ({ templateEditor : state }: AppState): TemplatesMenuStateProps => ({
        templates: state.templates
    }),
    null
)(TemplatesMenuComponent);
