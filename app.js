var p = document.getElementById("one");

var inputs = document.querySelectorAll("[type='radio']");

for (var i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('click', function () {

            p.style[this.name] = this.value;

    });
}
