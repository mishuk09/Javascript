console.log(234567);
console.log(33333);


let clock = 0;
const timeId = setInterval(() => {

    console.log(++clock);
    if (timeId > 15) {
        clearInterval(timeId);
    }
}, 1000);

console.log(666666);
console.log(888888);