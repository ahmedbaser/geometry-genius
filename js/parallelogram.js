function parallelogramCalculate() {
    const base = getInputBaseById('base-parallelogram');
    const height = getInputBaseById('hight-parallelogram');
    if(isNaN(base) || isNaN(height)) {
        alert('Enter a valid number')
        return
    }
    const areaParallelogram  = (base * height);
    areaCalculationAll('area-calculation', areaParallelogram);
}


document.getElementById('btn-parallelogram').addEventListener('click', function() {
    parallelogramCalculate();
})