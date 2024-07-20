class StringCalculator {
    add(numbers) {
        //Edge cases.
        if (!numbers) return 0
        if (typeof numbers !== "string") return 0
    
        //Declaration space.
        let delimiter = ","
        let numString = numbers
    
        //Converting number strings to number array.
        const numArray = numString
          .split(delimiter)
          .map((val) => parseInt(val, 10))
          .filter((val) => !isNaN(val))
    
        //Calculate the sum of number array.
        return numArray.reduce((sum, num) => sum + num, 0)
      }
    
}

module.exports = StringCalculator
