const numeric_input = document.querySelectorAll("[type=\"number\"]");

for (const input_in of numeric_input) {
    input_in.addEventListener('input', function (event) {
        var input = input_in.id;
        if (input === 'amount') {
            input_in.step = 1;
            var input_value = input_in.value;
            //input_value.toFixed(0);
            if (input_value.length <= 10) {
                if (input_value !== Math.floor(input_value)) {
                    if (input_value > 0) {
                        input_in.value = Math.floor(input_value)
                    }
                }
            } else {
                input_in.value = input_value.substring(0, 11);
            }
        }
    });
}
