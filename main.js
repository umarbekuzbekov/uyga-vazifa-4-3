let block = document.querySelector('.block')

let form=document.querySelector('.form');

let inputs=document.querySelectorAll('.input')

let arr=[]


form.addEventListener('submit',(el)=>{
el.preventDefault()
let obj={}
for(let i of inputs){
   obj[i.name]=i.value
    obj.id=Math.round(Math.random()*100)
}
arr.push(obj)
render()
})

function render(){
let ul=document.createElement('ul');
for(let i of arr){
    ul.id=i.id
ul.innerHTML=  `
<li class='items'>${i.name}</li>
<li class='items'>${i.phone}</li>
<li id='items'>${i.address}</li>
<li class="btn2"><button type='button' onclick="deleteUser(${i.id})">Delete</button></li>
`
block.append(ul)
}
ul.style.listStyle ="none "
ul.style.marginTop ="20px "

}

const  deleteUser = (id) => {
for(let i = 0; i < arr.length; i++){
if(id == arr[i].id){
arr.splice(i,1)
}
}
render()
}

