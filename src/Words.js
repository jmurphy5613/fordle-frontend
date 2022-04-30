import wordBank from "./wordle-bank.txt";
import axios from "axios";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;

  await axios.get('https://fordle.herokuapp.com/words/currentWord').then(res => {
    todaysWord = res.data.word;
  });


  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\r\n")
      wordSet = new Set(wordArr);
    });
  
    console.log(todaysWord);
  return { wordSet, todaysWord };
};
