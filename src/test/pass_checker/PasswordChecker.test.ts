import {
   PasswordChecker,
   PasswordErrors,
} from '../../app/pass_checker/PasswordChecker'

describe('PasswordChecker test suite', () => {
   let sut: PasswordChecker

   beforeEach(() => {
      sut = new PasswordChecker()
   })
   // Using xit makes stops the function from running.
   xit('Password with less than 8 chars is invalid', () => {
      const actual = sut.checkPassword('1234567')
      expect(actual.valid).toBe(false)
      expect(actual.reasons).toContain(PasswordErrors.SHORT)
   })
   it('Password with more than 8 chars is ok', () => {
      const actual = sut.checkPassword('1234abcd')
      expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
   })
   it('Password with no upper case is invalid', () => {
      const actual = sut.checkPassword('abcd')
      expect(actual).toBe(false)
      expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
   })
   it('Password with upper case is valid', () => {
      const actual = sut.checkPassword('1234ABCD')
      expect(actual).toBe(false)
   })
   it('Password with lower case is valid', () => {
      const actual = sut.checkPassword('1234ABCDa')
      expect(actual).toBe(true)
   })
})
