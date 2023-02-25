import readlineSync from 'readline-sync';

function playRound(game) {
  const { correctAnswer, question } = game.getAnswerAndQuestion();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer.toString() === userAnswer) {
    console.log('Correct!');
    return 'Won';
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return 'Loss';
}

export default (game, numberOfRounds = 3) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games!\nHello, ${userName}!`);
  if (game.name === 'brain-games') return;
  console.log(game.generalTask);
  for (let i = 0; i < numberOfRounds; i += 1) {
    if (playRound(game) === 'Loss') {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
