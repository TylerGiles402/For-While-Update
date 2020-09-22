var damage = 5;

while(damage<=10){
  function damage() {
    
  }
  var dragonDamage = damage(prompt("How many hits to damage the dragon?"));
  if(!isNaN(dragonDamage)){
    damage=damage+dragonDamage;
  }
  
}

document.body.querySelector(".result1").innerHTML="You have defeated the dragon."