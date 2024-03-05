function getInputBaseById(geometryId) {
    const trianglaBase = document.getElementById(geometryId);
    const trianglaBaseText = trianglaBase.value;
    const trianglaBaseValue = parseFloat(trianglaBaseText);
    return trianglaBaseValue;
}

function setTextValueById(ElementId, value) {
    const Element  = document.getElementById(ElementId);
    Element.innerText = value;
}



 
 function TringleCalculate() {
    const  base = getInputBaseById('Base-Triangle');
    const height = getInputBaseById('Height-Triangle');
    if(isNaN(base) || isNaN(height)) {
        alert('Enter a valid number')
        return
    }
    const area = (0.5 * base * height);
    areaCalculationAll('area-calculation', area);
   
 }


 function areaCalculationAll(areaType, area) {
    
    const areaCalculation = document.getElementById('area-calculation');
    const num = areaCalculation.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${num + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-secondary">Convert</button>`;
    areaCalculation.appendChild(p);
 }



 document.getElementById('triangle-btn').addEventListener('click', function() {
    TringleCalculate();
 })
 
