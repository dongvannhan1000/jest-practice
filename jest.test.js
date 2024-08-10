// Tests
describe('capitalize', () => {
  test('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('WORLD');
    expect(capitalize('javascript')).toBe('Javascript');
  });
});

describe('reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('OpenAI')).toBe('IAnepO');
    expect(reverseString('12345')).toBe('54321');
  });
});

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.subtract(-1, -1)).toBe(0);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 5)).toBe(0);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(5, 2)).toBe(2.5);
    expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});

describe('caesarCipher', () => {
  test('shifts characters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('handles punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

describe('analyzeArray', () => {
  test('analyzes an array of numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles empty array', () => {
    expect(() => analyzeArray([])).toThrow('Array is empty');
  });
});

// Implementations
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
};

function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').map(char => {
    const lowerChar = char.toLowerCase();
    if (!alphabet.includes(lowerChar)) return char;
    const newIndex = (alphabet.indexOf(lowerChar) + shift) % 26;
    const shiftedChar = alphabet[newIndex];
    return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
  }).join('');
}

function analyzeArray(arr) {
  if (arr.length === 0) throw new Error('Array is empty');
  return {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}