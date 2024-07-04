function stringReverseHelper(s: string): string {
    if (s.length <= 1) return s
    return stringReverseHelper(s.slice(1, s.length)) + s[0]
}

function reverse(s:string){
    return stringReverseHelper(s)
}

console.log(reverse("asdf"))