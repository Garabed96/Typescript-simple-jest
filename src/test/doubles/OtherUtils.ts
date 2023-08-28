import {
   calculateComplexity,
   OtherStringUtils,
   toUpperCaseSwithCb,
} from '../../app/doubles/OtherUtils'
import { toUpperCase } from '../../app/Utils'

describe.skip('OtherUtils test suite', () => {
   describe('OtherStringUtils test with spies', () => {
      let sut: OtherStringUtils

      beforeEach(() => {
         sut = new OtherStringUtils()
      })

      test('Use a spy to track calls', () => {
         const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase')
         sut.toUpperCase('asa')
         expect(toUpperCaseSpy).toBeCalledWith('asa')
      })
      test('Use a spy to track calls to other module', () => {
         const consoleLogSpy = jest.spyOn(console, 'log')
         sut.toUpperCase('abc')
         expect(consoleLogSpy).toBeCalledWith('asa')
      })
      test('Use a spy to replace the implementation of a method', () => {
         jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
            console.log('calling mocked impl')
         })
         sut.callExternalService()
      })
   })

   describe.only('Tracking callbacks with Jest mock', () => {
      const callbackMock = jest.fn()

      afterEach(() => {
         jest.clearAllMocks()
      })

      xit('calls callback for invalid argument - tracks calls', () => {
         const actual = toUpperCaseSwithCb('', callbackMock)
         expect(actual).toBeUndefined()
         expect(callbackMock).toBeCalledWith('Invalid argument!')
         expect(callbackMock).toBeCalledTimes(1)
      })

      xit('calls callback for valid argument - tracks calls', () => {
         const actual = toUpperCaseSwithCb('abc', callbackMock)
         expect(actual).toBe('ABC')
         expect(callbackMock).toBeCalledWith('called function with abc')
         expect(callbackMock).toBeCalledTimes(1)
      })
   })

   describe.only('Tracking callbacks', () => {
      let cbArgs = []
      let timesCalled = 0
      function callbackMock(arg: string) {
         cbArgs.push(arg)
         timesCalled++
      }

      afterEach(() => {
         // clearing tracking fields
         cbArgs = []
         timesCalled = 0
      })

      it('calls callback for invalid argument - tracks calls', () => {
         const actual = toUpperCaseSwithCb('', callbackMock)
         expect(actual).toBeUndefined()
         expect(cbArgs).toContain('Invalid argument!')
         expect(timesCalled).toBe(1)
      })

      it('calls callback for valid argument - tracks calls', () => {
         const actual = toUpperCaseSwithCb('abc', callbackMock)
         expect(actual).toBe('ABC')
         expect(cbArgs).toContain('called function with abc')
         expect(timesCalled).toBe(1)
      })
   })

   it('ToUpperCase - calls callback for invalid argument', () => {
      const actual = toUpperCaseSwithCb('', () => {})
      expect(actual).toBeUndefined()
   })
   it('ToUpperCase - calls callback for valid argument', () => {
      const actual = toUpperCaseSwithCb('abc', () => {})
      expect(actual).toBe('ABC')
   })

   it('Calculates complexity', () => {
      const someInfo = {
         length: 5,
         extraInfo: {
            field1: 'someInfo',
            field2: 'someOtherInfo',
         },
      }
      const actual = calculateComplexity(someInfo as any)
      // expect(actual).toBe(10)
      expect(actual).toBe(10)
   })
})
