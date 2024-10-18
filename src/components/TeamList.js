import React from 'react';

function TeamList({ team, dispatch }) {
  const averageAge = team.length > 0
    ? team.reduce((sum, emp) => sum + emp.age, 0) / team.length
    : 0;

  return (
    <div>
      <h2>Team Members</h2>
      <button
        className="sort-button"
        onClick={() => dispatch({ type: 'SORT_BY_AGE' })}
      >
        Sort by Age
      </button>
      {team.map(emp => (
        <div key={emp.id} className="team-item">
          <div className="team-details">
            <span>{emp.name} - {emp.age} years</span>
          </div>
          <button
            onClick={() => dispatch({ type: 'REMOVE_EMPLOYEE', payload: emp })}
          >
            REMOVE
          </button>
        </div>
      ))}
      <div className="average-age">
        Average Age: {averageAge.toFixed(2)}
      </div>
    </div>
  );
}

export default TeamList;
