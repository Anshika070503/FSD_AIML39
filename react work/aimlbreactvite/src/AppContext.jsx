import React, { createContext } from 'react';
import Child1Context from './componentcontext/Child1Context';
import Child2Context from './componentcontext/Child2Context';
import Child3Context from './componentcontext/Child3Context';
// Step 1: Create Context
export const StudentContext = createContext();

const AppContext = () => {
  const studentData = {
    name: 'Anshika',
    branch: 'AIML',
    section: 'A',
    college: 'ABES',
  };

  return (
    // Step 2: Provide Context
    <StudentContext.Provider value={studentData}>
      <div>
        <h1>Anshika </h1>
        <Child1Context />
        <Child2Context />
        <Child3Context />
      </div>
    </StudentContext.Provider>
  );
};

export default AppContext;
