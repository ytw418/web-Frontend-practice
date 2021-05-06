'use strict';
import styles from './style.css';
import nextButtonIcon from '../icons/nextButton.svg';
import previousButtonIcon from '../icons/previousButton.svg';
import pauseButtonIcon from '../icons/pauseButton.svg';
import playButtonIcon from '../icons/playButton.svg';

function createSliderLayout (sliderId) {
    const sliderContainer = document.getElementById(sliderId),
        imgElements = Array.prototype.slice.call(sliderContainer.children);

    if (imgElements.length === 0) {
        return;
    }

    const slidesCollection = document.createElement('div');
    slidesCollection.classList.add(styles.slidesCollection);

    imgElements.forEach(function (element) {
        if (element.tagName === 'IMG') {
            element.classList.add(styles.slideImage);
            element.setAttribute('draggable', 'false');

            const singleSlideContainer = document.createElement('div');
            singleSlideContainer.classList.add(styles.singleSlide);
            singleSlideContainer.appendChild(element);

            slidesCollection.appendChild(singleSlideContainer);
        } else {
            element.classList.add(styles.singleSlide);

            slidesCollection.appendChild(element);
        }
    });

    sliderContainer.appendChild(slidesCollection);
    sliderContainer.classList.add(styles.slider);

    const nextButton = document.createElement('a');
    nextButton.classList.add(styles.nextButton);
    nextButton.classList.add(styles.sliderButton);
    nextButton.innerHTML = nextButtonIcon;
    nextButton.href = '#';
    const previousButton = document.createElement('a');
    previousButton.classList.add(styles.previousButton);
    previousButton.classList.add(styles.sliderButton);
    previousButton.innerHTML = previousButtonIcon;
    previousButton.href = '#';
    const playpauseButton = document.createElement('a');
    playpauseButton.classList.add(styles.playpauseButton);
    playpauseButton.classList.add(styles.sliderButton);
    playpauseButton.innerHTML = pauseButtonIcon + playButtonIcon;
    playpauseButton.href = '#';

    sliderContainer.appendChild(previousButton);
    sliderContainer.appendChild(nextButton);
    sliderContainer.appendChild(playpauseButton);
}

export default createSliderLayout;
