function popDDs(dropdown) {
    var Colors = ['Red', 'Blue', 'Yellow', 'Green'];
    dd = document.getElementById(dropdown);
    let option;
    for (let i = 0; i < Colors.length; i++) {
        option = document.createElement('option');
        option.value = Colors[i];
        option.text = Colors[i];
        dd.add(option);
    }
}

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

document.addEventListener('DOMContentLoaded', function () {
    popDDs('bgColor');
    popDDs('fColor');
});