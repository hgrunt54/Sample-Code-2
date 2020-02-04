function changeBackground() {
    var backColor = document.getElementById('bgColor').value;
    var main = document.getElementById('MainSection');
    var p1 = "The Background Color is " + backColor;
    main.style.backgroundColor = backColor;
    document.getElementById('p1').innerHTML = p1;
    
}

function changeFont() {
    var fontColor = document.getElementById('fColor').value;
    var main = document.getElementById('MainSection');
    var p2 = "The Font Color is " + fontColor;
    main.style.color = fontColor;
    document.getElementById('p2').innerHTML = p2;
}

