

function Multiply()

{
    const firstnum=parseFloat(document.getElementById("First").value);
    const secnum=parseFloat(document.getElementById("Second").value);
    const Res=firstnum*secnum;
    document.getElementById("math-res").textContent = Res;
}


function Divided(){
    const firstnum=parseFloat(document.getElementById("First").value);
    const secnum=parseFloat(document.getElementById("Second").value);
    if(secnum!=0){
        const Res=firstnum/secnum;
        document.getElementById("math-res").textContent = Res;
    }
    else {
        document.getElementById("math-res").innerHTML = "Divided by Zero !!";
    }
   

}





function Convert(){
    const celsiusInput = parseFloat(document.getElementById("temp-in-C").value);
    const fahrenheitInput = parseFloat(document.getElementById("temp-in-F").value);
    if( isNaN(celsiusInput) && isNaN(fahrenheitInput))
    {
        window.alert("There Is No Value To Convert !!")
    }
    else if(!isNaN(celsiusInput))
    {
        document.getElementById("temp-res").textContent=celsiusInput+" °C "+((celsiusInput * 1.8) + 32) +" °F ";
        
        
    }
    else if(!isNaN(fahrenheitInput))
    {
        document.getElementById("temp-res").textContent=fahrenheitInput+" °F "+((fahrenheitInput- 32) / 1.8)+" °C";
    }


    
}