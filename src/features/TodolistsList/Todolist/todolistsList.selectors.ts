import { AppRootStateType } from "app/store";

export const selectTodolists = (state: AppRootStateType) => state.todolists
export const selectTasksts = (state: AppRootStateType) => state.tasks
