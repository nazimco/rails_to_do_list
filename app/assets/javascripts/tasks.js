// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("turbolinks:load", function(){
 
    document.getElementsByTagName("h1")[0].innerHTML = "Javascript in Rails!";
   
    alert("Hello!");

  });