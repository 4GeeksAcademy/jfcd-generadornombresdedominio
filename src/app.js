import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'a'];
  let adj = ['great', 'big', 'small', 'crazy'];
  let noun = ['jogger', 'racoon', 'cat', 'website'];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        let domain = pronoun[p] + adj[a] + noun[n] + ".com";

        console.log(domain);
      }
    }
  }
};
