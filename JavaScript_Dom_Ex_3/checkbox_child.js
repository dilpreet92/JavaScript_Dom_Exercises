function ManipulateCheckBox(){
  this.init();
}
ManipulateCheckBox.prototype = {
  init : function() {
    this.outerCheckbox = document.getElementsByClassName("outerCheckbox");
    this.parentNodeItem = "";
    this.childNodeItems = "";
  },
  deselectInnerChk : function() {

  }, 
  showInnerChk : function(sourceCheckbox) {
    console.log("here");
    this.parentNodeItem = sourceCheckbox.parentNode;
    this.childNodeItems = parentNode.childNodes;
    for(var i in this.childNodeItems) {
      // getting the list of inner block and displaying it
      if(this.childNodeItems[i].className == "innerList") {
        if(sourceCheckbox.checked) {
          this.childNodeItems[i].style.display = "block";
          sourceCheckbox.scrollIntoView(true);
        }
        else {
          this.childNodeItems[i].style.display = "none";
          deselectInnerCheckbox(sourceCheckbox);
        }
      }
    }
  },
  bindEvents : function() {
    var _this = this;
    var manipulateCheckbox = "";
    for(var i in this.outerCheckbox) {
      manipulateCheckbox = this.outerCheckbox[i];
      manipulateCheckbox.addEventListener("click",function(){
        _this.showInnerChk(this);
      });  
    }
  }
}
function createManipulator() {
  var manipulator = new ManipulateCheckBox();
  manipulator.bindEvents();
}
window.onload = createManipulator;