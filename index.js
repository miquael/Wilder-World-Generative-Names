// WILDER WORLD NAME GENERATOR
// by Gaio : https://github.com/miquael
//
// run: node index.js
// -----------------------------------------
// *NOTES: 
// - python scrape for list: https://www.thebump.com/b/baby-names-that-start-with-w
// - python scrape for list:
// - make into Discord Bot

const {names, middleNames, surNames} = require("./config.js")
const format = [names, middleNames, surNames];

const create = () => {
  let output = [];
  format.forEach((list) => {
    let word = list[Math.floor(Math.random() * list.length)];
    output.push(word);
  });
  return output.join(" ");
}

console.log({name: create()});