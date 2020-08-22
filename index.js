function openSM(){
    document.getElementById('sheading').innerHTML = "";
    document.getElementById('mySidemenu').style.width = "220px";
    document.getElementById('mySidemenu').style.height = screen.height + "10";
    document.getElementById('pg-content').style.marginLeft = "220px";
}
function closeSM(){
    document.getElementById('mySidemenu').style.width = "0";
    document.getElementById('pg-content').style.marginLeft = "0";
    document.getElementById('sheading').innerHTML = "&nbsp;&#9776;";
}

function openAB(){
    document.getElementById('rightAB').style.float = "right";
    document.getElementById('rightAB').style.width = "50%";
   
    
}
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById('svg').innerHTML = " "
      document.getElementById('name').innerHTML = " "
      var i = document.getElementById('imageother').innerHTML
      document.getElementById('imageother').innerHTML = document.getElementById('listother').innerHTML
      document.getElementById('listother').innerHTML = i

      document.getElementById('skillsvg').innerHTML = " ";
      var topskill = document.getElementById('TopSkills');
      topskill.style.background = "#90ee90";

      var inte = document.getElementById('in')
      inte.style.marginTop = "50px";
     
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x)
  x.addListener(myFunction) 

  var interes = ["Machine Learning","Web Development","Data Science","DevOps","App Development"] 
  var c = ["#fee715ff","#55AB55","#FFA500","white","#ff3333"]
  var h2 = document.getElementById('interest')
  var j=0;
  i = setInterval(function(){
            if(j==interes.length){
                j=0;
            }
            h2.style.color = c[j]
            h2.innerHTML = interes[j]
            
            j = j+1
  },1000)