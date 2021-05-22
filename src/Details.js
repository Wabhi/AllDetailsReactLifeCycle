// import React,{Component} from "react"
// export default class Details extends Component{
//   render(){
//     return(
//       <>

//       </>
//     )
//   }
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>All About classComponent lifeCycle method.
// Each component has several lifeCycle methods that you can override to run code at particular times in the process.
// and another word you can tell,each component has lifeCycle methods so that you can monitor and manipulate the component
// at particular times in the process.
// 1.Intialize phase====>This is the stage where the component is constructed with the given Props and default state.
// This is done in the constructor of a Component Class.

// 2.Mounting====>These methods are called in the following order when an instance of a component,
// is being created and inserted into the DOM.
//         a)constructor()
//         //constructor is use for only two propuse 1.to define local state,by using this keyword 2.to bind event handler
//         expl=> this.state={name:'abhishek',address:'banglore'}
//         expl=> this.handleClick = this.handleClick.bind(this)
//         (if you don't Intialize state and you don't bind the methods/events,you don't need to use constructor in react component)

//         b)static getDerivedStateFromProps()
//         //The getDerivedStateFromProps() method is used when the state of a component depends on changes of props.
//         //getDerivedStateFromProps(props, state) is a static method that is called just before render() method in both mounting and updating phase in React.
//         //It takes updated props and the current state as arguments.We have to return an object to update state or null to indicate that nothing has changed.
//         expl=>static getDerivedStateFromProps(props, state)

//         c)render()
//         //this method is required only for class Component.When called, it should examine this.props and this.state and return one of the following types.
//         //boolean or null,string or number,react element ,array and fragment.

//         d)componentDidMount()
//         //Imediatly call after when a component is mounted or you can say component inserted into dom.
//         //after this method,render() method again call.
//         //The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model).
//         //This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
//         //All the AJAX requests and the DOM or state updation should be coded in the componentDidMount() method block.
//         //We can also set up all the major subscriptions here but to avoid any performance issues, always remember to unsubscribe them in the componentWillUnmount() method.
//         //it will run only one time..

// 3.Updating====>An update can be caused by changes to props or state or forceUpdate.
// These methods are called in the following order when a component is being re-rendered.
//         a)static getDerivedStateFromProps()
//         b)shouldComponentUpdate()
//         //shouldComponentUpdate is use for optimization,it perevent from re-rendering.by default it gives true value
//         //shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true.
//         //This method is not called for the initial render or when forceUpdate() is used.A snapshot value (or null) should be returned.
//         expl=>shouldComponentUpdate(nextProps, nextState)
//         getSnapshotBeforeUpdate(prevProps, prevState)

//         c)render()
//         d)getSnapshotBeforeUpdate()
//          //In the getSnapshotBeforeUpdate() method you have access to the props and state before the update,
//          //meaning that even after the update, you can check what the values were before the update.
//          //If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
//          expl=>e.g. scroll position
//          getSnapshotBeforeUpdate(preProps,prevState)

//         e)componentDidUpdate()
//         //is invoked immediately after updating occurs.This method is not called for the initial render.
//         //componentDidUpdate(prevProps, prevState, snapshot)

// 4.Error Handling====>These methods are called when there is an error during rendering,
// in a lifecycle method, or in the constructor of any child component.
//         a)static getDerivedStateFromError()
//         b)componentDidCatch()

// 5.Unmounting====>This method is called when a component is being removed from the DOM.
//         a)componentWillUnmount()
//         //this method will call before a component Unmounted or destroyed.
//         //perform any neccessary clean-up,like clean up any subscriptions,clean up setTimeInterval,canceling newtork requests

// App.js=>
// import React,{Component} from "react";
// // import Student from "./Student"
// import Marks from "./Marks"
// import Counter from "./Counter"
// import "./style.css";
// export default class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       roll:10
//     }
//   }
//   handleClick = ()=>{
//     this.setState({
//       roll:this.state.roll+2
//     })
//   }
//   render(){
//     return(
//       <div>
//          <h1>REACT LIFE CYCLE PHASE AND METHODS</h1>
//          {/* <Student name="avinash"/> */}
//          {/* <Counter /> */}
//          <h1>ROLL NUMBER - {this.state.roll}</h1>
//          <button onClick={this.handleClick}>INCREMENT ROLL</button>
//          <Marks myRoll={this.state.roll}/>
//       </div>
//     )
//   }
// }
// Student.js=>
// import React, { Component } from 'react';
// export default class Student extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'Abhishek'
//     };
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (props.name !== state.name) {
//       console.log('getDrivedStateFromProps is calling...');
//       console.log(props, state);
//       return {
//         name: props.name
//       };
//     }
//     return null;
//   }
//   render() {
//     console.log('render is calling...');
//     return (
//       <div>
//         <h1>Hello {this.props.name}</h1>
//       </div>
//     );
//   }
// }
// Counter.js=>
// import React,{Component} from "react"
// export default class Counter extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       counter : 0
//     }
//   }
//   componentDidMount(){
//     console.log('componentDidMount is calling...')
//     this.timeInterval = setInterval(()=>{
//        this.setState({counter:this.state.counter+1})
//     },4000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.timeInterval)
//     console.log('componentWillUnmount is calling...')
//   }
//   render(){
//     console.log('render is calling....')
//     return(
//       <h1>{this.state.counter}</h1>
//     )
//   }
// }
// Marks.js=>
// import React, { Component } from 'react';
// export default class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mroll: this.props.myRoll
//     };
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (props.myRoll !== state.mroll) {
//       console.log(props, state);
//       console.log('getDerivedStateFromProps is calling....');
//       return {
//         mroll: props.myRoll
//       };
//     }
//     return null;
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.state.mroll < 16) {
//       console.log('shouldComponentUpdate is calling...');
//       return true;
//     }
//     return false;
//   }
//   getSnapshotBeforeUpdate(prevProps,prevState){
//     console.log('getSnapshotBeforeUpdate is calling....')
//     return 101
//   }
//   componentDidUpdate(prevProps,prevState,snapshot){
//     console.log('componentDidUpdate is calling....')
//     console.log(snapshot)
//   }
//   render() {
//     console.log('I am render....');
//     return (
//       <div>
//         <h1>ROLL NUMBER - {this.state.mroll}</h1>
//       </div>
//     );
//   }
// }
