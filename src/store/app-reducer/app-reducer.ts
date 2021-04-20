const initialState = {
    status: 'succeeded' as RequestStatusType,
    error: null as string|null,

}

export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, error: action.error}

        default:
            return state
    }
}

export const setAppStatus = (status: RequestStatusType) =>
    ({type: 'APP/SET_STATUS', status} as const)
export const setAppError = (error: string | null) =>
    ({type: 'APP/SET_ERROR', error} as const)


/*
export const getDoctors = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const res = await getEmployees() as Array<EmployeeType>
        dispatch(setAppStatus('succeeded'))
        dispatch(setEmployees(res))

    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError("Error from response"))
    }
}
*/


export type RequestStatusType = 'succeeded' | 'loading'

export type AppInitialStateType = typeof initialState

type ActionsType =
    ReturnType<typeof setAppStatus> |
    ReturnType<typeof setAppError>







