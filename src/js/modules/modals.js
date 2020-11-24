const modals = () => {
    function bindModal(trigerSelector, modalSelector, closeSelector) {
        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
        let timeout;



        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // или это или ниже
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = ""; // или это или ниже
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) { // кликаем на любое место на сайти
                modal.style.display = "none";
                document.body.style.overflow = ""; //или это или ниже
                //    document.body,classList.remove('modal-open');
            }
        });

    }

    function showModalInTimeout(selector, time) { // через сколько времени будет вызвано окно
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    //showModalInTimeout('.popup',60000);

};


export default modals;