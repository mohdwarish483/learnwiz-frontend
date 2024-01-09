//===============================================//



// ================= what does a browser do ? 
/*

 a browser is a software listening request coming at port number and then send it to other port , it sends the request and receive it back from web server that may or may not have database;

*/
/*
// Here are some key concepts and points to note about Redux:

State: In Redux, the entire state of your application is stored in a single JavaScript object. This state is immutable, meaning it cannot be changed directly. Instead, you dispatch actions to describe state changes.

Actions: Actions are plain JavaScript objects that describe an intention to change the state. They must have a type property that indicates the type of action being performed. For example:

//example action object :
{
  type: 'INCREMENT_COUNTER',
  payload: 1
}

// Reducers: Reducers are pure functions that take the current state and an action as arguments, and return the new state. They specify how the application's state should change in response to an action. A reducer should never modify the existing state, but return a new state object.

// example of reducer function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + action.payload;
    case 'DECREMENT_COUNTER':
      return state - action.payload;
    default:
      return state;
  }
}

// Store: The store is the heart of Redux. It holds the state, allows you to dispatch actions, 
// it provides a centralise way to access the state by all components in ur application reducing the props driling at multiple level 
 // You can create the store by passing a reducer to it (or a combination of reducers) using configureStore().

// example :
import { configureStore } from 'redux';
const store = configureStore(counterReducer);

// Dispatching Actions: Actions are dispatched to the store using store.dispatch(). 
// This is how you trigger state changes in your application.
// example:
 store.dispatch({ type: 'INCREMENT_COUNTER', payload: 1 });
 

// Middleware: Redux middleware provides a way to interact with actions before they reach the reducer. This is useful for tasks like logging, asynchronous actions, etc.

// Selectors: Selectors are functions that extract specific pieces of information from the Redux store. They help in keeping the component logic clean and provide a centralized way to access the state.

// Immutability: It's crucial to maintain immutability when working with Redux. This means not modifying the state directly, but instead creating a new state object with the necessary changes.

// Actions and Action Creators: Action creators are functions that create and return action objects. They help encapsulate the process of creating actions, making it easier to dispatch them from components.

// example :
function incrementCounter(payload) {
  return {
    type: 'INCREMENT_COUNTER',
    payload
  };
}

*/

//===============================================//

/*

// redux toolkit library using all these concepts in a modern way

// In Redux, useDispatch() is a hook provided by the react-redux library that allows functional components to dispatch actions to the Redux store. 

// When you call useDispatch(), it returns a reference to the dispatch function.
 eg. 

import { useDispatch } from 'react-redux';

function MyComponent() {
  const dispatch = useDispatch(); // dispatch is a reference of a function 

  // handleClick is also reference to a varibale
  const handleClick = () => { 
    dispatch({ type: 'INCREMENT_COUNTER', payload: 1 });
  };

  return (
    <button onClick={handleClick}>
      Increment Counter
    </button>
  );
}

*/

