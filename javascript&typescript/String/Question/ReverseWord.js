// function reverseWords(s) {
//     let count = 0
//     let result = []
//     let i = 0
//     for (; i < s.length; i++) {
//         if (s[i] === " " && count > 0) {
//             result.push(s.substring(i - count, i))
//             count = 0
//         }
//         else if (s[i] !== " ") count++
//     }
//     if (count > 0) result.push(s.substring(i - count, i))

//     return result.reverse().join(" ")
// }

function reverseWords(s) {
    let words = s.split(' ').filter(word => word !== "");
    let left = 0;
    let right = words.length - 1;

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    return words.join(' ');
}