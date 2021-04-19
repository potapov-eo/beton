import {AppRootStateType} from "../store";
import {RequestStatusType} from "./app-reducer";


export const selectorStatus = (state: AppRootStateType): RequestStatusType => state.app.status
export const selectorError = (state: AppRootStateType): string | null => state.app.error
