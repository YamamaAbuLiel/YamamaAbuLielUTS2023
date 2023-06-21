function WebSite(web){
    var pic;
    if(web==1){
        pic="../Images/Google.png";
        document.getElementById("google").innerHTML="Clicked";
        document.getElementById("info").innerHTML="Clicked Button : GOOGLE";
        

    }
    else if (web==0){
        pic="../Images/LOGO.png";
        document.getElementById("ISCOSOFT").innerHTML="Clicked";
        document.getElementById("info").innerHTML="Clicked Button : ISCOSOFT";
        document.getElementById('myImage').src = pic;

    }

    else if (web==2){
        pic="../Images/Microsoft.jpg";
        document.getElementById("micrsoft").innerHTML="Clicked";
        document.getElementById("info").innerHTML="Clicked Button : MICROSOFT";

    }

    document.getElementById('myImage').src = pic;
    document.getElementById("myImage").style.width = "277px"; 
    document.getElementById("myImage").style.height = "101.8px"; 


}


function change() {
    document.getElementById("Com-Des").style.fontSize = "25px"; 
    document.getElementById("Com-Des").style.color = "blue";
    document.getElementById("Com-Des").style.backgroundColor = "yellow";        
  }