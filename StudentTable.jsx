import StudentRow from './StudentRow';

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-container">
      <div className="table-header-info">
        <span className="title">STUDENT RECORDS</span>
        <span className="entries">{students.length} entries</span>
      </div>
      <table className="terminal-table">
        <thead>
          <tr>
            <th className="th-name">NAME</th>
            <th className="th-score">SCORE</th>
            <th className="th-status">STATUS</th>
            <th className="th-update">UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
          {students.length === 0 && (
            <tr>
              <td colSpan="4" className="empty-row">NO RECORDS FOUND</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
