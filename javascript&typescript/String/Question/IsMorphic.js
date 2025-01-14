// function isIsomorphic(s, t) {
//     const sCharacterMap = new Map()
//     const tCharacterMap = new Map()

//     for (let i = 0; i < s.length; i++) {
//         if ((tCharacterMap.has(t[i]) && tCharacterMap.get(t[i]) !== s[i]) || (sCharacterMap.has(s[i]) && sCharacterMap.get(s[i]) !== t[i])) return false
//         tCharacterMap.set(t[i], s[i])
//         sCharacterMap.set(s[i], t[i])
//     }
//     return true
// };


// function isIsomorphic(s, t) {
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false
//     }
//     return true
// }


function isIsomorphic(s,t){
     const sMap =new Array(256).fill(-1)
     const tMap =new Array(256).fill(-1)

     for(let i = 0;i<s.length;i++){
        let charS = s.charCodeAt(i)
        let charT = t.charCodeAt(i)

        if(sMap[charS] !== tMap[charT])return false
        sMap[charS] = i
        tMap[charT] = i
     }
     return true
}
console.log(isIsomorphic("badc", "baba"))
console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))


console.log("abcdA".charCodeAt(4))