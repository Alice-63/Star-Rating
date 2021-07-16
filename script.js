
$(function(){


$("i").click(function () 
{ 
   $(this).addClass("sternGeklickt");
   $(this).prevAll().addClass("sternGeklickt")
        
})



$("#container>i").mouseenter(function(){
    
    this.classList.add("sternAktiv");
    $(this).prevAll().addClass("sternAktiv")
})
$("#container>i").mouseleave(function () {

    this.classList.remove("sternAktiv")
    $(this).prevAll().removeClass("sternAktiv")
});


})