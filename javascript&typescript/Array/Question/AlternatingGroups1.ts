// https://leetcode.com/problems/alternating-groups-i/description/

function numberOfAlternatingGroups(colors: number[]): number {
    let alterningGroupCount = 0

    colors = colors.concat(colors.slice(0, 2))
    for (let i = 0; i < colors.length - 2; i++) {
        if (colors[i + 1] != colors[i] && colors[i + 1] != colors[i + 2]) alterningGroupCount++
    }

    return alterningGroupCount
};
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]))

