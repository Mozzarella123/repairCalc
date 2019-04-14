import "jest";
import EvaluatorService, { ContextType } from "./EvaluatorService";
import { equal, deepEqual } from "assert";
import Context from "./Context";
import * as jsonpath from "jsonpath";

test("formula test", () => {
  const entityRoom: ContextType = {
    name: "room",
    formulas: {
      Sfloor: {
        expression: "length * width",
        parameters: {
          length: {
            path: '$.parameters["length"]'
          },
          width: {
            path: '$.parameters["width"]'
          }
        }
      }
    }
  };
  const entityWork: ContextType = {
    name: "worktype",
    formulas: {
      price: {
        expression: "Sfloor * count",
        parameters: {
          Sfloor: {
            scope: "$.parentContext",
            path: '$.scopeType.formulas["Sfloor"]'
          },
          count: {
            path: '$.parameters["count"]'
          }
        }
      }
    }
  };
  const context: Context = {
    scopeType: entityWork,
    parameters: {
      count: 5
    },
    parentContext: {
      scopeType: entityRoom,
      parameters: {
        length: 2,
        width: 4
      }
    }
  };

  const service = new EvaluatorService();
  const result = service.evaluate(context, context.scopeType.formulas["price"]);

  equal(result, 2 * 4 * 5);
});

test("scope without parameters", () => {
  const simpleContext = {
    formulas: {
      simple: {
        expression: "2 * 5"
      }
    }
  };
  const service = new EvaluatorService();

  const result = service.evaluate({}, simpleContext.formulas.simple);

  equal(result, 10);
});


test("scope with params in", () => {
  const scopeWithParams = {
      formulas: {
        complex: {
          expression: "2 * 5 * count",
          parameters: {
            count: {
              path: '$.parameters["count"]'
            }
          }
        }
      }
    },
    complexContext = {
      parameters: {
        count: 5
      }
    };

  const service = new EvaluatorService();
  const result = service.evaluate(
    complexContext,
    scopeWithParams.formulas.complex
  );

  equal(result, 50);
});

test("scope with array params", () => {
  const room = {
      formulas: {
        sum: {
          expression: "sum(works)",
          parameters: {
            works: {
              type: "array",
              scope: "$.parameters.works[*]",
              path: "$.scopeType.formulas.price"
            }
          }
        }
      }
    },
    work = {
      formulas: {
        price: {
          expression: "2 * 5"
        }
      }
    },
    workContext = {
      scopeType : work
    },
    roomContext = {
      parameters : {works : [workContext, workContext]}
    }

  const service = new EvaluatorService();
  const result = service.evaluate(roomContext, room.formulas.sum);

  equal(result, 20);
});

test("ex", () => {
  const scope = {
    works: [
      {
        formulas: {
          price: {
            expression: "2 * 5"
          }
        }
      },
      {
        formulas: {
          price: {
            expression: "2 * 6"
          }
        }
      }
    ]
  };

  const result = jsonpath.query(scope, "$.works[*].formulas.price");
  
  deepEqual(result, [{ expression: "2 * 5" }, { expression: "2 * 6" }]);
});
