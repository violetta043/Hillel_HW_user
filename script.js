const years = prompt("What is your year of birth?"); 
const city = prompt("Where you from?"); 
const favSport = prompt("What's your favorite kind of sort?");  

const age = (new Date().getFullYear() - parseInt(years));

if(city === "Kyiv") {
  alert(`Your age: ${age}\nYou live in the capital of Ukraine`);
}else if(city === "Washington"){
  alert(`Your age: ${age}\nYou live in the capital of the United States`);
}else if(city === "London"){
  alert(`Your age: ${age}\nYou live in the capital of England`);
}else if(city === "" || city === null){
 alert(`Your age: ${age}`)
}else{
  alert(`Your age: ${age}\nYou live in a city ${city}`);
}

switch(favSport) {
  case 'soccer':
    alert("Cool! Do you want to become like Kylian Mbappé");
    break;
  case 'box':
    alert("Cool! Do you want to become like Anthony Joshua");
    break;
  case 'swimming':
    alert("Cool! Do you want to become like Michael Fred Phelps");
    break;
  default:
    alert("Nice choice! Tell me more about this kind of sport");
    break; 
}


if(years === null || years === '') {
  alert("Sad that you don't want to enter your year of birth ");
}else if(city === null || city === ''){
  alert("Sad that you don't want to enter where you live ");
}else if(favSport === null || favSport === ''){
  alert("Sad that you don't want to enter your favorite sport ");
}
