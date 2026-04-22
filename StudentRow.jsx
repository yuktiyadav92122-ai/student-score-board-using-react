import { useState } from 'react';

function StudentRow({ student, onUpdateScore }) {
  const [editScore, setEditScore] = useState(student.score);
  const isPassed = student.score >= 40;

  const handleSave = () => {
    const newScore = parseInt(editScore, 10);
    if (!isNaN(newScore) && newScore >= 0 && newScore <= 100) {
      onUpdateScore(student.id, newScore);
    }
  };

  return (
    <tr className={`student-row-item ${isPassed ? 'status-pass' : 'status-fail'}`}>
      <td className="td-name">
        <div className="name-wrapper">
          <div className="status-indicator"></div>
          {student.name}
        </div>
      </td>
      <td className="td-score">
        <span className="score-display">{student.score}</span>
      </td>
      <td className="td-status">
        <div className={`status-chip ${isPassed ? 'chip-pass' : 'chip-fail'}`}>
          <span className="dot">●</span> {isPassed ? 'PASS' : 'FAIL'}
        </div>
      </td>
      <td className="td-update">
        <div className="update-controls">
          <input
            type="number"
            value={editScore}
            onChange={(e) => setEditScore(e.target.value)}
            min="0"
            max="100"
          />
          <button onClick={handleSave} className="save-btn">SAVE</button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