//===============================================//
/*

// useSelector():  is another hook provided by the react-redux library in Redux. 
// It allows functional components to extract and read data from the Redux store.

// eg:
import { useSelector } from 'react-redux';

function MyComponent() {
  const selecterCallback = (state)=>{
    return state.counter;
  }  
  const counter = useSelector(selecterCallback);

  return (
    <div>
      <p>Counter Value: {counter}</p>
    </div>
  );
}


// In this example, useSelector is called with a function that takes the entire Redux state as an argument and returns the specific piece of state you're interested in. In this case, it's extracting the counter value from the Redux state.

// The returned value (counter) will automatically update whenever the relevant piece of state changes in the Redux store.
   This means that if the counter value changes due to some action being dispatched, the component will re-render to reflect the updated value.

// Purpuse : useSelector is particularly useful for avoiding prop drilling (passing down state as props through multiple levels of components) and for selecting specific pieces of state to use in a component.


*/
//===============================================//
/*

// Creating a Slice with createSlice();

// A slice is a small piece or part of the whole Redux state and a set of related actions. 
// createSlice() combines the reducer and action creators for a given slice of your Redux state.

example : 
const slice = createSlice({
  name: 'sliceName',         // The name of the slice (required).
  initialState: any,    // The initial state of the slice (can be any JavaScript value).
  reducers: object,     // An object containing reducer functions (actions,state).
});

// createSlice automatically creates action creators whose name is same as that of reducers in the reducer object.
// the type of each action need not to be mention , its same as that of action creator name or reducer name;

example :

// combineReducers();
// it combines the multiple reducers and slices managed by them into a single rootReducer managing entire redux state object. 
// these slices are accessed by the keys holding thier reducers 

// const rootReducer = combineReducers({
  sliceKey: reducerFunction,
  // ... additional slices and reducers
});

// configureStore();
it configure the all reducers in the redux store and returns a store
// configureStore({
  reducer: rootReducer,  // The combined reducer function.
  middleware?: Array,    // Middleware to enhance the store's capabilities (optional).
  devTools?: boolean,     // Enable Redux DevTools extension integration (optional).
  preloadedState?: any,   // The initial state of the store (optional).
  enhancers?: Array,      // Additional enhancers (optional).
});

// redux Provider();

// When you wrap your root component with Provider and pass the Redux store as a prop, 
// it makes the store available to all components in your application , regardless of how deeply they are nested in the component tree.

// This allows you to dispatch actions and access state values without having to pass down props manually through multiple levels of components (prop drilling).

//============================================================//

// example of reduxStore with and without createSLices

// // userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userData',
  initialState: {
    name: 'John Doe',
    email: 'john@example.com'
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { changeName, changeEmail } = userSlice.actions;
export default userSlice.reducer; // this will give all the reducers in the create slices.


// // counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterData',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// // rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

export default rootReducer;

// // store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;


// // App.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeEmail } from './userSlice';
import { increment, decrement, incrementByAmount } from './counterSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => dispatch(changeName('Jane Doe'))}>Change Name</button>
      <button onClick={() => dispatch(changeEmail('jane@example.com'))}>Change Email</button>

      <h2>Counter</h2>
      <p>Count: {counter.count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default App;

//=========================================// 
provider and rendering the application
// // index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


//===============================================//

// difference betweeen the keys in createSLice and createReducer()

// in createReducer({},{loginRequest:state => state.count = action.payload}), loginRequest is an action type , here action creators are created manually ,and when an action of tyype loginRequest is disptached it will exucte the action handler (reducer) associated with each type;
// in createSlice({},reducers:{loginRequest:state => state.count = action.payload});
// here loginRequest is a reducer which handles the type of action matching with its name;
// createSlides automatically creates action types whose type is slice name and reducer name, it will automatically generates action crators whose name is same as that of reducer name;

*/
//===============================================//
/*
// Inheritance :
inharitance is a fundamental concept in object-oriented programming (OOP) that allows one class (called the subclass or child class) to inherit the attributes and behaviors (methods and properties) of another class (called the superclass or parent class).
Purpuse: This enables code reuse and the creation of hierarchical relationships between classes.

// Abstraction:

Definition: Abstraction is the process of simplifying complex reality by modeling classes based on the essential properties and behaviors they share.
Purpose: It hides the complex, non-essential details and exposes only what's necessary for interaction.
Example: In a car, you don't need to know how the engine works internally to drive it; you interact with it through abstract concepts like the gas pedal, brake, and steering wheel.

// Encapsulation:

Definition: Encapsulation is the bundling of data (attributes) and methods (functions) that operate on that data into a single unit called a class.
Purpose: It restricts direct access to some of an object's components, providing a way to control the modification of data and the internal functionality of a class.
Example: A class representing a bank account encapsulates the account balance and methods like deposit and withdraw to control changes to the balance.

// Polymorphism:

Definition: Polymorphism is the ability of different classes to be treated as instances of the same class through a shared interface (method names).
Purpose: It allows you to write more flexible and generic code by working with objects based on their common behaviors, not their specific types.
Example: A program can work with different types of animals (e.g., dogs, cats, birds) using a common "makeSound" method. Each animal class overrides this method to produce its unique sound.

// Function Overriding (Polymorphism):

Definition: Function overriding is a form of polymorphism where a subclass provides a specific implementation of a method that is already defined in its superclass.
Purpose: It allows a subclass to provide a specialized version of a method that's inherited from its superclass, adapting it to its own requirements.
Example: Inheritance in OOP often involves function overriding. For instance, a "Vehicle" class might have a "startEngine" method, and a "Car" subclass overrides this method to include additional steps specific to starting a car's engine.

// In summary, abstraction simplifies complex systems, encapsulation bundles data and methods into classes for controlled access, polymorphism allows objects of different types to be treated as instances of a common class, and function overriding is a form of polymorphism that enables specialized implementations of inherited methods.

 */

//===============================================//

