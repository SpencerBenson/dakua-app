import React  from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';

  class NavBar extends React.Component {
    state = {
      current: 'mail',
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({ current: e.key });
    };
  
    render() {
      const { current } = this.state;
      return (
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
          

          <Link to="/login" className="brand-logo">Dakua</Link>
          <Menu.Item key="mail" class="right-alligned">
          
          <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="app"  class="right-alligned">
            <Link to="/signup">Sign up</Link>
          </Menu.Item>
           <Menu.Item key="alipay"  class="right-alligned">
           <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      );
    }
  }
export default NavBar
