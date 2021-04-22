import Animated from './classes/Animated';

const animated = document.getElementsByClassName("c-animated");
for (let i = 0; i < animated.length; i++) {
    new Animated(animated[i]);
}