/*
// Axios vs Fetch api:

// Axios : is a library that provides a simple and easy-to-use API for making HTTP requests. It's commonly used in both the browser and Node.js environments.
// Ease of Use: 
   Axios provides a high-level API with built-in features like handling request and response interceptors, handling request cancellations, and more.
// Promise-Based: 
   Axios uses Promises for handling asynchronous code, making it easy to work with async/await.
// Error Handling:
   Axios automatically rejects the Promise when it encounters an error response (status code other than 2xx).
// Interceptors:
   Axios allows you to intercept both requests and responses, which can be useful for tasks like authentication, logging, or modifying data.
// Browser and Node.js Support:
 Axios can be used in both browser-based JavaScript and Node.js environments.



 //=======================================//
// example post request

 const axios = require('axios');

// Define the data to be sent in the POST request
const postData = {
  title: 'Sample Title',
  body: 'This is the body of the post',
  userId: 1
};

// Make a POST request using Axios
axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//========================================//

// fetch api 

/*
// Native Browser Feature:
 The Fetch API is a native JavaScript feature for making HTTP requests, primarily in web browsers. It does not require any external libraries.

 // Promise-Based:
 Similar to Axios, Fetch returns a Promise which resolves to the response to that request.

 //Low-Level API:
   Fetch is considered a lower-level API compared to Axios. It doesn't have built-in features like interceptors, so you may need to manually handle certain tasks.

//   Error Handling:
     Unlike Axios, Fetch does not automatically reject the Promise for non-2xx status codes. It only rejects the Promise for network errors or other issues.

    // Example with Fetch: 

//========================================//

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));

   */

//===============================================//

// differnce between get library vs fetch function
/*

// Axios:

// In the Axios example, we first import the Axios library. Then, we define the data to be sent in the POST request (postData). We use the axios.post method to make a POST request to the specified URL with the provided data. The response is handled in the then block, and any errors are caught in the catch block.

// Fetch:

// In the Fetch example, we define the data (postData) and use the fetch function to make a POST request. We provide an options object that includes the method ('POST'), headers (specifying the content type as JSON), and the body (converted to JSON using JSON.stringify). The response is handled in the first then block, where we check if the response is successful. If not, we throw an error. The data is then parsed from JSON in the second then block, and any errors are caught in the catch block.

*/
//===============================================//

// protected routes

// isAuthenticated	"null"	'This is to check whether user is login or not'
// adminRoute	"null"	"This is to make admin protected route
// isAdmin	"null"	"This is to check whether user is admin or not
// redirect	"/login"	"This is to set the redirecting url
// redirectAdmin	"/profile"	"This is to set the redirecting url for admin route

// eg
/* <Route
path="/admin/dashboard"
element={
  <ProtectedRoute
    isAuthenticated={isAuthenticated}
    adminRoute={true}
    isAdmin={user && user.role === 'admin'}
    redirectAdmin="/myp"
  >
    <Dashboard />
  </ProtectedRoute>
}
/> */

//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//
//===============================================//

/* social button style */

/* .follow-link {
  width: 370px;
  height: 60px;
  position: relative;
  background: var(--bg-color);
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  box-shadow: var(--neon-box-shadow);
  border: 2px solid var(--hover-color);
}
.follow-link .follow-btn {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background: var(--hover-color);
  transition: all 0.9s ease-in-out;
  transition-delay: 4ms;
}
.follow-link:hover .follow-btn {
  transform: translateX(500px);
}
.follow-link .follow-btn a {
  transform: scale(1);
  opacity: 1;
  height: 100%;
  padding: 0;
  color: var(--text-btn-color);
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  transition: 0.9s;
}
.follow-link:hover .social a {
  transform: scale(1.6);
  transition-timing-function: cubic-bezier(1, -0.03, 0, 1.85);
  opacity: 1;
}

.social {
  justify-content: space-evenly;
}
.social a {
  padding: 15px;
  transition: all 0.7s;
  text-align: center;
  transform: scale(0);
  opacity: 0;
  color: var(--text-color);
  text-decoration: none;
}
.social a:nth-child(1) {
  transition-delay: 85ms;
}
.social a:nth-child(2) {
  transition-delay: 170ms;
}
.social a:nth-child(3) {
  transition-delay: 255ms;
}
.social a:nth-child(4) {
  transition-delay: 340ms;
}

.social a:hover {
  color: var(--hover-color);
  transition-timing-function: ease-in-out !important;
} */


// update photo toast not working
// item added succesfully not working
// item already exist toast not working 
// forgot password frontend url not coming
// item removed not working
// react swiper slider
// rgb 12,109,254 color fix with messenger