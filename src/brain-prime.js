import getRandomInt from './helper-functions.js';

function isPrime(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export default {
  name: 'brain-prime',
  generalTask: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getAnswerAndQuestion: () => {
    const question = getRandomInt(1, 100);
    return { correctAnswer: isPrime(question) ? 'yes' : 'no', question };
  },
};
