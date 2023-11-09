var allproducts =document.querySelectorAll(".card button")
var div1 =document.querySelector("#div1")
var div2=document.querySelector("#div2")
var btn1=document.querySelector("#buynow")
var btn2=document.querySelector("#showprice")
var btn3=document.querySelector("#showproducts")
var addtocart=document.querySelector(".cartcounter")
var totalprice = 0
var counts = 0
allproducts.forEach(function(item){
    
   item.onclick=function(){
       
        totalprice += +(item.getAttribute("price"))
        div1.innerHTML+=item.getAttribute("name")+"<br>" 
        counts += +(item.getAttribute("value"))
        addtocart.innerHTML=counts
        if(div1 !=""){
            btn2.style.display="block"
        }

    } 
}
)
btn2.onclick=function(){
    div2.style.display="block"
 div2.innerHTML=totalprice
}
btn3.onclick=function() {
    if (div1 !=""){
    div1.style.display="block"
}
}


  