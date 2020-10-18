var options = {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric',
 
}
document.getElementById('currentDate').innerHTML = new Date().toLocaleDateString('en-US', options);

let d=new Date();
d.getDay();
if(d.getDay()==5){
    document.querySelector().style.display="block"
} else{""
}