
import { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from "./containers/login/login"
import Admin from "./containers/admin/admin"
import Main from "./containers/main/main"
class App extends Component {
  render(){
    return (
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}  exact/>
          <Route path='/admin' component={Admin} />
          <Route path='/admin/main' component={Main} />
        </Switch>
      </div>
  );
}
}
export default App;
