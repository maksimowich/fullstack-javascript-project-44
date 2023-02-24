import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-calc',
  generalTask: 'What is the result of the expression?',
  getAnswerAndQuestion: () => {
    const firstNumber = getRandomInt(0, 100);
    const secondNumber = getRandomInt(0, 100);
    const signCode = getRandomInt(0, 3);
    switch (signCode) {
      case 0:
        return { correctAnswer: (firstNumber + secondNumber).toString(), question: `${firstNumber} + ${secondNumber}` };
      case 1:
        return { correctAnswer: (firstNumber - secondNumber).toString(), question: `${firstNumber} - ${secondNumber}` };
      case 2:
        return { correctAnswer: (firstNumber * secondNumber).toString(), question: `${firstNumber} * ${secondNumber}` };
      default:
        return null;
    }
  },
};
