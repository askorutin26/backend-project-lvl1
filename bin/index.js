import promptly from 'promptly';
export default async function getUserName () {
    console.log ('Welcome to the Brain Games!');
    console.log ('May I have your name?');
    const name = await promptly.prompt('Your answer: ');
    console.log (`Hello, ${name}!`);
  };
