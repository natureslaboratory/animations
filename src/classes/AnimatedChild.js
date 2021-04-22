export default class AnimatedChild {
    node;
    animationDelay;
    timeout;

    constructor(element) {
        this.node = element;

        if (this.node.dataset.animationDelay) {
            this.animationDelay = this.node.dataset.animationDelay;
        }
    }

    show() {
        if (this.animationDelay) {
            this.timeout = setTimeout(() => {
                this.node.classList.add("show");
            }, this.animationDelay);
        } else {
            this.node.classList.add("show");
        }
    }
}