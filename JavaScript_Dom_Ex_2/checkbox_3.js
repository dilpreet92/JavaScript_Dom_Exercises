function CheckboxManipulator(getElements) {
  this.selectNoneElem = getElements.selectNoneElement;
  this.checkboxNames = getElements.checkboxElements;
  this.count = 0;
  this.values = new Array();
};
CheckboxManipulator.prototype.toggle = function(triggeredCheckbox) {
  this.selectNoneElem.checked = false;
  this.countNum(triggeredCheckbox);
};
CheckboxManipulator.prototype.countNum = function(triggeredCheckbox) {
  if (triggeredCheckbox.checked) {
    this.count++ ;
    if(this.count > 3) {
      triggeredCheckbox.checked = false;
      this.count--;
      alert("Only 3 can be Selected"+ "\n" + "You Have Already Selected " + this.values.toString());
    }
    else {
     this.values.push(triggeredCheckbox.value);
    }
  }
  else {
    this.count-- ;
    var index = this.values.indexOf(triggeredCheckbox.value);
    this.values.splice(index , 1);
  }
};
CheckboxManipulator.prototype.selectNone = function() {
  for(var i in this.checkboxNames) {
    this.checkboxNames[i].checked = false;
  } 
  this.count = 0;
  this.values = "";
};
CheckboxManipulator.prototype.bindEvents = function(){
  var _this = this; 
  var manipulateCheckbox = "";
  this.selectNoneElem.addEventListener("click",function(){
    _this.selectNone();
    });
  for(var i in this.checkboxNames) {
    if (this.checkboxNames[i].type == "checkbox") {
      manipulateCheckbox = this.checkboxNames[i];
      manipulateCheckbox.addEventListener("click",function(){
       _this.toggle(this);
      });  
    }
  }
};     
function createCheckboxManipulator(getElements) {
  var manipulator = new CheckboxManipulator(getElements);
  manipulator.bindEvents();
}

var elements = {
  "selectNoneElement" : document.getElementById("selectNone"),
  "checkboxElements" : document.getElementsByClassName("chkbox")
}
window.onload = createCheckboxManipulator(elements);