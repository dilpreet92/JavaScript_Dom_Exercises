var checkboxNames = document.getElementsByClassName('chkbox'),
    noneId = document.getElementById("selectNone"),
    selectAllId = document.getElementById("selectAll");
function selectAll() {
  //toggling none check box value to false
  noneId.checked = false;
  for(var i in checkboxNames) {
    checkboxNames[i].checked = selectAllId.checked;
  }
}
function selectNone() {
  //toggling selectAll check box value to false
  selectAllId.checked = false;
  for(var i in checkboxNames) {
    checkboxNames[i].checked = false;
  }
}
function toggle(sourceCheckbox) {
  if((sourceCheckbox.checked == false) && (selectAllId.checked == true)) {
    selectAllId.checked = false;
  }
  if((sourceCheckbox.checked == true) && (noneId.checked == true)){
    noneId.checked = false;
  }
}