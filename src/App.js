import React, { useReducer } from 'react';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';
import './App.css';
// Sample Employee Data
const employeeData = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 },
  { id: 4, name: 'Diana', age: 28 },
];


  

// Initial State
const initialState = {
  employees: employeeData,
  team: [],
};

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload.id ? { ...emp, added: true } : emp
        ),
        team: [...state.team, action.payload],
      };
    case 'REMOVE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.map(emp =>
          emp.id === action.payload.id ? { ...emp, added: false } : emp
        ),
        team: state.team.filter(emp => emp.id !== action.payload.id),
      };
    case 'SORT_BY_AGE':
      return {
        ...state,
        team: [...state.team].sort((a, b) => a.age - b.age),
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app-container">
      <div className="employee-list">
        <EmployeeList employees={state.employees} dispatch={dispatch} />
      </div>
      <div className="team-list">
        <TeamList team={state.team} dispatch={dispatch} />
      </div>
    </div>
  );
}
