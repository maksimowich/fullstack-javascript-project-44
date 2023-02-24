import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-prime',
  generalTask: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getAnswerAndQuestion: () => {
    const number = getRandomInt(100) + 1;
    for (let i = 2; i <= Math.floor(number / 2); i += 1) {
      if (number % i === 0) {
        return { correctAnswer: 'no', question: number };
      }
    }
    return { correctAnswer: 'yes', question: number };
  },
};
