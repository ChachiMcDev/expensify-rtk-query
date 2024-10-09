import filtersSlice from '../slicereducers/filterSlice';
import dayjs from 'dayjs';

const { actions, reducer } = filtersSlice;
const { getFilters, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } = actions;

describe('filtersSlice', () => {
    const initialState = {
        text: '',
        sortBy: 'date',
        startDate: dayjs().startOf('month').valueOf(),
        endDate: dayjs().endOf('month').valueOf()
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle getFilters', () => {
        expect(reducer(initialState, getFilters())).toEqual(initialState);
    });

    it('should handle setTextFilter', () => {
        const text = 'rent';
        const expectedState = { ...initialState, text };
        expect(reducer(initialState, setTextFilter(text))).toEqual(expectedState);
    });

    it('should handle setTextFilter with undefined payload', () => {
        const expectedState = { ...initialState, text: '' };
        expect(reducer(initialState, setTextFilter(undefined))).toEqual(expectedState);
    });

    it('should handle sortByAmount', () => {
        const expectedState = { ...initialState, sortBy: 'amount' };
        expect(reducer(initialState, sortByAmount())).toEqual(expectedState);
    });

    it('should handle sortByDate', () => {
        const modifiedState = { ...initialState, sortBy: 'amount' };
        expect(reducer(modifiedState, sortByDate())).toEqual(initialState);
    });

    it('should handle setStartDate', () => {
        const startDate = dayjs().startOf('year').valueOf();
        const expectedState = { ...initialState, startDate };
        expect(reducer(initialState, setStartDate(startDate))).toEqual(expectedState);
    });

    it('should handle setEndDate', () => {
        const endDate = dayjs().endOf('year').valueOf();
        const expectedState = { ...initialState, endDate };
        expect(reducer(initialState, setEndDate(endDate))).toEqual(expectedState);
    });
});