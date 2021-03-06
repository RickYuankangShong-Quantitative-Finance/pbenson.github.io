function makeSlider(name, min, max, initialValue, x, y, step) {
  var label = createP(name);
  label.position(10, y - 17);
  var slider = createSlider(min, max, initialValue);
  slider.position(x, y);
  slider.style('width', '200px');
  slider.input(forceRedraw);
  slider.attribute('step', step);
  slider.value(initialValue);
  return slider;
}

function makeCheckbox(name, initialValue, x, y, changeFunction) {
  var label = createP(name);
  label.position(40, y - 15);
  var checkbox = createCheckbox('', initialValue);
  checkbox.position(x, y);
  checkbox.style('width', '80px');
  checkbox.changed(changeFunction);
  return checkbox;
}

function makeDropdownMenu(itemNames, selectEvent, x, y) {
  textAlign(CENTER);
  var sel = createSelect();
  sel.position(x, y);
  for (var idx = 0; idx < itemNames.length; ++idx) {
    sel.option(itemNames[idx]);
  }
  sel.changed(selectEvent);
  return sel;
}


function forceRedraw() {
  needsRedraw = true;
}