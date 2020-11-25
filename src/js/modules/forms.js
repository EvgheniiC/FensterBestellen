
const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');//конкретно телефон

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');//все не цифры,т е буквы нельзя даж записать 
        });
    });
    
    const message = {
        loading: 'Loading...',
        success: 'Danke, wir rufen Sie gleich',
        failure: 'Fehler...'
    }

    const postData = async (url, data) => { 
        document.querySelector('.status').textContent = message.loading; // загрузка
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => { //очищаем формы
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();  //чтобы страница не перегружалась AJAX

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');// добавим этому блоку status класс
            item.appendChild(statusMessage);// помезаем блок в конец для оповещения поьзователя

            const formData = new FormData(item);//собирает все данные - input

            postData('assets/server.php', formData) //отправка запроса на сервер по адрессу с данными -formdata
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;