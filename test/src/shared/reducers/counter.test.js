import reducer from '../../../../src/shared/reducers/counter';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        count: 0
    })
  })
})
