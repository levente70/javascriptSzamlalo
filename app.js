document.getElementById("le").addEventListener("click", function(){
   let szam= document.getElementById("number").innerText;
   
   console.log(szam);
   szam--;
   document.getElementById("number").innerText=szam;
})


document.getElementById("fel").addEventListener("click", function(){
    let szam= document.getElementById("number").innerText;
    
    console.log(szam);
    szam++;
    document.getElementById("number").innerText=szam;
 })

 document.getElementById("alap").addEventListener("click", function(){
    let szam=0;
    document.getElementById("number").innerText=szam;
 })
