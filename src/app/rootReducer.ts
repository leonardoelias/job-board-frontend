import todos from "features/example"
import accountAuth from "features/account-auth"
import { combineReducers, Action } from "@reduxjs/toolkit"
import { TOKEN_NAME } from "settings"

const appReducer = combineReducers({
  todos,
  accountAuth,
})
export const rootReducer = (state: any, action: Action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    localStorage.removeItem(TOKEN_NAME)
    state = undefined
  }
  return appReducer(state, action)
}
