import React,{Component} from "react"
import {connect} from 'react-redux'
import {createDemo1Action} from '../../redux/actions/test_action'
export default class Admin extends Component{
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div>Admin</div>
        )
    }
}
connect(
    state =>({peiqi:state.test}),
    {
        demo1:createDemo1Action
    }
)(Admin)