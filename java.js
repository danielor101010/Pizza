
var a =" ";
var price = 0

function click_button(){
  var allPizzaSize = document.getElementsByName('PizzaSize');
  var allDough = document.getElementsByName('dough');
  var drinks = document.getElementsByName('drinks');

  for(i = 0; i < allPizzaSize.length; i++)
  {
      if(allPizzaSize[i].checked)
      {

              if (allPizzaSize[i].id==="S")
              {
                  price+=3
                  a+="Size: "+allPizzaSize[i].id+"- 3$ "+"\n";

              }
              else if (allPizzaSize[i].id==="M")
               {
                price+=5
                a+="Size: "+allPizzaSize[i].id+"- 5$ "+"\n";
              }
              else if (allPizzaSize[i].id==="L") {
                price+=6
                a+="Size: "+allPizzaSize[i].id+"- 6$ "+"\n";
              }
              else if (allPizzaSize[i].id==="XXL") {
                price+=8
                a+="Size: "+allPizzaSize[i].id+"- 8$ "+"\n";
              }
      }
  }



  for(i = 0; i < allDough.length; i++) {
      if(allDough[i].checked)
      a+="Dough Type: "+allDough[i].id+"\n";
  }

  for(i = 0; i < drinks.length; i++) {
      if(drinks[i].checked){
        if(drinks[i].id==="Sprite"||drinks[i].id==="Grape")
          {
            price+=4
          a+="Drink: "+drinks[i].id+"- 4$ "+"\n";
        }

        else {
          price+=6
          a+="Drink: "+drinks[i].id+"- 6$ "+"\n";

        }
      }

  }
  alert(a+"\n" +"The Total Price Is: "+ price+"$");
}

document.getElementById("Pesto").addEventListener("click",myFunction);
document.getElementById("Tart").addEventListener("click",myFunction1);
document.getElementById("benedikt").addEventListener("click",myFunction2);
document.getElementById("Margarita").addEventListener("click",myFunction3);
document.getElementById("Tomato").addEventListener("click",myFunction4);
document.getElementById("Veg").addEventListener("click",myFunction5);
document.getElementById("Dan").addEventListener("click",myFunction6);
document.getElementById("Ari").addEventListener("click",myFunction7);



function myFunction() {
  a+="Pizza: Pesto -20$\n";
 price+=20
}
function myFunction1() {
  a+="Pizza: Tart -25$\n";
price+=25
}
function myFunction2() {
  a+="Pizza: benedikt -29$\n";
price+=29
}
function myFunction3() {
  a+="Pizza: Margarita -34$\n";
price+=34
}
function myFunction4() {
  a+="Pizza: Tomato -13$\n";
price+=13
}
function myFunction5() {
  a+="Pizza: Veg -22$\n";
price+=22
}
function myFunction6() {
  a+="Pizza: Dan -14$\n";
price+=14
}
function myFunction7() {
  a+="Pizza: Ari -12$\n";
price+=12
}
