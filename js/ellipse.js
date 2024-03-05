function ellipseCalculate() {
    let π = 3.14;
    const major = getInputBaseById('major-Ellipse');
    const minor = getInputBaseById('minor-Ellipse');
    if(isNaN(major) || isNaN(minor)) {
        alert('Enter a valid number')
        return
    }
    const ellipseArea = (π * major * minor);
    areaCalculationAll('area-calculation', ellipseArea.toFixed(2));
}


document.getElementById('btn-Ellipse').addEventListener('click', function() {
    ellipseCalculate();
})