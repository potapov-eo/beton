import {removeTableBeton, setTableBeton, tableBetonInitialStateType, tableBetonReducer} from "./tableBeton-reducer";

let startState: tableBetonInitialStateType


beforeEach(() => {
    startState = {
        tableBetons: [{
            id: "1",
            grade: "1",
            mobility: "1",
            prize: 1,
            numberOf: 1,
        }]
    }

});

test('correct beton should be added', () => {
    const beton = {
        id: "2",
        grade: "2",
        mobility: "2",
        prize: 2,
        numberOf: 2,
    }
    const action = setTableBeton(beton);

    const endState = tableBetonReducer(startState, action)

    expect(endState).toEqual(
        {
            tableBetons: [{
                grade: 1,
                mobility: 1,
                prize: 1,
                numberOf: 1,
            }, {
                grade: 2,
                mobility: 2,
                prize: 2,
                numberOf: 2,
            }]
        })
})
test('correct remove beton should be added', () => {

    const action = removeTableBeton("1");

    const endState = tableBetonReducer(startState, action)

    expect(endState).toEqual(
        {
            tableBetons: []
        })
})