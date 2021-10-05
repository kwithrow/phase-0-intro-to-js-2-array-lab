let cats = ["Milo", "Otis", "Garfield"]
let destructivelyAppendCat = () => cats.push("Ralph");
let destructivelyPrependCat = () => cats.unshift("Bob");
let destructivelyRemoveLastCat = () => cats.pop();
let destructivelyRemoveFirstCat = () => cats.shift();
let appendCat = () => [...cats, "Broom"];
let prependCat = () => ["Arnold", ...cats];
let removeLastCat = () => cats.slice(0, cats.length - 1);
let removeFirstCat = () => cats.slice(-2);