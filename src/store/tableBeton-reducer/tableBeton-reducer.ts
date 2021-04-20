const initialState = {
    tableBetons: null
}

export const tableBetonReducer = (state: tableBetonInitialStateType = initialState, action: ActionsType): tableBetonInitialStateType => {
    switch (action.type) {
        case 'TABLE_BETON/SET_BETON':
            return {...state, tableBetons: [...state.tableBetons?state.tableBetons:[],action.beton]}

        default:
            return state
    }
}

export const setTableBeton = (beton: TableBetonType) =>
    ({type: 'TABLE_BETON/SET_BETON', beton} as const)



export type TableBetonType =
    { id:string,
        grade: string,
        mobility: string,
        prize: number,
        numberOf: number,
    }


export type tableBetonInitialStateType = {
    tableBetons:TableBetonType[] | null
}

type ActionsType =
    ReturnType<typeof setTableBeton>







