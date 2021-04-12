console.log(__dirname); //-path to current directory
console.log(__filename); //-file name
// require = function to use modules
console.log(module); //- info about current module(file)
console.log(process); // - info about env where the program is being executed
setInterval(() => {
  console.log(`Howdy`);
}, 1000);
