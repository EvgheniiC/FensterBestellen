import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";


window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let modalState = {};
    let deadline = '2020-12-12';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block'); // .big_img > img только прямые наследники которые будут тэгами img
    forms(modalState); 
    timer('.container1', deadline);

});