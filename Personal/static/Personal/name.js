
document.addEventListener('DOMContentLoaded', function() {
const myform = document.querySelector("#newform");
myform.addEventListener("submit", (event) => {
event.preventDefault();
const data = document.querySelector('#name').value;
fetch ('/inputs', {
method: 'POST',
body: JSON.stringify({
"name": data,
})
})
.then(response => response.json())
.then(result => {
console.log(result);
view_capacity(result.id);
})
})
})
  
function view_capacity(id){
fetch(`/result/${id}`)
.then(response => response.json())
.then(capacity => {
console.log(capacity);
document.querySelector(`#view`).textContent = `You entered your name:${capacity.Depth}`;
}
})
}
