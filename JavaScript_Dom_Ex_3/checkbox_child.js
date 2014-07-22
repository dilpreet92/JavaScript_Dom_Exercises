function CheckEvent() {
  this.parentNodeItem = "";
  this.childList = "";
  this.innerCheckboxList = "";
  this.outerCheckboxElements = document.getElementsByClassName("outerCheckbox");
};

CheckEvent.prototype.deselectInnerChk = function(sourceCheckbox,sourceInnerList) {
  this.innerCheckboxList = sourceInnerList.getElementsByClassName("innerCheckbox");
  for(var i in this.innerCheckboxList) {
      this.innerCheckboxList[i].checked = false;
  }
};

CheckEvent.prototype.showInnerChk = function(sourceCheckbox) {
  this.parentNodeItem = document.getElementsByClassName(sourceCheckbox.name).item(0);
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

CheckEvent.prototype.bindEvents = function() {
  var _this = this;
  var manipulateCheckbox = "";
  for(var i in this.outerCheckboxElements) {
    if (this.outerCheckboxElements[i].type == "checkbox") {
      manipulateCheckbox = this.outerCheckboxElements[i];
      manipulateCheckbox.addEventListener("click",function() {
      _this.showInnerChk(this);
      });
    }  
  }
};

function createManipulator() {
  new CheckEvent().bindEvents();
}
window.onload = createManipulator;