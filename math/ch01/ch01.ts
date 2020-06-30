import { assertEquals } from "https://deno.land/std/testing/asserts.ts"

function dec2bin(target: number) {
  let reminder = []

  while (target !== 0) {
    reminder.push(target % 2)
    target = Math.floor(target / 2)
  }

  reminder.reverse()
  return Number(reminder.join(''))
}

Deno.test('dec2bin()', () => {
  assertEquals(dec2bin(2265), 100011011001, 'Accept')
})


function dec2hex(target: number) {
  let reminder = []

  while (target !== 0) {
    reminder.push(target % 16)
    target = Math.floor(target / 16)
  }

  for (let [i] of [...Array(reminder.length)].entries()) {
    switch (reminder[i]) {
      case 10: {
        reminder[i] = 'a'
        break
      }
      case 11: {
        reminder[i] = 'b'
        break
      }
      case 12: {
        reminder[i] = 'c'
        break
      }
      case 13: {
        reminder[i] = 'd'
        break
      }
      case 14: {
        reminder[i] = 'e'
        break
      }
      case 15: {
        reminder[i] = 'f'
        break
      }
    }
  }
  reminder.reverse()
  return reminder.join('')

}

Deno.test('dec2hex()', () => {
  assertEquals(dec2hex(2265), '8d9', 'Accept')
})


function any2dec(target: string, m: number) {
  let n = target.length - 1
  let sum = 0

  for (const [i] of [...Array(target.length)].entries()) {
    let num: number
    switch (target.charAt(i)) {
      case 'a': {
        num = 10
        break
      }
      case 'b': {
        num = 11
        break
      }
      case 'c': {
        num = 12
        break
      }
      case 'd': {
        num = 13
        break
      }
      case 'e': {
        num = 14
        break
      }
      case 'f': {
        num = 15
        break
      }
      default: {
        num = Number(target.charAt(i))
      }
    }
    sum += (m ** n) * num
    n -= 1
  }
  return sum
}

Deno.test('any2dec()', () => {
  assertEquals(any2dec('100011011001', 2), 2265, 'Accept')
})

Deno.test('any2dec()', () => {
  assertEquals(any2dec('8d9', 16), 2265, 'Accept')
})