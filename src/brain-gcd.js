import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-gcd',
  generalTask: 'Find the greatest common divisor of given numbers.',
  getAnswerAndQuestion: () => {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    for (let i = Math.max(firstNumber, secondNumber); i > 0; i -= 1) {
      if ((firstNumber % i === 0 && secondNumber % i === 0) || i === 1) {
        return { correctAnswer: i.toString(), question: `${firstNumber} ${secondNumber}` };
      }
    }
    return null;
  },
};
