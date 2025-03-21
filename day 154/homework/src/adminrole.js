import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = { email: e.target.email.value, pass: e.target.pass.value };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = { email: e.target.email.value, pass: e.target.pass.value };

    const loggedInUser = accounts.find(
      (acc) => acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  const addStudent = (e) => {
    e.preventDefault();
    const student = { name: e.target.studentName.value, lastname: e.target.studentLastname.value, age: e.target.studentAge.value };
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <button onClick={logout}>Logout</button>

          <form onSubmit={addStudent}>
            <h1>Add Student</h1>
            <input type="text" name="studentName" placeholder="First Name" required />
            <input type="text" name="studentLastname" placeholder="Last Name" required />
            <input type="number" name="studentAge" placeholder="Age" required />
            <button>Add Student</button>
          </form>

          <ul>
            {students.map((student, index) => (
              <li key={index}>
                {student.name} {student.lastname} - {student.age} 
                <button onClick={() => deleteStudent(index)}>Delete</button>
                <button onClick={() => setEditStudent(index)}>Edit</button>
              </li>
            ))}
          </ul>

          {editStudent !== null && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedStudent = {
                  name: e.target.studentName.value,
                  lastname: e.target.studentLastname.value,
                  age: e.target.studentAge.value,
                };
                const updatedStudents = students.map((student, index) =>
                  index === editStudent ? updatedStudent : student
                );
                setStudents(updatedStudents);
                setEditStudent(null);
              }}
            >
              <h1>Edit Student</h1>
              <input type="text" name="studentName" defaultValue={students[editStudent].name} required />
              <input type="text" name="studentLastname" defaultValue={students[editStudent].lastname} required />
              <input type="number" name="studentAge" defaultValue={students[editStudent].age} required />
              <button>Save Changes</button>
            </form>
          )}
        </section>
      )}
    </main>
  );
}
