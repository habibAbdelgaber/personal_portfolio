import throttle from "/lodash/throttle";
// var throttle = require('lodash/throttle');

class RevealOnScroll {
    constructor() {
        this.itemsToRevealOnScroll = document.querySelectorAll('.feature-items');
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle)


    }

    calcCaller() {
        console.log("Scroll function rans")
        this.itemsToRevealOnScroll.forEach(e => {
            this.calcIfScrollTo((e));
        })

    }

    calcIfScrollTo(e) {
        // console.log(e.getBoundingClientRect().y)
        let scrollPercent = (e.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollPercent < 75) {
            e.classList.add("reveal-item--is-visible");

        }
    }

    hideInitially() {
        this.itemsToRevealOnScroll.forEach(e => e.classList.add("reveal-item"));
    }
}


export default RevealOnScroll;