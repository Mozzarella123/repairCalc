import { ContextType } from "./EvaluatorService";

interface Context {
    scopeName? : string;
    parentContext? : Context;
    scopeType? : ContextType;
    parameters? : {
        [key : string] : number | Array<Context> | Context
    };
}

export default Context;