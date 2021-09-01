// import { createStore } from "redux"

// /**
//  * reducer 
//  */
// import reducer from './reducer'

//     //根据action中的type和data，决定应该怎么操作状态
//     //引入reducer

//     export default createStore(reducer)
import {INCREMENT,DECREMENT} from './action_types'
let initState = 0
//规则 不可以修改传递过来的参数 在reducer中
export default function operaCount(preState=initState,action)
{
    console.log('reducer调用了..........s',action)
    const {type,data}=action
    switch(type){
        case INCREMENT:
            let newstate = preState + data
            return newstate
        case DECREMENT:
            let newstate1 = preState-data
            return newstate1
        case 'incrementifodd':
            let newifodd= preState + data
            return newifodd
        case 'incrementAsync':
            let newAsync= preState + data
            return newAsync
        default:
            return preState
    }
    
}