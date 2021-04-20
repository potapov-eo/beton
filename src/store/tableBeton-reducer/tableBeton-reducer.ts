const initialState = {
    tableBetons: null
}

export const tableBetonReducer = (state: tableBetonInitialStateType = initialState, action: ActionsType): tableBetonInitialStateType => {
    switch (action.type) {
        case 'TABLE_BETON/SET_BETON':
            return {...state, tableBetons: [...state.tableBetons?state.tableBetons:[],action.beton]}
        case 'TABLE_BETON/REMOVE_BETON':
            return {...state, tableBetons: state.tableBetons? state.tableBetons.filter(bet=>bet.id!==action.id):null}

        default:
            return state
    }
}

export const setTableBeton = (beton: TableBetonType) =>
    ({type: 'TABLE_BETON/SET_BETON', beton} as const)
export const removeTableBeton = (id: string) =>
    ({type: 'TABLE_BETON/REMOVE_BETON', id} as const)



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
    ReturnType<typeof setTableBeton>|
    ReturnType<typeof removeTableBeton>







