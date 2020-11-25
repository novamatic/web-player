const exapleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];

const flatten = (arr) => {
  let newArr = [];
  arr.map((element) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

// console.log(flatten(exapleArray));

/********************** BIND */

const bind = (fn, context) => {
  return function () {
    fn.call(context);
  };
};

function greetings() {
  console.log('Henlo ' + this.name);
}

const henloMarek = bind(greetings, { name: 'Bolek' });

// henloMarek();

// DEBOUNCE

function debounce(fn, time) {
  let setTimeoutId;

  return function () {
    if (setTimeoutId) {
      return;
    }
    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}

// SLEEP
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function run() {
  await sleep(1000);
  console.log('Henlo');
  await sleep(2000);
  console.log('World');
}

run();
