// Write your code below this line

function decodeStr(str) {
  let shift = parseInt(str)

    if (isNaN(shift)){
      throw new Error('Invalid Input')
    }

    let result = ''
    for (let i = 1; i < str.length; i++) {
      let charCode = str.charCodeAt(i)
      if (charCode >= 97 && charCode <= 122){
        let shiftedCode = ((charCode - 97 + shift) % 26) + 97
        result = String.fromCharCode(shiftedCode)
      } else {
        throw new Error('Invalid Input')
      }
    return result
  }
}
console.log(decodeStr('1a'))