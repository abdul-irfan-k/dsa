function letterCombinations(digits: string): string[] {
    const numberPad = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    const digitCombination: string[] = []
   if(digits == "")return digitCombination
    function addValue(value: string, numberPosition: string) {
        if (numberPosition.length == 0) {
            digitCombination.push(value)

        }
        else {

            let currentPad = numberPad[parseInt(numberPosition.substring(0, 1)) - 2]
            for (let i = 0; i < currentPad.length; i++) {
                let element = value + currentPad[i]
                addValue(element, numberPosition.slice(1))
            }
        }
    }

    addValue("", digits)
    return digitCombination
};
console.log(letterCombinations("23"))
console.log(letterCombinations(""))
