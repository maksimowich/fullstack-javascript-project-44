import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-calc',
  generalTask: 'What is the result of the expression?',
  getAnswerAndQuestion: () => {
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);
    const signCode = getRandomInt(0, 3);
    switch (signCode) {
      case 0:
        return { correctAnswer: (number1 + number2), question: `${number1} + ${number2}` };
      case 1:
        return { correctAnswer: (number1 - number2), question: `${number1} - ${number2}` };
      case 2:
        return { correctAnswer: (number1 * number2), question: `${number1} * ${number2}` };
      default:
        return null;
    }
  },
};
