const inputcolor = document.querySelector('.color_picker');
const outputdiv = document.querySelector('.output_div');
const shadowcss = document.querySelector('.shadow_css');
const horizontal = document.querySelector('#horizontal');
const vertical = document.querySelector('#vertical');
const blur = document.querySelector('#blur');
const spread = document.querySelector('#spread');
const opacity = document.querySelector('#r5');
const shadowcolor = document.querySelector('#color_picker2');
const radio = document.querySelectorAll('radio');
const inset = document.querySelector('#inset');

//Box Backgroundcolor Change
inputcolor.addEventListener('input',event=>{
outputdiv.style.backgroundColor = inputcolor.value;
})

function boxshadow(event){
let boxshadow = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px  ${shadowcolor.value} ${inset.checked ? "inset" : ""}`;
outputdiv.style.boxShadow = boxshadow;
shadowcss.innerHTML = "box-shadow:"+boxshadow;
}
