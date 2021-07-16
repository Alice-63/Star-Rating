
$(function(){


$("i").click(function () 
{ 
    $(this).siblings().removeClass("sternGeklickt");

   $(this).addClass("sternGeklickt");
   $(this).prevAll().addClass("sternGeklickt");
        
})



$("#container>i").mouseenter(function(){
    
    this.classList.add("sternAktiv");
    $(this).prevAll().addClass("sternAktiv")
})
$("#container>i").mouseleave(function () {

    this.classList.remove("sternAktiv")
    $(this).prevAll().removeClass("sternAktiv")
});


$("#senden").click(function(){
 
    let isEmpty=$("#container>i.sternGeklickt")

    if(isEmpty.length==0)
    {
        alert("Bitte Sterne auswählen!")
    }
    console.log(isEmpty.length)


})


})