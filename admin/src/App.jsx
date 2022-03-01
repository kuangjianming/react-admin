import logo from './logo.svg';
import './App.css';
 import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Header, Sider, Content } = Layout;
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      menu:[{
        path:'/home',
        text:'首页',
      },{
        path:'/login',
        text:'登录',
      }]
    }
  }
  
  render(){
    // const menu=[{}]
    return (
        <div>app</div>
      )
  } 
}

export default App;
