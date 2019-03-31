import * as jsonpath from "jsonpath";
import * as math from "mathjs";

class EvaluatorService {
  evaluate(context: any, formula: any) {
    const { expression, parameters } = formula;
    const expressionScope: any = {};

    for (let key in parameters) {
      let param = parameters[key];
      const scope = jsonpath.value(context, param.scope);
      let value = jsonpath.value(scope, param.path);

      if (typeof value != "number") {
        value = this.evaluate(scope, value);
      }

      expressionScope[key] = value;
    }

    return math.eval(expression, expressionScope);
  }
}

export default EvaluatorService;
