function ManipulateCheckBox(){
  this.outerCheckbox = outerCheckboxElements;
  this.parentNodeItem = "";
  this.childNodeItems = "";
  this.innerCheckboxList = "";
}
ManipulateCheckBox.prototype = {
  deselectInnerChk : function(sourceCheckbox,sourceInnerList) {
    this.innerCheckboxList = sourceInnerList.getElementsByClassName("innerCheckbox");
    for(var i in this.innerCheckboxList) {
      this.innerCheckboxList[i].checked = false;
    }
  }, 
  showInnerChk : function(sourceCheckbox) {
    console.log("here");
    this.parentNodeItem = sourceCheckbox.parentNode;
    this.childNodeItems = this.parentNodeItem.childNodes;
    for(var i in this.childNodeItems) {
      // getting the list of inner block and displaying it
      if(this.childNodeItems[i].className == "innerList") {
        if(sourceCheckbox.checked) {
          this.childNodeItems[i].style.display = "block";
          sourceCheckbox.scrollIntoView(true);
        }
        else {
          this.childNodeItems[i].style.display = "none";
          this.deselectInnerChk(sourceCheckbox,this.childNodeItems[i]);
        }
      }
    }
  },
  bindEvents : function() {
    var _this = this;
    var manipulateCheckbox = "";
    for(var i in this.outerCheckbox) {
      if (this.outerCheckbox[i].type == "checkbox") {
        manipulateCheckbox = this.outerCheckbox[i];
        manipulateCheckbox.addEventListener("click",function() {
        _this.showInnerChk(this);
        });
      }  
    }
  }
}
function createManipulator() {
  var manipulator = new ManipulateCheckBox();
  manipulator.bindEvents();
}
var outerCheckboxElements = document.getElementsByClassName("outerCheckbox");
window.onload = createManipulator;