//Exc 1
function hadSpaces(str) {
    let patt = /\s/
    return (patt.test(str))
}
console.log(hadSpaces("hello world"))

// Exc2

function countVowels(str) {
    let patt = /['a', 'e', 'i', 'o', 'u', 'y']/gi
    return str.match(patt).length

}
console.log(countVowels('sdndUdbncy'))

//Ex3

function replaceVowels(str, c) {
    let patt = /['a', 'e', 'i', 'o', 'u', 'y']/gi
    return str.replace(patt, c)
}
console.log(replaceVowels('dorraamri', '?'))

//Ex4

function mathExpr(str) {
    let patt = /[0-9\s?][+*-/%][0-9\s?]/
    return (patt.test(str))
}

console.log(mathExpr("1 +4"))


//Exc 5
function asterisk(str) {
    let patt = /[a][a-z]{0,}[c]{0,}[a-z]{0,}/i
    return (patt.test(str))
}
console.log(asterisk("ac"))

//Ex 6
function zipCode(str) {
    let patt = /\b\d{5}\b/
    return patt.test(str)
}
console.log(zipCode("12345"))