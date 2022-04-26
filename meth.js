for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

document.querySelector('#slider1').addEventListener('input', function (ev) {
    document.querySelector('#progress1').innerHTML = ev.target.value;
});
document.querySelector('#slider2').addEventListener('input', function (ev) {
    document.querySelector('#progress2').innerHTML = ev.target.value;
});
document.querySelector('#slider3').addEventListener('input', function (ev) {
    document.querySelector('#progress3').innerHTML = ev.target.value;
});
document.querySelector('#slider4').addEventListener('input', function (ev) {
    document.querySelector('#progress4').innerHTML = ev.target.value;
});
document.querySelector('#slider5').addEventListener('input', function (ev) {
    document.querySelector('#progress5').innerHTML = ev.target.value;
});
document.querySelector('#slider6').addEventListener('input', function (ev) {
    document.querySelector('#progress6').innerHTML = ev.target.value;
});
document.querySelector('#slider7').addEventListener('input', function (ev) {
    document.querySelector('#progress7').innerHTML = ev.target.value;
});
document.querySelector('#slider8').addEventListener('input', function (ev) {
    document.querySelector('#progress8').innerHTML = ev.target.value;
});
document.querySelector('#slider9').addEventListener('input', function (ev) {
    document.querySelector('#progress9').innerHTML = ev.target.value;
});
document.querySelector('#sliderr1').addEventListener('input', function (ev) {
    document.querySelector('#progressr1').innerHTML = ev.target.value;
});
document.querySelector('#sliderr2').addEventListener('input', function (ev) {
    document.querySelector('#progressr2').innerHTML = ev.target.value;
});
document.querySelector('#sliderr3').addEventListener('input', function (ev) {
    document.querySelector('#progressr3').innerHTML = ev.target.value;
});
document.querySelector('#methlevel').addEventListener('input', function (ev) {
    document.querySelector('#methsel').innerHTML = ev.target.value;
});

for (let i = 1; i < 10; i++) {
    document.getElementById("slider" + [i]).disabled = true
}

let mx = 60;
let n1x, n2x, n3x, x1, x2, y1, y2, z1, z2, result

document.querySelector('#methlevel').addEventListener('input', function (ev) {
    if (ev.target.value == 0) { mx = 60 } else (mx = 75)
});

document.querySelector('#input1').addEventListener('input', function (ev) {
    n1x = ev.target.value;
    calculate(mx, n1x, n2x, n3x)

});
document.querySelector('#input2').addEventListener('input', function (ev) {
    n2x = ev.target.value;
    calculate(mx, n1x, n2x, n3x)

});
document.querySelector('#input3').addEventListener('input', function (ev) {
    n3x = ev.target.value;
    calculate(mx, n1x, n2x, n3x)

});

function calculate(mb, n1b, n2b, n3b) {
    m = parseInt(mb)
    n1 = parseInt(n1b)
    n2 = parseInt(n2b)
    n3 = parseInt(n3b)
    x1 = ((((3 * (n2 + n3)) / 2) - m) / m) * 99;
    x2 = ((((3 * (n2 + n3 + 2)) / 2) - m) / m) * 99;
    y1 = ((((3 * (n1 + n3)) / 2) - m) / m) * 99;
    y2 = ((((3 * (n1 + n3 + 2)) / 2) - m) / m) * 99;
    z1 = ((((3 * (n1 + n2)) / 2) - m) / m) * 99;
    z2 = ((((3 * (n1 + n2)) / 2) - m) / m) * 99;
    e1 = ((((3 * (n2 + n3 + 1)) / 2) - m) / m) * 99;
    e2 = ((((3 * (n1 + n3 + 1)) / 2) - m) / m) * 99;
    e3 = ((((3 * (n1 + n2 + 1)) / 2) - m) / m) * 99;
    if (e1 > 0 && e1 < 100 && e2 > 0 && e2 < 100 && e3 > 0 && e3 < 100) {
        document.querySelector('#progressr1').innerHTML = Math.round(e1).toString();
        document.querySelector('#progressr2').innerHTML = Math.round(e2).toString();
        document.querySelector('#progressr3').innerHTML = Math.round(e3).toString();
        document.querySelector('#sliderr1').value = Math.round(e1);
        document.querySelector('#sliderr2').value = Math.round(e2);
        document.querySelector('#sliderr3').value = Math.round(e3);
        document.querySelector('#warning').innerHTML = "Estimated Formula"
        document.querySelector('#warning').style.color = "#56c07f";
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }
    } else {
        document.querySelector('#progressr1').innerHTML = "0";
        document.querySelector('#progressr2').innerHTML = "0";
        document.querySelector('#progressr3').innerHTML = "0";
        document.querySelector('#sliderr1').value = 0;
        document.querySelector('#sliderr2').value = 0;
        document.querySelector('#sliderr3').value = 0;
        document.querySelector('#warning').innerHTML = "Enter Valid Purities"
        document.querySelector('#warning').style.color = "#c05656";
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
        }
    }

}

