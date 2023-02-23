function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  name: 'brain-even',
  generalTask: 'Answer "yes" if the number is even, otherwise answer "no".',
  getAnswerAndQuestion: () => {
    const question = getRandomInt(100);
    let correctAnswer;
    if (question % 2 === 1) {
      correctAnswer = 'no';
    } else {
      correctAnswer = 'yes';
    }
    return { correctAnswer, question };
  },
};
