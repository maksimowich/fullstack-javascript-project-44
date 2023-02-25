import getRandomInt from './helper-functions.js';

function getRandomProgression() {
  const randomProgression = [];
  const start = getRandomInt(1, 100);
  const amountOfElements = getRandomInt(5, 11);
  const step = getRandomInt(1, 20);
  for (let i = 0; i < amountOfElements; i += 1) {
    randomProgression.push(start + step * i);
  }
  return randomProgression;
}

export default {
  name: 'brain-progression',
  generalTask: 'What number is missing in the progression?',
  getAnswerAndQuestion: () => {
    const progression = getRandomProgression();
    const indexOfMissingElement = getRandomInt(0, progression.length);
    return {
      correctAnswer: progression.splice(indexOfMissingElement, 1, '..')[0],
      question: progression.join(' '),
    };
  },
};
