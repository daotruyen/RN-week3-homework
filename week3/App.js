import React, { useState } from 'react';
import {
  StyleSheet,
  Text, View, Image,
  StatusBar, TouchableOpacity,
} from 'react-native';
import Button from './Button';
import ChoiceCard from './ChoiceCard';
const CHOICES = [
  {
    name: 'rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];
const randomComputerChoice = () =>CHOICES[Math.floor(Math.random() * CHOICES.length)]; //computer choice
const getRoundOutcome = userChoice => {
  const computerChoice = randomComputerChoice().name;
  let result;

  if (userChoice === 'rock') {
    if(computerChoice==='scissors')
    {
      result='Victory!';
    }
    else result='Defeat!';
  }
  if (userChoice === 'paper') {
    if(computerChoice==='rock')
    {
      result='Victory!';
    }
    else result='Defeat!'; 
  }
  if (userChoice === 'scissors') {
    if(computerChoice==='paper')
    {
      result='Victory!';
    }
    else result='Defeat!';
  }

  if (userChoice === computerChoice) result = 'Tie game!';
  return [result, computerChoice];
};



const App = () => {
    const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
    const [userChoice, setUserChoice] = useState({});
    const [computerChoice, setComputerChoice] = useState({});
    const onPress = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <Text>{gamePrompt}</Text>
        <View style={styles.choiceContainer}>
          <ChoiceCard player="Player" choice={userChoice} />
          <Text style={{ color: '#250902' }}>vs</Text>
          <ChoiceCard player="Computer" choice={computerChoice} />
        </View>
        {CHOICES.map(choice => {
          return (
            <Button key={choice.name}
              name={choice.name}
              onPress={onPress}
            />
          )
        })}
      </View>

    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee',
    paddingTop:50,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 50,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
});
export default App;
