import React, { Component } from "react"
import { connect } from 'react-redux'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';
import { createDemo1Action } from '../../redux/actions/test_action'
import Mainn from '../main/main'
import Header from './header/header'
import './admin.less'
import Homepage from '../homepage/homepage'
import Article from '../article/article'
import About from '../about/about'
import Resource from '../resource/resource'
const { Footer, Sider, Content } = Layout
export default class Admin extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (

            <Layout className='adminContent'>
                <Sider className='Sider'>Sider</Sider>
                <Layout>
                    <Header className='Header'>Header</Header>
                    <Content className='Content'>
                        <Switch>
                            <Route path='/admin/homepage' component={Homepage}/>
                            <Route path='/admin/article' component={Article}/>
                            <Route path='/admin/about' component={About}/>
                            <Route path='/admin/resource' component={Resource}/>
                            <Redirect to='/admin/homepage'/>
                        </Switch>
                    </Content>
                    <Footer className='Footer'>
                        命运总是不如人愿。但往往是在无数的痛苦中,在重重的矛盾和艰辛中,才使人成熟起来。
                    </Footer>
                </Layout>
            </Layout>

        )
    }
}
// connect(
//     state =>({peiqi:state.test}),
//     {
//         demo1:createDemo1Action
//     }
// )(Admin)