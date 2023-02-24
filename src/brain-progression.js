import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-progression',
  generalTask: 'What number is missing in the progression?',
  getAnswerAndQuestion: () => {
    let question = '';
    let correctAnswer;
    const firstElementOfProgression = getRandomInt(100) + 1;
    const numberOfElementsInProgression = getRandomInt(5) + 5;
    const progressionStep = getRandomInt(20) + 1;
    const indexOfMissingElement = getRandomInt(numberOfElementsInProgression - 1);
    for (let i = 0; i < numberOfElementsInProgression; i += 1) {
      if (i !== indexOfMissingElement) {
        question += `${firstElementOfProgression + progressionStep * i} `;
      } else {
        question += '.. ';
        correctAnswer = (firstElementOfProgression + progressionStep * i).toString();
      }
    }
    return { correctAnswer, question: question.trim() };
  },
};
