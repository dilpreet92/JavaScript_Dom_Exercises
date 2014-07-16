function CheckboxManipulator() {
  this.init();
  }
CheckboxManipulator.prototype = {
  init : function() {
  this.selectNoneChk = document.getElementById("selectNone");
  this.selectAllChk = document.getElementById("selectAll");
  this.checkboxNames = document.getElementsByClassName("chkbox");
  },
  toggle : function() {
    this.selectAllChk.checked = false;
    this.selectNoneChk.checked = false;
  },
  selectAll : function() {
    //toggling none check box value to false
    this.selectNoneChk.checked = false;
    this.traverseCheckbox(true);
  },
  selectNone : function() {
    //toggling selectAll check box value to false
    this.selectAllChk.checked = false;
    this.traverseCheckbox(false);
  },
  traverseCheckbox : function(value) {
    for(var i in this.checkboxNames) {
      this.checkboxNames[i].checked = value;
    } 
  },
  bindEvents: function(){
    var _this = this; 
    this.selectAllChk.addEventListener("click",function(){
      _this.selectAll();
      });
    this.selectNoneChk.addEventListener("click",function(){
      _this.selectNone();
      });
    for(var i in this.checkboxNames) {
    if (this.checkboxNames[i].type == "checkbox") {
      var manipulateCheckbox = this.checkboxNames[i];
      manipulateCheckbox.addEventListener("click",function(){
        _this.toggle();
        });  
      }
    }
  }
}      
function createCheckboxManipulator() {
  var manipulator = new CheckboxManipulator();
  manipulator.bindEvents();
}
window.onload = createCheckboxManipulator();