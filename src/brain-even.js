import getRandomInt from './helper-functions.js';

function isEven(number) {
  return number % 2 === 0;
}

export default {
  name: 'brain-even',
  generalTask: 'Answer "yes" if the number is even, otherwise answer "no".',
  getAnswerAndQuestion: () => {
    const question = getRandomInt(0, 100);
    return { correctAnswer: isEven(question) ? 'yes' : 'no', question };
  },
};
