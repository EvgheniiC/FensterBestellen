const checkNumInputs = (selector) => { //проверка, что введена цифра
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');//все не цифры,т е буквы нельзя даж записать 
        });
    });

};

export default checkNumInputs;