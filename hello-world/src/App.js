// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import InLine from './components/InLine';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
import React, {Component} from 'react';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter2 from './components/Counter2';
// import PureComp from './components/PureComp';


class App extends Component{
  render(){
    return(
      <div className="App">

        

        {/* <Counter2 render = {(count, incrementCount) => (<ClickCounterTwo count = {count} incrementCount = {incrementCount} />)} />

        <Counter2 render = {(count, incrementCount) => (<HoverCounterTwo count = {count} incrementCount = {incrementCount} />)} /> */}

        {/* <ClickCounterTwo />

        <HoverCounterTwo />

        <User name = {(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'} /> */}

        {/* <ClickCounter name='Vishwas'/> */}

        {/* <HoverCounter /> */}

        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
          </ErrorBoundary> */}
        
      </div>
    )
  }
}

export default App;
