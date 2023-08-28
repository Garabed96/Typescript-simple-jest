import { getStringInfo, StringUtils, toUpperCase } from '../app/Utils'

describe('Utils test suite', () => {
   // Test StringUtils Class
   describe('Utils test suite', () => {
      describe.only('StringUtils tests', () => {
         let sut: StringUtils

         beforeEach(() => {
            sut = new StringUtils()
         })

         it('Should return correct upperCase', () => {
            const actual = sut.toUpperCase('abc')
            expect(actual).toBe('ABC')
         })

         it('Should throw error on invalid argument - function', () => {
            function expectError() {
               const actual = sut.toUpperCase('')
            }

            expect(expectError).toThrow()
            expect(expectError).toThrowError('Invalid argument!')
         })

         it.only('Should throw error on invalid argument - try catch block', () => {
            try {
               sut.toUpperCase('')
               // done('GetStringInfo should throw error from invalid arg!')
            } catch (e) {
               expect(e).toBeInstanceOf(Error)
               expect(e).toHaveProperty('message', 'Invalid argument!')
               // done()
            }
         })
      })
   })
})

// describe("Utils test suite", () => {
//   // Test StringUtils Class
//   describe.only("StringUtils tests", () => {
//     let sut: StringUtils;
//
//     beforeEach(() => {
//       sut = new StringUtils();
//       console.log("Setup");
//     });
//
//     afterEach(() => {
//       // clearing mocks
//       console.log("Teardown");
//     });
//
//     it("Should return correct upperCase", () => {
//       const actual = sut.toUpperCase("abc");
//       expect(actual).toBe("ABC");
//       console.log("Actual test");
//     });
//   });
//
//   it("should return uppercase of a valid string", () => {
//     // arrange:
//     const sut = toUpperCase;
//     const expected = "ABC";
//
//     // act:
//     const actual = sut("abc");
//
//     // assert:
//     expect(actual).toBe("ABC");
//   });
//   describe("ToUpperCase examples", () => {
//     it.each([
//       { input: "abc", expected: "ABC" },
//       { input: "My-String", expected: "MY-STRING" },
//       { input: "def", expected: "DEF" },
//     ])("$input toUpperCase should be $expected", ({ input, expected }) => {
//       const actual = toUpperCase(input);
//       expect(actual).toBe(expected);
//     });
//   });
//
//   describe("getStringInfo for arg My-String should", () => {
//     test("return right length", () => {
//       const actual = getStringInfo("My-String");
//       expect(actual.characters).toHaveLength(9);
//     });
//     test("return right lower case", () => {
//       const actual = getStringInfo("My-String");
//       expect(actual.lowerCase).toBe("my-string");
//     });
//     test("return right upper case", () => {
//       const actual = getStringInfo("My-String");
//       expect(actual.upperCase).toBe("MY-STRING");
//     });
//     test("return right Characters", () => {
//       const actual = getStringInfo("My-String");
//       expect(actual.characters).toEqual([
//         "M",
//         "y",
//         "-",
//         "S",
//         "t",
//         "r",
//         "i",
//         "n",
//         "g",
//       ]);
//       expect(actual.characters).toContain<string>("M");
//
//       expect(actual.characters).toEqual(
//         expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
//       );
//     });
//     test("return defined extra info", () => {
//       const actual = getStringInfo("My-String");
//       expect(actual.extraInfo).toBeDefined();
//     });
//     test("return right extra info", () => {
//       const actual = getStringInfo("My-String");
//       expect(actual.extraInfo).toEqual({});
//     });
//   });
// });
