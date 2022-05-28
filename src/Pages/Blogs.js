import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h2>This is Blogs</h2>
    <div className=''>
    <h2 className='text-xl'>1. Improving react application performace</h2>
    <p>By keeping component state local where necessary</p>
    <p>Prevent from unnecessary re-renders</p>
    <p>Using dynamic import().</p>
    <p>Proper visualization in react</p>
      <p>lazy loading iamges in react</p>
      <p>installing react developer tools for chrome.</p>
      <p>Aviod reconciliation</p>
 <br />
 <br />
    <h2 className='text-xl'>2. Managing react App</h2>
    <p>There are some types to manage react app</p>
    <p>
     <ol>
     <li>Local state</li>
      <li>Global state</li>
      <li>Server state</li>
      <li>Url State</li>
     </ol>
    </p>
    <br /> <br />
    <h3 className='text-xl'>3. How works prototypical inheritance</h3>
    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. 
    </p>
    <p>JavaScript objects are dynamic . When we trying to access a property of an object, the property will not only be work on the object. Rather, on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found. 
    </p>
    <p>When an inherited function is executed, then the value of the this pointer to the inheriting object.</p>
    <br />
    <br />
    <h2 className=' text-xl'>Why we do not set the a state derectly</h2>
    <p>When we set a state the setState is work as a function of that state,and other is hold the state value. we use useState() hooks for holding something which can be changed. if we directly set an state it take the copy of the state, which called rerendered. it is rerendered the dom property and copy its previous value. Thats why we do not use an state properly</p>
    <br />
    <br />
    <h2 className='text-xl '>About Unit test</h2>
   <p> Unit test is a  of software testing where individual units or components of a software are tested. The purpose is of unit test is to validate each unit of the software code. Unit Testing is done when the development  of an application by a developer. A unit may be a method, procedure, module, and object </p>
   <p>
   It tests help to fix bugs early.
  It helps the developers to understand the testing code base and enables them to make changes quickly.Unit tests help with code re-use. there are two type to mesaure the unit test.
  1 .Manual
  2. Automated
   </p>
    </div>


    </div>
  );
};

export default Blogs;