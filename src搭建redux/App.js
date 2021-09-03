
import { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from "./containers/login/login"
import Admin from "./containers/admin/admin"
class App extends Component {
  render(){
    return (
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}  exact/>
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
  );
}
}
export default App;
