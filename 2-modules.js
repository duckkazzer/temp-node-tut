const names = require(`./3-names(modulesTest)`);
const sayHi = require(`./4-utils(moduleTest)`);
const data = require(`./5-alternativeFastSyntaxModules`);
require(`./6-mind-greanade`);
sayHi("Doom man 69");
sayHi(names.cecible);
sayHi(names.gordon);
console.log(data.items + " " + data.singlePerson.name);
console.log(names);
console.log(names.gordon);
