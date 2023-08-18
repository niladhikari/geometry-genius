let area = 1;
// Triangle Area calculation
function calculateTriangleArea(params) {
    const triangleArea = document.getElementById('triangle-area');
    const triangleBase = document.getElementById('triangle-base');
    const triangleHeight = document.getElementById('triangle-height');
    const base = parseFloat(triangleBase.value);
    const height = parseFloat(triangleHeight.value);
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    area = 0.5* (base*height);
    triangleArea.innerText = area;
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const h3 = document.createElement('h3');
    h3.innerHTML = `${count + 1}.<span class="text-xl">Triangle</span> ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(h3);
}

// Rectangle Area calculation
function calculateRectangleArea(params) {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }
    area = width * length;
    setElementInnerText('rectangle-area',area);

    //add to calculate entry
    addToCalculationEntry('Rectangle',area)
}

// parallelogram Area calculation
function calculateParallelogramArea(params) {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }
    area = base * height;
    setElementInnerText('parallelogram-area',area);

    //add to calculate entry
    addToCalculationEntry('Parallelogram',area)
}

// parallelogram Area calculation
function calculateParallelogramArea(params) {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number');
        return
    }
    area = base * height;
    setElementInnerText('parallelogram-area',area);

    //add to calculate entry
    addToCalculationEntry('Parallelogram',area)
}

// Ellipse Area calculation
function calculateEllipseArea(params) {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please insert number');
        return
    }
    area = 3.1416*(majorRadius * minorRadius);
    const areaDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaDecimal);

    //add to calculate entry
    addToCalculationEntry('Ellipse',areaDecimal)
}

// Pentagon Area calculation
function calculatePentagonArea(params) {
    const perimeter = getInputValue('pentagon-perimeter');
    const hight = getInputValue('pentagon-hight');
    if(isNaN(perimeter) || isNaN(hight)){
        alert('Please insert number');
        return
    }
    area = 0.5*(perimeter * hight);
    setElementInnerText('pentagon-area',area);

    //add to calculate entry
    addToCalculationEntry('Pentagon',area)
}

// Rhombus Area calculation
function calculateRhombusArea(params) {
    const perimeter = getInputValue('rhombus-perimeter');
    const lengt = getInputValue('rhombus-lengt');
    if(isNaN(perimeter) || isNaN(lengt)){
        alert('Please insert number');
        return
    }
    area = 0.5*(perimeter * lengt);
    setElementInnerText('rhombus-area',area);

    //add to calculate entry
    addToCalculationEntry('Rhombus',area)
}
