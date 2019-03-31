import "jest";
import EvaluatorService from "./EvaluatorService";
import { equal } from "assert";
import Context from "./Context";
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
            scope: "$.parentContext",
            path: '$.contextType.formulas["Sfloor"]'
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
  const context = new Context();
  context.contextType = entityWork;
  context.parameters = {
    count: 1
  };
  const parentContext = new Context();
  parentContext.contextType = entityRoom;
  parentContext.parameters = {
    length: 1,
    width: 1
  };
  context.parentContext = parentContext;

  const service = new EvaluatorService();
  const result = service.evaluate(
    context,
    context.contextType.formulas["price"]
  );

  equal(result, 1);
});
