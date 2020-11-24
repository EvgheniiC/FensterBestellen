const tabs = (headerSelector, tabsSelector, contetsSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contetsSelector);
       

        function hideTAbContetn() {
            content.forEach(item => {
                item.style.display = 'none'; // скрывает контент
            });
            tab.forEach(item => {
                item.classList.remove(activeClass); // удаляет активный класс у ненужных табов
            });
        }

        function showTAbContatn(i=0) {
            content[i].style.display = 'block';// показывае конкретный i-й таб
            tab[i].classList.add(activeClass);// дабавляем активный класс
        }

        hideTAbContetn();
        showTAbContatn();

        header.addEventListener('click', (e) => { //обрабатывае все табы
            const target = e.target; //цель
            if(target && (target.classList.contains(tabsSelector.replace(/\./, ""))  ||
             target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))){ //убираем . в начале класса и кликаем в один из табов
                tab.forEach((item, i )=> {
                    if(target == item || target.parentNode == item){ // item - элемент  i - номер таба
                        hideTAbContetn();
                        showTAbContatn(i);
                    }
                });
            }
        });


}



export default tabs;