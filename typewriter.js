const sentence = "hello there from lighthouse labs";

let n = 0;

for(let key in sentence){
  setTimeout(()=>{
    process.stdout.write(sentence[key]);    
  },n);
  n+=50;
}
setTimeout(()=>{
  process.stdout.write('\n')
},n)
