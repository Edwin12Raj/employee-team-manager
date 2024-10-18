import React from 'react';

function EmployeeList({ employees, dispatch }) {
  return (
    <div>
      <h2>Employees List</h2>
      {employees.map(emp => (
        <div
          key={emp.id}
          className={`employee-item ${emp.added ? 'disabled' : ''}`}
        >
          <div className="employee-details">
            <span>{emp.name} - {emp.age} years</span>
          </div>
          {!emp.added && (
            <button
              onClick={() => dispatch({ type: 'ADD_EMPLOYEE', payload: emp })}
            >
              ADD
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
