function showInnerCheckbox(sourceCheckbox) {
  var parentNodeItem = sourceCheckbox.parentNode;
  var childNodeItems = parentNodeItem.childNodes;
  for(var i in childNodeItems) {
    // getting the list of inner block and displaying it
    if(childNodeItems[i].className == "innerList") {
      if(sourceCheckbox.checked == true) {
        childNodeItems[i].style.display = "block";
        sourceCheckbox.scrollIntoView(true);
      }
      else if(sourceCheckbox.checked == false) {
        childNodeItems[i].style.display = "none";
        deselectInnerCheckbox(sourceCheckbox);
      }
    }
  }
}
function deselectInnerCheckbox(sourceCheckbox) {
  var innerCheckbox = document.getElementsByClassName(sourceCheckbox.className);
  for(var i in innerCheckbox) {
    innerCheckbox[i].checked = false;
  }
}