var characteristicIncrease = document.querySelectorAll(".SkillContainerBox").forEach(characteristicIncrease => {characteristicIncrease.addEventListener('change', updateCharacteristic )});

var characteristicIncreaseButton = document.querySelectorAll(".CharacteristicIncreasebutton").forEach(characteristicIncreaseButton => {characteristicIncreaseButton.addEventListener('change', increaseChar )});

//------------------------------Characteristic Functions

function updateMod(statBox){
  selector = '.SkillContainer';
  topBox = getTopContainer(statBox, selector);
  statBox = document.getElementById(topBox.id + "Box");
  modBox = document.getElementById(topBox.id + "Mod");
  modBox.value = Math.trunc(parseInt(statBox.value)/10);
}

function increaseChar(){
  button = document.getElementById(event.target.id);
  areaSelector = '.SkillContainer'
  var containerBox = getTopContainer(button, areaSelector);  
  var statBox = document.getElementById(containerBox.id + 'Box');
  if(!button.checked){
    statBox.value = parseInt(statBox.value) - 5;
  }
  else if(button.checked) {
    statBox.value = parseInt(statBox.value) + 5;
  }
  updateMod(statBox);
}

function getTopContainer(origin, selector){
// Get the next sibling element
var parent = origin.parentElement;

// If there's no selector, return the first sibling
if (!selector) return parent;

// If the sibling matches our selector, use it
// If not, jump to the next sibling and continue the loop
while (parent) {
  if (parent.matches(selector)) return parent;
  parent = parent.parentElement;
}

};

function updateCharacteristic(event){
  origin = document.getElementById(event.target.id);
  selector = '.SkillContainer';
  topBox = getTopContainer(origin, selector);
  rows = document.getElementById(topBox.id+"Mod");
  rows.value = Math.trunc(parseInt(origin.value)/10);
}

