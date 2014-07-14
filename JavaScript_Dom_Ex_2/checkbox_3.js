var checkboxNames = document.getElementsByClassName('chkbox'),
    noneId = document.getElementById("selectNone"),
    count = 0;    
function selectNone() {
  for(var i in checkboxNames) {
    checkboxNames[i].checked = false;
  }
  count = 0;
}
function toggle(sourceCheckbox) { 
  var countNum = countNumber();
  if(countNum > 3) {
    alert("Only 3 can be selected");
    sourceCheckbox.checked = false;
  }
  else if((sourceCheckbox.checked == true) && (noneId.checked == true)) {
    noneId.checked = false;
  }
} 
function countNumber() {
  count = 0 ;
  for(var i in checkboxNames) {
    if(checkboxNames[i].checked == true) {
      count++;
    }
  }
  return count;
}