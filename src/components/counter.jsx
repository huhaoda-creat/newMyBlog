import React,{Component} from "react";

export default class Couter extends Component{
   componentDidMount(){
       console.log(this.props)
   }
    increment=()=>{
        let {value} =this.refs.selectNumber
        // let count = this.props.store.getState()
        // this.props.store.dispatch({type:'increment',data:value*1})
    }
    decrement=()=>{
        let {value} =this.refs.selectNumber
        // let {count} = this.state
        // this.props.store.dispatch(createDecrementAction(value*1))
        // this.setState({count:count-value*1})
    }
    incrementifodd=()=>{
        let {value} =this.refs.selectNumber
        // let count =this.props.store.getState()
        // let {count} = this.state
        // if(count % 2 === 1){
        //     this.props.store.dispatch(createIncrementAction(value*1))
            
            
        // }
    }
    incrementAsync=()=>{
        let {value} =this.refs.selectNumber
        // let {count} = this.state
        setTimeout(() => {
        //    this.props.store.dispatch(createIncrementAction(value*1))
        // this.setState({count:count+value*1})
       },1000);
    }
    render(){
        // let{count}=this.state
        // let count = this.props.store.getState()
        return(
            <div> 
                <h3>当前计数为xxx</h3>
                <select  ref='selectNumber'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementifodd}>increment if</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
            </div>
        )
    }
}