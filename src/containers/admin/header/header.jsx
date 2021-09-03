import React, { Component } from "react"
import { Menu, Dropdown, Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import './header.less'

export default class Header extends Component {
    render() {
        const menu = (
            <Menu >
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                    <audio>鼓楼</audio>
                </Menu.Item>
               
            </Menu>
            );
        return (
            <header className='header'>
                <div className="header-top">
                    <span className='username'>欢迎来到我的Blog</span>
                    <Button size='small' >
                        <PlayCircleOutlined />
                    </Button>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <Button size='small'>歌曲选择</Button>
                    </Dropdown>
                  

                </div>
                <div className="header-bottom">
                <div className="header-bottom-left">
                    <span>huhaoda</span>
                </div>
                <div className="header-bottom-right">
                    2021-09-03
                    <img src="" alt="" />
                    晴  &nbsp; 温度 2
                    
                </div>

                </div>
            </header>
        )
    }
}