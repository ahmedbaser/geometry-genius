function pentagonCalculate() {
    const p = getInputBaseById('p-Pentagon');
    const b = getInputBaseById('b-Pentagon');
    if(isNaN(p) || isNaN(b)) {
        alert('Enter a valid number')
        return
    }
    const PentagonArea = (0.5 * p * b);
    areaCalculationAll('area-calculation', PentagonArea);

}

document.getElementById('btn-pentagon').addEventListener('click', function() {
 pentagonCalculate();   
})


