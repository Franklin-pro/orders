// ----------------camera display------------------

const img = document.querySelector('.cano').style.display ="none";
const imgn = document.querySelector('.niko').style.display="none"

function cen(){
        document.querySelector('.cano').style.display="flex"
        document.querySelector('.son').style.display="none"
        document.querySelector('.niko').style.display="none"
        document.querySelector('.herr').innerHTML = '<h4>CANON D7000</h4>'
        document.querySelector('.her').innerHTML = '<h4>3k$</h4>'
  
}
function son(){
   
        document.querySelector('.cano').style.display="none"
        document.querySelector('.son').style.display="flex"
        document.querySelector('.niko').style.display="none"
        document.querySelector('.herr').innerHTML = '<h4>SONY Lumix</h4>'
        document.querySelector('.her').innerHTML = '<h4>5k$</h4>'

  
}
function niko(){

        document.querySelector('.cano').style.display="none"
        document.querySelector('.son').style.display="none"
        document.querySelector('.niko').style.display="flex"
        document.querySelector('.herr').innerHTML = '<h4>NIKON D800</h4>'
        document.querySelector('.her').innerHTML = '<h4>4k$</h4>'


  
}

// ------------------------ time watch display--------------------------
const imgcal = document.querySelector('.cal').style.display ="none";
const imglor = document.querySelector('.lor').style.display="none"

function wat(){
        document.querySelector('.wat').style.display="flex"
        document.querySelector('.lor').style.display="none"
        document.querySelector('.cal').style.display="none"
        document.querySelector('.hero').innerHTML = '<h4>Iwatch</h4>'
        document.querySelector('.herc').innerHTML = '<h4>600k</h4>'
  
}
function cal(){
   
        document.querySelector('.lor').style.display="none"
        document.querySelector('.cal').style.display="flex"
        document.querySelector('.wat').style.display="none"
        document.querySelector('.hero').innerHTML = '<h4>Calvin</h4>'
        document.querySelector('.herc').innerHTML = '<h4>400k</h4>'

  
}
function lor(){

        document.querySelector('.cal').style.display="none"
        document.querySelector('.wat').style.display="none"
        document.querySelector('.lor').style.display="flex"
        document.querySelector('.hero').innerHTML = '<h4>Lorex</h4>'
        document.querySelector('.herc').innerHTML = '<h4>300k</h4>'


  
}
// ------------------------machine-----------

const imgMa = document.querySelector('.hp').style.display ="none";


function mark(){
        document.querySelector('.mark').style.display="flex"
        document.querySelector('.hp').style.display="none"
        // document.querySelector('.hero').innerHTML = '<h4>Iwatch</h4>'
        // document.querySelector('.herc').innerHTML = '<h4>600k</h4>'
  
}
function hp(){
   
        document.querySelector('.mark').style.display="none"
        document.querySelector('.hp').style.display="flex"
     
        // document.querySelector('.hero').innerHTML = '<h4>Calvin</h4>'
        // document.querySelector('.herc').innerHTML = '<h4>400k</h4>'

  
}