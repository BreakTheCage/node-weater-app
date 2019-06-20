//Describe Async action in node
console.log('Starting');

setTimeout(()=>{
    console.log('2 second time out finish!');
}, 2000)

setTimeout(()=>{
    console.log('0 second time out finish!');
}, 0)

console.log('Stopping');
//============================================