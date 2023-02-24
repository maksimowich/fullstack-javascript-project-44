import getRandomInt from './helper-functions.js';

export default {
  name: 'brain-progression',
  generalTask: 'What number is missing in the progression?',
  getAnswerAndQuestion: () => {
    let question = '';
    let correctAnswer;
    const firstElementOfProgression = getRandomInt(1, 100);
    const numberOfElementsInProgression = getRandomInt(5, 11);
    const progressionStep = getRandomInt(1, 20);
    const indexOfMissingElement = getRandomInt(0, numberOfElementsInProgression);
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
