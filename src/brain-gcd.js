import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-gcd',
  generalTask: 'Find the greatest common divisor of given numbers.',
  getAnswerAndQuestion: () => {
    const firstNumber = getRandomInt(100) + 1;
    const secondNumber = getRandomInt(100) + 1;
    for (let i = Math.max(firstNumber, secondNumber); i > 0; i -= 1) {
      if ((firstNumber % i === 0 && secondNumber % i === 0) || i === 1) {
        return { correctAnswer: i.toString(), question: `${firstNumber} ${secondNumber}` };
      }
    }
    return null;
  },
};
