const modals = () => {
    function bindModal(trigerSelector, modalSelector, closeSelector, closeClockOverlay = true) {
        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => { // будут закрываться все модальные окна
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // или это или ниже
                // document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener("click", () => {
            windows.forEach(item => { // будут закрываться все модальные окна
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = ""; // или это или ниже
            // document.body.classList.remove('modal-open');
            
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClockOverlay) {
                windows.forEach(item => { // будут закрываться все модальные окна
                    item.style.display = 'none';
                });
                // кликаем на любое место на сайти
                modal.style.display = "none";
                document.body.style.overflow = ""; //или это или ниже
                //    document.body,classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }
        });

    }

    function showModalInTimeout(selector, time) { // через сколько времени будет вызвано окно
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time)
    }

    function calcScroll () {
        let div= document.createElement('div');

        div.style.widht = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidht = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidht;

    } 



bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
bindModal('.phone_link', '.popup', '.popup .popup_close');
bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); //кнопка далее,если нажмем, то не будет закрываться если на пустом месте кликнешь
bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
//showModalInTimeout('.popup',60000);

};


export default modals;