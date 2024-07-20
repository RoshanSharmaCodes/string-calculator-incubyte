class StringCalculator {
  add(numbers) {
    //Edge cases.
    if (!numbers) return 0
    if (typeof numbers !== "string") return 0

    //Declaration space.
    let delimiter = /[,\n]/
    let numString = numbers

    //Handling custom delimiters.
    if (numString.startsWith("//")) {
      ;[numString, delimiter] = this.handleCustomDelimiter(numString, delimiter)
    }

    //Converting number strings to number array.
    const numArray = numString
      .split(delimiter)
      .map((val) => parseInt(val, 10))
      .filter((val) => !isNaN(val))

    //Calculate the sum of number array.
    return numArray.reduce((sum, num) => sum + num, 0)
  }

  handleCustomDelimiter(numString, delimiter) {
    const [delimiterStr, ...rest] = this.splitAtFirstOccurrence(numString, "\n")
    const customDelimiter = delimiterStr.slice(2)
    delimiter = new RegExp(`(${customDelimiter}|\\n)`)
    numString = rest[0]
    return [numString, delimiter]
  }
  splitAtFirstOccurrence(str, delimiter) {
    const [delimiterStr, ...rest] = str.split(delimiter)
    return [delimiterStr, rest.join(delimiter)]
  }
}

module.exports = StringCalculator
