class Formula implements IValue{
    expression : string;
    params : Array<{
        name : string,
        path : string
    }>

    constructor(expression: string, params : Array<{
        name : string,
        path : string
    }>) {
        this.expression = expression;
        this.params = params;
    }

    value() : number {
        return 0;
    }
}