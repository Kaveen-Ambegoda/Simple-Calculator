const display = document.getElementById("display");

toDisplay=(input)=>{

display.value +=input;

}

clearDisplay=()=>{
display.value="";
}

calculate=()=>{
try{
    display.value= eval(display.value);
}
catch(error){
    display.value="ERROR"
}
}