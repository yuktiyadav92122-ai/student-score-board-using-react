import { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return;

    const parsedScore = parseInt(score, 10);
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      setError('Invalid Score');
      return;
    }

    onAddStudent(name.trim(), parsedScore);
    setName('');
    setScore('');
    setError('');
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <span className="dot"></span> REGISTER STUDENT
        <span className="right-text">NEW ENTRY</span>
      </div>
      <form className="add-student-form-horizontal" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Student name"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Score (0-100)"
            min="0"
            max="100"
            required
          />
        </div>
        <button type="submit" className="add-btn">
          + ADD
        </button>
      </form>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
}

export default AddStudentForm;
