import "jest";
import EvaluatorService from "./EvaluatorService";
import { equal } from "assert";
import Scope from "./Context";

test("formula test", () => {
  const entityRoom = {
    name: "room",
    formulas: {
      Sfloor: {
        expression: "length * width",
        parameters: {
          length: {
            scope: "$",
            path: '$.parameters["length"]'
          },
          width: {
            scope: "$",
            path: '$.parameters["width"]'
          }
        }
      }
    }
  };
  const entityWork = {
    name: "worktype",
    formulas: {
      price: {
        expression: "Sfloor * count",
        parameters: {
          Sfloor: {
            scope: "$.parentScope",
            path: '$.scopeType.formulas["Sfloor"]'
          },
          count: {
            scope: "$",
            path: '$.parameters["count"]'
          }
        }
      }
    },
    parameters: [
      {
        name: "count",
        type: "number"
      }
    ]
  };
  const context = new Scope();
  context.scopeType = entityWork;
  context.parameters = {
    count: 5
  };
  const parentContext = new Scope();
  parentContext.scopeType = entityRoom;
  parentContext.parameters = {
    length: 2,
    width: 4
  };
  context.parentScope = parentContext;

  const service = new EvaluatorService();
  const result = service.evaluate(context, context.scopeType.formulas["price"]);

  equal(result, 2 * 4 * 5);
});

test("scope without parameters", () => {
  const simpleScope = {
    formulas: {
      simple: {
        expression: "2 * 5"
      }
    }
  };
  const service = new EvaluatorService();

  const result = service.evaluate({}, simpleScope.formulas.simple);

  equal(result, 10);
});

test("scope with params in", () => {
  const scopeWithParams = {
    formulas: {
      complex: {
        expression: "2 * 5 * count",
        parameters: {
          count: {
            scope: "$",
            path: '$.parameters["count"]'
          }
        }
      }
    }
  };
  const service = new EvaluatorService();
  const complexScope = new Scope();
  complexScope.parameters = {
    count: 5
  };
  const result = service.evaluate(
    complexScope,
    scopeWithParams.formulas.complex
  );

  equal(result, 50);
});
