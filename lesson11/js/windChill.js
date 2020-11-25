function windChill() {
    let t = parseFloat(document.getElementById('currentTemp').textContent);
    let s= 15;
    let output= "N/A";
    if( t<= 50 && s>3) {
    let f= (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275(t*(Math.pow(s, 0.16))));
    output= Math.round(f);
}
    document.getElementById('output').innerHTML = output;
}  

