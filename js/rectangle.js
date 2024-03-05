function rectangleCalculate() {
const width = getInputBaseById('Width-Rectangle');
const Length = getInputBaseById('Lenght-Rectangle');
if(isNaN(width) || isNaN(Length )) {
    alert('Enter a valid number')
    return
}
const Area = (width * Length);
areaCalculationAll('area-calculation',Area);
}

document.getElementById('btn-rectangle').addEventListener('click', function() {
 rectangleCalculate();   
})