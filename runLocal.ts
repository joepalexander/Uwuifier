import Seed from "./seed.ts";
import Uwuifier from "./index.ts";

const uwuifier = new Uwuifier({
  spaces: { faces: 0.3, actions: 0.05, stutters: 0.1 },
  words: 1,
  exclamations: 0,
});

// take an input string from the first argument, however if the input is a file, read it and use that as the input
const input = Deno.args[0];
let inputString = "";
if (input) {
    if (input.startsWith("http")) {
        const response = await fetch(input);
        inputString = await response.text();
    } else {
        inputString = await Deno.readTextFile(input);
    }
    } else {
        console.log("No input provided");
        Deno.exit(1);
    }


// uwuify the input
const uwuified = uwuifier.uwuifySentence(inputString);

// output the uwuified string
console.log(uwuified);

// Q: How do I run?
// A: deno run --allow-read --allow-net --allow-env --allow-run --unstable runLocal.ts "Hello World!"