import { combineReducers } from 'redux'
import user from './user'
import home from './home'
import cate from './cate'

export default combineReducers({
  user,
  home,
  cate
})
