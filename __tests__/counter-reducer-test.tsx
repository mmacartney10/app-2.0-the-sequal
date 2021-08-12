import counterReducer, { decrement, increment, incrementByAmount, initialState } from 'counter-reducer';

test('Should return the initial state', () => {

    const expectedResult = {
        value: 0
    }

    expect(counterReducer(initialState, {})).toEqual(expectedResult);
});

test('Should return -1 when decrement is passed', () => {

    const expectedResult = {
        value: -1
    }

    expect(counterReducer(initialState, decrement())).toEqual(expectedResult);
});

test('Should return 1 when increment is passed', () => {

    const expectedResult = {
        value: 1
    }

    expect(counterReducer(initialState, increment())).toEqual(expectedResult);
});

test('Should return 5 when 5 is passed to incrementByAmount', () => {

    const expectedResult = {
        value: 5
    }

    expect(counterReducer(initialState, incrementByAmount(5))).toEqual(expectedResult);
});
