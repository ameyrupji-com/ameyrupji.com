// import another component
import main from './main';
// Can also be included with a regular script tag
import Typed from 'typed.js';

var options = {
  strings: ["Welcome to my website!", "I am still in the process of build this website."],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true
}

var typed = new Typed(".typed", options);

main();