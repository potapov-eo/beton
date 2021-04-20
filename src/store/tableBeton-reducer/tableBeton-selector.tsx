import {AppRootStateType} from "../store";
import {TableBetonType} from "./tableBeton-reducer";


export const selectorTableBetons = (state: AppRootStateType): TableBetonType[]|null => state.tableBeton.tableBetons

