function CheckboxManipulator() {
  this.init();
  }
CheckboxManipulator.prototype = {
  init : function() {
  this.selectNoneChk = document.getElementById("selectNone");
  this.checkboxNames = document.getElementsByClassName("chkbox");
  this.count = 0;
  this.values = new Array();
  },
  toggle : function(triggeredCheckbox) {
    this.selectNoneChk.checked = false;
    this.countNum(triggeredCheckbox);
  },
  countNum : function(triggeredCheckbox) {
    if (triggeredCheckbox.checked) {
      this.count++ ;
      if(this.count > 3) {
        triggeredCheckbox.checked = false;
        this.count--;
        alert("Only 3 can be Selected"+ "\n" + "You Have Already Selected " + this.values);
      }
      else {
        this.values.push(triggeredCheckbox.value);
      }
    }
    else if(triggeredCheckbox.checked == false) {
      this.count-- ;
      this.values.pop(triggeredCheckbox.value);
    }
  },
  selectNone : function() {
    for(var i in this.checkboxNames) {
      this.checkboxNames[i].checked = false;
    } 
    this.count = 0;
    this.values = "";
  },
  bindEvents: function(){
    var _this = this; 
    this.selectNoneChk.addEventListener("click",function(){
      _this.selectNone();
      });
    for(var i in this.checkboxNames) {
    if (this.checkboxNames[i].type == "checkbox") {
      var manipulateCheckbox = this.checkboxNames[i];
      manipulateCheckbox.addEventListener("click",function(){
        _this.toggle(this);
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