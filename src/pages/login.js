import React, { useState } from 'react';
import {Button, Spin, Card, Input, Icon} from 'antd'
import 'antd/dist/antd.css';
import '../static/css/login.css'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },1000)
    }
    return(
        <div className="login-div">
            <Spin tip="Loading..." spinning={loading}>
              <Card bordered={true} title="Blog System" style={{width: 400}}>
                <Input 
                  id="username"
                  size="large"
                  placeholder="enter your username"
                  prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
                  onChange={(e)=>{setUsername(e.target.value)}}
                />
                <br/><br/>
                <Input.Password
                  id="password"
                  size="large"
                  placeholder="enter your password"
                  prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <br/><br/>
                <Button type="primary" size="large" block onClick={handleSubmit}>Login in</Button>


                </Card>

            </Spin>

        </div>
    )
}
export default Login