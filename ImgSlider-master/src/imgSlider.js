'use strict';
import createSliderLayout from './sliderLayout.js';
import SliderPosition from './sliderPosition.js';

function imgSlider (
    sliderId,
    {
        autoplayEnabled = false,
        autoplayInterval = 5000,
        buttonsVisible = true,
        maxWidth = '500px',
        maxHeight = '500px',
    },
) {
    if (document.getElementById(sliderId) === null) {
        console.log(`Element with id="${sliderId}" not found.`);
        return;
    }
    createSliderLayout(sliderId);

    const slider = document.getElementById(sliderId),
        slidesCollection = slider.getElementsByClassName('slides-collection')[0],
        singleSlides = slider.getElementsByClassName('single-slide'),
        playpauseButton = slider.getElementsByClassName('playpause-button')[0],
        transformStep = 100,
        slidesArray = [...singleSlides].map((item, position) => ({ item, position, transform: 0 })),
        slideDirection = { next: 'next', previous: 'previous' },
        position = new SliderPosition(slidesArray);

    let transformValue = 0,
        sliderTimerId,
        isSlideInTransition = false;

    slider.style.maxWidth = maxWidth;
    slider.style.maxHeight = maxHeight;

    if (slidesArray.length === 0) {
        console.log(`Element ${sliderId} doesn't contain any slides.`);
        return;
    } else {
        if (slidesArray.length === 1) {
            const copy = singleSlides[0].cloneNode(true);
            singleSlides[0].after(copy);
            slidesArray.push({ item: copy, position: 1, transform: 0 });
        }
    }

    function switchSlide (direction) {
        let nextSlide = 0;
        if (direction === slideDirection.next) {
            position.nextCurrentPosition();
            if (position.currentPosition > position.getMaxSlidePosition()) {
                nextSlide = position.getMinSlideIndex();
                slidesArray[nextSlide].position = position.getMaxSlidePosition() + 1;
                slidesArray[nextSlide].transform += slidesArray.length * 100;
                slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
            }
            transformValue -= transformStep;
        } else {
            position.prevCurrentPosition();
            if (position.currentPosition < position.getMinSlidePosition()) {
                nextSlide = position.getMaxSlideIndex();
                slidesArray[nextSlide].position = position.getMinSlidePosition() - 1;
                slidesArray[nextSlide].transform -= slidesArray.length * 100;
                slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
            }
            transformValue += transformStep;
        }

        slidesCollection.style.transitionDuration = '0.5s';
        slidesCollection.style.transform = `translateX(${transformValue}%)`;
    }

    function addEventListeners () {
        slidesCollection.addEventListener('transitionstart', function () {
            isSlideInTransition = true;
        });
        slidesCollection.addEventListener('transitionend', function () {
            isSlideInTransition = false;

            if (Math.abs(position.currentPosition) === slidesArray.length) {
                position.clearCurrentPosition();
                transformValue = 0;
                slidesCollection.style.transitionDuration = '0s';
                slidesCollection.style.transform = '';
                slidesArray.forEach(function (slide, i) {
                    slide.position = i;
                    slide.transform = 0;
                    slide.item.style = '';
                });
            }
        });

        slider.getElementsByClassName('next-button')[0].addEventListener('click', function (e) {
            e.preventDefault();
            if (!isSlideInTransition) {
                switchSlide(slideDirection.next);
            }
            resetAutoplayTimer();
        });

        slider.getElementsByClassName('previous-button')[0].addEventListener('click', function (e) {
            e.preventDefault();
            if (!isSlideInTransition) {
                switchSlide(slideDirection.previous);
            }
            resetAutoplayTimer();
        });

        playpauseButton.addEventListener('click', function (e) {
            e.preventDefault();
            if (playpauseButton.firstChild.classList.contains('pausedState')) {
                playpauseButton.firstChild.classList.remove('pausedState');
                playpauseButton.lastChild.style.display = 'none';
                playSlider();
            } else {
                playpauseButton.firstChild.classList.add('pausedState');
                playpauseButton.lastChild.style.display = 'flex';
                pauseSlider();
            }
        });

        let startX = 0,
            isMousedownOnSlider = false;
        function switchSlideByEvent (endX) {
            const shift = endX - startX;
            if (shift > 10) {
                switchSlide(slideDirection.previous);
            } else if (shift < -10) {
                switchSlide(slideDirection.next);
            }
            resetAutoplayTimer();
        }
        slider.addEventListener('touchstart', function (e) {
            startX = e.changedTouches[0].clientX;
            resetAutoplayTimer();
        });
        slider.addEventListener('touchend', function (e) {
            switchSlideByEvent(e.changedTouches[0].clientX);
        });

        slider.addEventListener('mousedown', function (e) {
            isMousedownOnSlider = true;
            startX = e.clientX;
            resetAutoplayTimer();
        });
        slider.addEventListener('mouseup', function (e) {
            isMousedownOnSlider = false;
            switchSlideByEvent(e.clientX);
        });
        slider.addEventListener('mouseleave', function (e) {
            if (isMousedownOnSlider) {
                isMousedownOnSlider = false;
                switchSlideByEvent(e.clientX);
            }
        });

        if (buttonsVisible) {
            slider.addEventListener('mouseenter', function () {
                playpauseButton.style.display = 'flex';
            });
            slider.addEventListener('mouseleave', function () {
                playpauseButton.style.display = 'none';
            });
        } else {
            const sliderButtons = slider.getElementsByClassName('slider-button');
            sliderButtons.forEach(function (button) {
                button.style.display = 'none';
            });
        }
    }

    addEventListeners();

    function resetAutoplayTimer () {
        if (!autoplayEnabled) {
            return;
        }

        autoplayStop();
        sliderTimerId = setInterval(function () {
            switchSlide(slideDirection.next);
        }, autoplayInterval);
    }

    function autoplayStart () {
        if (!autoplayEnabled) {
            playpauseButton.firstChild.classList.add('pausedState');
            return;
        }
        playpauseButton.lastChild.style.display = 'none';

        resetAutoplayTimer();
    }

    function autoplayStop () {
        clearInterval(sliderTimerId);
    }

    autoplayStart();

    function playSlider () {
        autoplayEnabled = true;
        autoplayStart();
    }
    function pauseSlider () {
        autoplayEnabled = false;
        autoplayStop();
    }

    return {
        play: playSlider,
        pause: pauseSlider,
    };
}

export default imgSlider;
