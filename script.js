document.addEventListener('DOMContentLoaded', function() {
    let outputscreen = document.getElementById("output-screen");

    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function() {
            let value = this.getAttribute('data-value');

            if (value === 'AC') {
                outputscreen.value = '';
            } else if (value === 'DEL') {
                outputscreen.value = outputscreen.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    outputscreen.value = eval(outputscreen.value) || "";
                } catch (err) {
                    alert("Invalid Input");
                    outputscreen.value = '';
                }
            } else {
                outputscreen.value += value;
            }
        });
    });
});
