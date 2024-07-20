const StringCalculator = require("../Utility_Functions/stringCalculator")
import { describe, test, expect } from "vitest"

describe("String Calculator Functionality", () => {
  const strCalc = new StringCalculator()

  describe("1. Basic Functionality Testing :-", () => {
    test("TC: 1.1 -> Return 0 for Empty String.", () => {
      expect(strCalc.add("")).toBe(0)
    })

    test("TC: 1.2 -> Return the number for a single number string.", () => {
      expect(strCalc.add("54")).toBe(54)
    })

    test("TC: 1.3 -> Return the sum of multiple numbers separated by a comma.", () => {
      expect(strCalc.add("1,5")).toBe(6)
      expect(strCalc.add("1,10,100,1000")).toBe(1111)
    })

    test("TC: 1.4 -> Handling large values.", () => {
      expect(strCalc.add("1000000000,2000000000")).toBe(3000000000)
    })

    test("TC: 1.5 -> Ignoring non-numeric values in the argument.", () => {
      expect(strCalc.add("100,a,30,300")).toBe(430) // assuming non-numeric strings are ignored
    })

    test("TC: 1.6 -> Checking for the type of output to be number", () => {
      expect(strCalc.add("1,3,5,6")).toBeTypeOf("number")
    })
  })

  
  describe("2. New Line as Delimiter :-", () => {
    test("TC: 2.1 -> Handle new lines between numbers.", () => {
      expect(strCalc.add("1\n2,3")).toBe(6)
    })

    test("TC: 2.2 -> Handle multiple new lines between numbers.", () => {
      expect(strCalc.add("1\n2,3\n5")).toBe(11)
      expect(strCalc.add("1\n2,3\n5\n6\n7")).toBe(24)
      expect(strCalc.add("1\n2,\n3\n5\n\n6\n7")).toBe(24)
    })
  })

  describe("3. Custom Delimiters :-", () => {
    test("TC: 3.1 -> Supports different single-character custom delimiters.", () => {
      expect(strCalc.add("//;\n1;2")).toBe(3)
      expect(strCalc.add("//|\n1|2|3")).toBe(6)
    })
    
    test("TC: 3.2 -> Supports '-' character as custom delimiters.", () => {
      expect(strCalc.add("//-\n1-2-3")).toBe(6)
    })

    test("TC: 3.3 -> Supports multi-character custom delimiters.", () => {
      expect(strCalc.add("//[***]\n10***100***1200")).toBe(1310)
      expect(strCalc.add("//[**]\n1**2**3")).toBe(6)
      expect(strCalc.add("//[&&]\n1&&2&&3")).toBe(6)
      expect(strCalc.add("//[&&]\n1\n2&&3")).toBe(6)
      expect(strCalc.add("//[&&]\n1\n2\n3")).toBe(6)
    })
  })

  describe("4. Error Handling :-", () => {
    test("TC: 4.1 -> Throw an exception for negative numbers.", () => {
      expect(() => strCalc.add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4")
    })

    test("TC: 4.2 -> Throw an exception for negative numbers with a custom delimiter.", () => {
      expect(() => strCalc.add("//;\n1;-2;3;-4")).toThrow("negative numbers not allowed: -2, -4")
    })
  })
})
