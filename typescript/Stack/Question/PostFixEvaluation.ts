import { Stack } from "../Stack";

class PostfixEvaluator {
 static evaluate(expression: string) {
    const list = new Stack<number>();
    const regex = /[+\-*/%^]/;
    expression.split("").forEach((elm, index) => {
      if (this.checkIsDigit(elm)) {
        list.push(Number(elm));
        return;
      }
      if (regex.test(elm)) {
        const currentNumber = Number(list.pop());
        const previousNumber = Number(list.pop());

        const result = this.calculate(previousNumber, currentNumber, elm);
        list.push(result);
      }
      return;
    });

    return list.pop();
  }

  private static calculate(value1: number, value2: number, operator: string): number {
    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      case "^":
        return value1 ^ value2;
    }
    return NaN;
  }

  private static checkIsDigit(value: string | number) {
    return !isNaN(Number(value.toString()));
  }
}


console.log(PostfixEvaluator.evaluate("235*+8-"))