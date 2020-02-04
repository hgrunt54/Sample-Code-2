const routes = {
    host: 'http://localhost:5556',
    jsonPostData: function (data) {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }
    }
}

function popDDs(dropdown) {
    let dd = document.getElementById(dropdown);
    dd.length = 0;

    fetch(routes.host + '/colors')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.warn('Looks we we have a problem here! Status Code: ' + response.status);
                    return;
                }

                return response.json()
            })
        .then(function (json) {
            let option;
            for (let i = 0; i < json.Colors.length; i++) {
                option = document.createElement('option');
                option.text = json.Colors[i];
                option.value = json.Colors[i];
                dd.add(option);
            }
        })
        .catch(function (err) {
            console.error('Fetch Error -', err);
        });
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