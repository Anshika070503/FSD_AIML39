import React, { useContext } from 'react';
import { StudentContext } from '../AppContext';

const Child2Context = () => {
  const student = useContext(StudentContext);
  return (
    <div>
      <h2>Child 2 Context</h2>
      <p>Branch: {student.branch}</p>
      <p>Section: {student.section}</p>
    </div>
  );
};

export default Child2Context;