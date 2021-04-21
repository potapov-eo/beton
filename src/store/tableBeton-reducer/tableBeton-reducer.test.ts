import {
    changeTableBetonProperty,
    removeTableBeton,
    setTableBeton,
    tableBetonInitialStateType,
    tableBetonReducer
} from "./tableBeton-reducer";

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
                id: "1",
                grade: "1",
                mobility: "1",
                prize: 1,
                numberOf: 1,
            }, {
                id: "2",
                grade: "2",
                mobility: "2",
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
test('correct property should be added', () => {
    const property = {grade:"777"}
    const  id = "1"

    const action = changeTableBetonProperty(id,property);

    const endState = tableBetonReducer(startState, action)

    expect(endState).toEqual(
        {
            tableBetons: [{
                id: "1",
                grade: "777",
                mobility: "1",
                prize: 1,
                numberOf: 1,
            },]
        })
})