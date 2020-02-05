import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route} from 'react-router-dom'
import '../static/css/mainIndex.css'
import AddArtical from '../pages/addArtical'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MainIndex(){
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed)
  };
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >Blog System</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>写博客</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route path="/" component={AddArtical} exact></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Blog System ©2020 Created by Hui_young</Footer>
        </Layout>
      </Layout>
    );
}
export default MainIndex;