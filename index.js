function alwaysTrue() {
  return true;
}

alwaysTrue();

function asincro() {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}

asincro();

function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    if (id % 2 === 0) {
      yield id;
    }
  }
}

const gen = generaId();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
