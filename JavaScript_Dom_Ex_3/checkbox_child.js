function ManipulateCheckBox(){
  this.init();
}
ManipulateCheckBox.prototype = {
  init : function() {
    this.innerList = document.getElementsByClassName("innerList");
  }
  deselectInnerChk : function() {

  } 
  showInnerChk : function() {

  }
  bindEvents : function() {
    var _this = this;
    for(var i in this.innerList) {
      this.innerList[i].addEventListener("click",function(){
        _this.showInnerChk(this);
      });  
    }
  }
}
function createManipulator() {
  var manipulator = new manipulator();
  manipulator.bindEvents();
}
