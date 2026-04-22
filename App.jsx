import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  // Add student
  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  };

  // Update score
  const updateStudentScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  // Stats
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg = total > 0 ? (students.reduce((acc, s) => acc + s.score, 0) / total) : 0;

  return (
    <div className="app">
      <Header />

      <AddStudentForm onAddStudent={addStudent} />

      <div className="stats-container">
        <div className="stat-card">
          <span className="stat-label">TOTAL</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">PASSED</span>
          <span className="stat-value">{passed}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">AVE SCORE</span>
          <span className="stat-value cyan">{Math.round(avg)}</span>
        </div>
      </div>

      <StudentTable
        students={students}
        onUpdateScore={updateStudentScore}
      />

      <div className="footer-terminal">
        ACADEMIC TERMINAL • SECURE SESSION
      </div>
    </div>
  );
}

export default App;