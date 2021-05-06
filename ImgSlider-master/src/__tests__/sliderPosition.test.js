const SliderPosition = require('../sliderPosition');

describe('Slider position module.', () => {
    let slidesArray = [],
        position = new SliderPosition(slidesArray);

    beforeEach(() => {
        slidesArray = [
            { item: {}, position: 0, transform: 0 },
            { item: {}, position: 1, transform: 0 },
            { item: {}, position: 2, transform: 0 },
            { item: {}, position: -2, transform: 0 },
            { item: {}, position: -1, transform: 0 },
        ];

        position = new SliderPosition(slidesArray);
    });

    test('Returns current position of displayed slide.', () => {
        expect(position.currentPosition).toBe(0);
    });

    test('Increments current position for switching slide forward.', () => {
        position.nextCurrentPosition();

        expect(position.currentPosition).toBe(1);
    });

    test('Decrements current position for switching slide backward.', () => {
        position.prevCurrentPosition();

        expect(position.currentPosition).toBe(-1);
    });

    test('Returns index of slide with minimal position.', () => {
        expect(position.getMinSlideIndex()).toBe(3);
    });

    test('Returns index of slide with maximal position.', () => {
        expect(position.getMaxSlideIndex()).toBe(2);
    });

    test('Returns minimal position among all slides.', () => {
        expect(position.getMinSlidePosition()).toBe(-2);
    });

    test('Returns maximal position among all slides.', () => {
        expect(position.getMaxSlidePosition()).toBe(2);
    });
});
