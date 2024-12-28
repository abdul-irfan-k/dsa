function convert(s: string, numRows: number): string {
    if (numRows == 1) return s
    let result = ""

    const rows = new Array<string>(numRows).fill("")
    let row = 0
    let direction = "down"

    for (let i = 0; i < s.length; i++) {
        rows[row] += s[i]

        if (row == numRows - 1) direction = "up"
        else if (row == 0) direction = "down"
        if (direction == "up") row--
        else if (direction == "down") row++
    }

    for (let i = 0; i < rows.length; i++) {
        result += rows[i]
    }
    return result
};

console.log(convert("PAYPALISHIRING",3))
console.log(convert("PAYPALISHIRING",4))
console.log(convert("A",1))
console.log(convert("abcdef", 1))