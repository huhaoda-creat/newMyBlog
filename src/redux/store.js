import {createStore} from 'redux'//创建组核心的store对象

import reducer from './reducer'
 
export default createStore(reducer)