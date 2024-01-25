var image1=document.getElementById("image1")
var image2=document.getElementById("image2")
var image3=document.getElementById("image3")
var backgroundOverley=document.getElementById("backgroundOverley")
var close=document.getElementById("close")

image1.addEventListener('click',function(){
    image1.style.scale="1.7"
    image1.style.zIndex="2"
    image1.style.marginLeft="60vw"
    backgroundOverley.classList.remove("overhidden")
})

close.addEventListener('click',function(){
    image1.style.scale="1"
    image1.style.zIndex="0"
    image1.style.marginLeft="0"
    backgroundOverley.classList.add("overhidden")
})

image2.addEventListener('click',function(){
    image2.style.scale="1.7"
    image2.style.zIndex="2"
    backgroundOverley.classList.remove("overhidden")
})

close.addEventListener('click',function(){
    image2.style.scale="1"
    image2.style.zIndex="0"
    backgroundOverley.classList.add("overhidden")
})

image3.addEventListener('click',function(){
    image3.style.scale="1.7"
    image3.style.zIndex="2"
    image3.style.marginRight="60vw"
    backgroundOverley.classList.remove("overhidden")
})

close.addEventListener('click',function(){
    image3.style.scale="1"
    image3.style.zIndex="0"
    image3.style.marginRight="0"
    backgroundOverley.classList.add("overhidden")
})