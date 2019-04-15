import jsonpath from "jsonpath";
import * as math from "mathjs";
import Context from "./Context";

class EvaluatorService {
  evaluate(context: Context | Array<Context>, formula: Formula) {
    const { expression, parameters } = formula,
      expressionContext: any = {};

    for (let key in parameters) {
      const { path = "$", scope = "$" } = parameters[key],
        scopeObj = jsonpath.query(context, scope), 
        value = [];

      for (let scopeElem of scopeObj) {
        let paramValue = jsonpath.value(scopeElem, path);
        if (typeof paramValue !== "number") {
          paramValue = this.evaluate(scopeElem, jsonpath.value(scopeElem, path));
        }

        value.push(paramValue);
      }
      expressionContext[key] = value.length > 1 ? value : value[0] ;
    }
    
    return math.eval(expression, expressionContext);
  }
}

export interface ContextType {
  name?: string;
  formulas: {
    [key: string]: Formula;
  };
}

interface Formula {
  expression: string;
  parameters?: {
    [key: string]: Parameter;
  };
}

interface Parameter {
  scope?: string;
  path: string;
  type?: string;
}

export default EvaluatorService;
