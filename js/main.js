
document.querySelectorAll('.counter').forEach(c=>{
let target=+c.dataset.target,current=0;
let i=setInterval(()=>{
current++;
c.innerText=current;
if(current>=target)clearInterval(i);
},20);
});
const cpu=document.getElementById('cpu');
const ram=document.getElementById('ram');
if(cpu&&ram){
setInterval(()=>{
cpu.innerText=Math.floor(Math.random()*50)+10;
ram.innerText=Math.floor(Math.random()*50)+20;
},2000);
}
