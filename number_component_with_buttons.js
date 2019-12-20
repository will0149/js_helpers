/**
 * <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="input-group bootstrap-touchspin" ><span class="input-group-btn">
                                  <button class="btn btn-default bootstrap-touchspin-down" type="button" id="scroll-button-down">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix"><i class="fa" id="currency_symbol">{{ currency_symbol }}</i></span>
                                    {% render_field field|add_class:'form-control text-center' placeholder=field.label id='amount' style='display: block;' %}
                                   <span  class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn">
                                  <button class="btn btn-default bootstrap-touchspin-up" type="button" id="scroll-button-up">+</button></span></div>

                            </div>
 */
const buttons = document.querySelectorAll("button");
    const input = document.getElementById("amount");
    const min_value = Math.floor(input.min);
    const max_value = Math.floor(input.max);
    const interval_value = Math.floor(input.step);
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const input_value = Math.floor(document.getElementById("amount").value);
        input.step = 1;
        if (button.id === 'scroll-button-down') {
            if (input_value > min_value) {
                input.value = input_value - interval_value;
            } else {
                input.value = min_value;
            }
        } else if (button.id === 'scroll-button-up') {
            if (input_value < max_value) {
                input.value = input_value + interval_value;
            } else {
                input.value = max_value;
            }
        }
    });
}