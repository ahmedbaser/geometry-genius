function rhombusCalculate() {
  const Base = getInputBaseById('Base-Rhombus');
  const Height = getInputBaseById('Height-Rhombus');
  if(isNaN(Base) || isNaN(Height)) {
    alert('Enter a valid number')
    return
}
  const rhombusArea = (0.5 * Base * Height);
  areaCalculationAll('area-calculation', rhombusArea);

}

document.getElementById('btn-Rhombus').addEventListener('click', function() {
  rhombusCalculate();   
})