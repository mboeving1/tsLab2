//extended challenge //

import { Greeter } from "./greeter";

import PromptSync from "prompt-sync";

let myPrompt = PromptSync();

let yourName = myPrompt("What is your name? ");

//console.log("Oh! Nice to meet you " + yourName);

let yourGreeting = myPrompt("enter a greeting: ");

let example1 = new Greeter(yourGreeting);
console.log(example1.greet(yourName));