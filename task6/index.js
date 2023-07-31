// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
// import Home from './Home';
// import Phone from './About';
// import Join from './Joinus';

// import Header1 from "./color";

// const routing = (
//     <Router>
//         <div>
//             <h1>Hello</h1>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/about" element={<Phone/>} />
//                 <Route path="/joinus" element={<Join/>} />
//             </Routes>
//         </div>
//     </Router>
// )

// ReactDOM.render(routing,document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import Task3 from "./task3";
// import Anime from './Home';
// import Tablecreation from "./EFFECT HOOKS.JS";
// ReactDOM.render(<Anime/>,document.getElementById("root"));
// // class demo{
// //     method(x){
// //         var n,re,s=0;
// //         while(n){
// //             re=n%10;
// //             s=s+re;
// //             n=Math.floor(n/10);
// //         }
// //         document.getElementById("root").innerHTML=s;
// //     }
// // }

// // import Reactform from './tasko';
// // ReactDOM.render(<Reactform/>,document.getElementById("root"));
// import ValidForm from './tasko';
// ReactDOM.render(<ValidForm/>,document.getElementById('root'));
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class ReactForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       sport: [],
//       name: '',
//       phoneNumber: '',
//       address: '',
//       fees: 0,
//       reference: '',
//       totalAmount: 0,
//       errmsg: '',
//     };
//   }

//   handleSportChange = (event) => {
//     const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
//     this.setState({ sport: selectedOptions });
//     const totalAmount = selectedOptions.length * 500;
//     this.setState({ totalAmount });
//     const fees = selectedOptions.length * 1000;
//     this.setState({ fees });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Selected Sports:', this.state.sport);
//     console.log('Name:', this.state.name);
//     console.log('Phone Number:', this.state.phoneNumber);
//     console.log('Address:', this.state.address);
//     console.log('Fees:', this.state.fees);
//     console.log('Reference:', this.state.reference);
//     console.log('Total Amount:', this.state.totalAmount);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <br></br>
//         <br></br>
        
//         <div >
//            <center> <h1>Sport Registration</h1></center>
//           <label htmlFor="sport">Select Sports:</label>
//           <select
//             id="sport"
//             name="sport"
//             required
//             multiple
//             value={this.state.sport}
//             onChange={this.handleSportChange}
//           >
//             <option value="football">Football</option>
//             <option value="basketball">Basketball</option>
//             <option value="volleyball">Volleyball</option>
//             <option value="tennis">Tennis</option>
//             <option value="swimming">Swimming</option>
//             <option value="cricket">Cricket</option>
//             <option value="handball">Handball</option>
//             <option value="hockey">Hockey</option>
//           </select>
//         </div>
//         <br></br>
//         <br></br>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={this.state.name}
//             onChange={(e) => this.setState({ name: e.target.value })}
//             required
//           />
//         </div>
//         <br></br>
//         <br></br>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={this.state.phoneNumber}
//             onChange={(e) => this.setState({ phoneNumber: e.target.value })}
//             required
//           />
//         </div>
//         <br></br>
//         <br></br>
//         <div>
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             id="address"
//             value={this.state.address}
//             onChange={(e) => this.setState({ address: e.target.value })}
//             required
//           />
//         </div>
//         <br></br>
//         <br></br>
//         <div>
//           <label htmlFor="fees">Fees:</label>
//           <input type="number" id="fees" value={this.state.fees} />
//         </div>
//         <br></br>
//         <br></br>
//         <div>
//           <label htmlFor="reference">Reference:</label>
//           <input
//             type="text"
//             id="reference"
//             value={this.state.reference}
//             onChange={(e) => this.setState({ reference: e.target.value })}
//           />
//         </div>
//         <br></br>
//         <br></br>
//         <div>
//           <label htmlFor="totalAmount">Total Amount:</label>
//           <input type="number" id="totalAmount" value={this.state.totalAmount} />
//         </div>
//         <br></br>
//         <br></br>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<ReactForm />, document.getElementById('root'));
// import React from "react"
// import ReactDOM from "react-dom"
// class Tablecreation extends React.Component{
//   render(){
//     return(
//     <table>
//       <tr><Rowcreation/></tr>
//     </table>
//     )
//   }
// }
// class Rowcreation extends React.Component{
//   render(){
//     return(
//       <React.Fragment>
//         <td>SELVA</td>
//         <td>RASAN</td>
//         </React.Fragment>
//     )
//   }
// }
// ReactDOM.render(<Rowcreation/>,document.getElementById("root"));
// import {BrowserRouter as Router,Route,link,NavLink,Switch}
// import Home from'./Home';
// import About from'./About';
// import Joinus from'./Joinus';
// const routing=(<Router>
//     <div>
//         <h1>
//             Hello
//         </h1>
//         <Router>
//             <Router path="/" component={Home}/>
//         </Router>
//     </div>
// </Router>)


// ReactDOM.render(<Header1 favcol="black"/>,document.getElementById("root"));

ReactDOM.render(<Task3/>,document.getElementById("root"));