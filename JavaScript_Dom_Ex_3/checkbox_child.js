function CheckBoxVisiblity() {
  this.parentNodeItem = "";
  this.childList = "";
  this.innerCheckboxList = "";
};

CheckBoxVisiblity.prototype.deselectInnerChk = function(sourceCheckbox,sourceInnerList) {
  this.innerCheckboxList = sourceInnerList.getElementsByClassName("innerCheckbox");
  for(var i in this.innerCheckboxList) {
      this.innerCheckboxList[i].checked = false;
  }
};

CheckBoxVisiblity.prototype.showInnerChk = function(sourceCheckbox) {
  this.parentNodeItem = sourceCheckbox.parentNode;
  this.childList = this.parentNodeItem.getElementsByClassName("innerList").item(0);
  if(sourceCheckbox.checked) {
    this.childList.style.display = "block";
    sourceCheckbox.scrollIntoView(true);
  }
  else {
    this.childList.style.display = "none";
    this.deselectInnerChk(sourceCheckbox,this.childList);
  }
};

CheckBoxVisiblity.prototype.bindEvents = function() {
  var _this = this;
  var manipulateCheckbox = "";
  for(var i in outerCheckboxElements) {
    if (outerCheckboxElements[i].type == "checkbox") {
      manipulateCheckbox = outerCheckboxElements[i];
      manipulateCheckbox.addEventListener("click",function() {
      _this.showInnerChk(this);
      });
    }  
  }
};

function createManipulator() {
  var manipulator = new CheckBoxVisiblity();
  manipulator.bindEvents();
}
var outerCheckboxElements = document.getElementsByClassName("outerCheckbox");
window.onload = createManipulator;