const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time} ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000 ms
delay(1000).then(logger); // Resolved after 1000 ms
delay(1500).then(logger); // Resolved after 1500 ms
delay(3000).then(logger); // Resolved after 3000 ms
