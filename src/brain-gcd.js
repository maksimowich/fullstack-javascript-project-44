import getRandomInt from './helper-functions.js';

function getGCD(number1, number2) {
  for (let i = Math.max(number1, number2); i > 0; i -= 1) {
    if ((number1 % i === 0 && number2 % i === 0) || i === 1) {
      return i;
    }
  }
  return null;
}

export default {
  name: 'brain-gcd',
  generalTask: 'Find the greatest common divisor of given numbers.',
  getAnswerAndQuestion: () => {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    return { correctAnswer: getGCD(number1, number2), question: `${number1} ${number2}` };
  },
};
