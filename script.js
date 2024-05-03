var light=document.getElementById("light")
function togglelight(values){
    if(values){
        light.className= "lighton";
    }else{
        light.className= "lightoff";
    }
}