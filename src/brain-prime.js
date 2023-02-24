import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-prime',
  generalTask: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getAnswerAndQuestion: () => {
    const number = getRandomInt(1, 100);
    if (number === 1) {
      return { correctAnswer: 'no', question: number };
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return { correctAnswer: 'no', question: number };
      }
    }
    return { correctAnswer: 'yes', question: number };
  },
};
