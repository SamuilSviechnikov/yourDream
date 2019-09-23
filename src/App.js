import React from 'react';
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ThingsDetails from './components/things/ThingsDetailes';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateThings from './components/things/CreateThings';
import Slider from './components/things/slider/Slider';
import Footer from './components/things/footer/Footer';
import Shop from './components/things/shop/Shop';
import Notifications from './components/things/notifications/Notifications';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Switch>
        <Route exact path='/'component={Dashboard} />
        <Route path='/project/:id' component={ThingsDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateThings} />
        <Route path='/shop' component={Shop} />
        <Route path='/notification' component={Notifications} />
      </Switch>
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
