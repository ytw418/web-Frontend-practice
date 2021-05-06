'use strict';

class SliderPosition {
    constructor (slidesArray) {
        this.currentPosition = 0;
        this.clearCurrentPosition = function () {
            this.currentPosition = 0;
        };
        this.nextCurrentPosition = function () {
            this.currentPosition++;
        };
        this.prevCurrentPosition = function () {
            this.currentPosition--;
        };
        this.getMinSlideIndex = function () {
            const minSlide = slidesArray.reduce(function (previous, current) {
                return previous.position < current.position ? previous : current;
            });
            return slidesArray.indexOf(minSlide);
        };
        this.getMaxSlideIndex = function () {
            const maxSlide = slidesArray.reduce(function (previous, current) {
                return previous.position > current.position ? previous : current;
            });
            return slidesArray.indexOf(maxSlide);
        };
        this.getMinSlidePosition = function () {
            return slidesArray[this.getMinSlideIndex()].position;
        };
        this.getMaxSlidePosition = function () {
            return slidesArray[this.getMaxSlideIndex()].position;
        };
    }
}

module.exports = SliderPosition;
