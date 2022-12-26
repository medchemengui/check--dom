var image = document.getElementById('card1');
image.style.width = "500px";
image.style.marginTop ="20px";
var image = document.getElementById('card');
image.style.textAlign="center"

var quantity=document.getElementById('quantity').textContent;
var price=document.getElementById('price').textContent
var totalprice=0


function addition(){
    quantity++
    document.getElementById('quantity').textContent=quantity
    priceprod()
    
}
function soustraction(){
    if(quantity>1){
        quantity--

    }else{
        quantity=0
    }
    
    document.getElementById('quantity').textContent=quantity
    priceprod()
}
function priceprod(){
    totalprice=quantity*price
    document.getElementById('total').textContent=totalprice
   
}
var heart= document.getElementById('heart')
heart.style.color ="black"
heart.style.width = "30"
heart.style.height = "30"

function jadore(){
    
    if(heart.style.color==="black"){
        heart.style.color="red"
    }else{
        heart.style.color="black"
    }
  
}
function shop(){
    var image =document.getElementById("card1").src
    var total = document.getElementById("total")
    var object
    object={
        price:price, 
        quantity:quantity,
        Image:image,
        Totalprice:totalprice,
    }
    sessionStorage.setItem('data', JSON.stringify(object));
   
}
function data(){
    var object=JSON.parse(sessionStorage.getItem('data'))
    document.getElementById('price').textContent=object.price
    document.getElementById('card1').src=object.Image
    document.getElementById('quantity').textContent=object.quantity
    document.getElementById('total').textContent=object.Totalprice
}

