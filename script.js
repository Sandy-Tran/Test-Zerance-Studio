//slider

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type : 'loop',
    autoWidth: true,
  
    
  }).mount();
});



//form

function openForm() {
  document.getElementById("myForm").style.display = "block";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}





function verifyInput(event){

  event.preventDefault();

  let name = document.querySelector('.name').value;
  let mail = document.querySelector('.mail').value;
  let message = document.querySelector('.message').value;


  
  if(name === "" || mail === "" || message === ""){
    alert('Veuillez remplir tout les champs');
    champ.style.border = "2px solid red";
  }else {
    alert('Merci pour ton message, on revient vers toi asap :)')
    verifyGender(name);
  }

  }



//api gender


function verifyGender(name){


  fetch(`https://gender-api.com/get?name=${name}&key=3bcb904acbee2e7f2a2ba0f4cec7ab37b78ce94640eb7b81abda8c717750d81c`)
   .then(response => {
     return response.json();
   }) 
   .then(response => {
     if(response.gender === "female"){
       alert('We rob banks !')
     } else if(response.gender === "male"){
       alert('Rosebud !')
     } else {
       alert("It's a trap !");
     }
   })
   .catch(error => {
     console.warn(error)
     alert("It's a trap !")
   })
  
}









 

  



