import readlineSync from 'readline-sync';

function playRoundAndGetResult(game) {
  const { correctAnswer, question } = game.getAnswerAndQuestion();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { correctAnswer, userAnswer };
}

export default (game, numberOfRounds = 3) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome to the Brain Games!\nHello, ${userName}!`);
  if (game.name === 'brain-games') return;
  console.log(game.generalTask);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { correctAnswer, userAnswer } = playRoundAndGetResult(game);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
