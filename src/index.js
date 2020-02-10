import dishes from "./menu.json";
import dishItemTemplate from "./templates/dish.hbs"

import './styles.css';

const refs = {
    dishFeed: document.querySelector('.js-menu'),
}

function dishCollection (dishes) {
    const markup = dishes.reduce(((acc, dish) => acc + dishItemTemplate(dish)), "");
    refs.dishFeed.insertAdjacentHTML('beforeend', markup);
}
dishCollection(dishes);

