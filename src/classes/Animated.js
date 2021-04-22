import AnimatedChild from './AnimatedChild';

export default class Animated {
    node;
    children = [];

    get hasChildren() {
        if (this.children.length > 0) {
            return true;
        }
        return false;
    }

    get isShowing() {
        if (this.node.classList.contains("show")) {
            return true;
        }
        return false;
    }

    constructor(element) {
        this.node = element;

        let children = this.node.getElementsByClassName("c-animated__child");
        if (children) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                this.children = [...this.children, new AnimatedChild(child)];
            }
        }

        if (!this.hasChildren) {
            window.addEventListener("DOMContentLoaded", () => {
                this.animate();
            })

            window.addEventListener("scroll", () => {
                this.animate();
            })
        } else {
            window.addEventListener("DOMContentLoaded", () => {
                this.animateChildren();
            })

            window.addEventListener("scroll", () => {
                this.animateChildren();
            })
        }
    }

    animate() {
        if (this.heightCheck(this.node)) {
            this.show()
        }
    }

    animateChildren() {
        if (this.heightCheck(this.node)) {
            this.children.forEach(child => {
                child.show();
            });
        }
    }

    show() {
        this.node.classList.add("show");
        
    }

    hide() {
        this.node.classList.remove("show");
    }

    heightCheck() {
        let triggerHeight = window.scrollY + document.documentElement.clientHeight - 200;
        let elementTop = this.node.getBoundingClientRect().top + document.documentElement.scrollTop;
        
        // console.log(triggerHeight, elementTop);

        if (triggerHeight > elementTop) {
            return true;
        }
        return false;
    }
}