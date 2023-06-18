import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBar from "./Components/util/FooterBar";
import AdminAllUsersPage from "./Pages/Admin/AdminAllUsersPage";
import AdminAllBooksPage from "./Pages/Admin/AdminAllBooksPage";
import AdminAllBooksReqouestPage from "./Pages/Admin/AdminAllBooksReqouestPage";
import AdminCreateEventPage from "./Pages/Admin/AdminCreateEventPage";
import AdminCreateUserPage from "./Pages/Admin/AdminCreateUserPage";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/auth/LoginPage";
import SignUpPage from "./Pages/auth/SignUpPage";
import About from "./Pages/About/About";
import BookDetailsPage from "./Pages/books/BookDetailsPage";
import TeacherAllEventPage from "./Pages/Teacher/TeacherAllEventPage";
import TeacherAddResultPage from "./Pages/Teacher/TeacherAddResultPage";
import TeacherAddAttendancePage from "./Pages/Teacher/TeacherAddAttendancePage";
import TeacherAddAssignmentPage from "./Pages/Teacher/TeacherAddAssignmentPage";
import LibrarianAllEventPage from "./Pages/Librarian/LibrarianAllEventPage";
import LibrarianAddBookPage from "./Pages/Librarian/LibrarianAddBookPage";
import LibrarianRequestBookPage from "./Pages/Librarian/LibrarianRequestBookPage";
import StudentAllEventPage from "./Pages/Student/StudentAllEventPage";
import StudentAttendancePage from "./Pages/Student/StudentAttendancePage";
import StudentResultPage from "./Pages/Student/StudentResultPage";
import StudentAssignmentPage from "./Pages/Student/StudentAssignmentPage";
import BooksPage from "./Pages/books/BooksPage";
import AdminEditUser from "./Pages/Admin/AdminEditUser";




function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route index element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin/allusers" element={<AdminAllUsersPage />} />
          <Route path="/admin/allbooksrequests" element={<AdminAllBooksReqouestPage />} />
          <Route path="/admin/allbooks" element={<AdminAllBooksPage />} />
          <Route path="/admin/createuser" element={<AdminCreateUserPage />} />
          <Route path="/admin/createevent" element={<AdminCreateEventPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/teacher/allevent" element={<TeacherAllEventPage />} />
          <Route path="/teacher/addresult" element={<TeacherAddResultPage />} />
          <Route path="/teacher/addattendance" element={<TeacherAddAttendancePage />} />
          <Route path="/teacher/addAssignment" element={<TeacherAddAssignmentPage />} />
          <Route path="/librarian/allevent" element={<LibrarianAllEventPage />} />
          <Route path="/librarian/addBook" element={<LibrarianAddBookPage />} />
          <Route path="/librarian/viewRequestBook" element={<LibrarianRequestBookPage />} />
          <Route path="/student/allevent" element={<StudentAllEventPage />} />
          <Route path="/student/attendance" element={<StudentAttendancePage />} />
          <Route path="/student/result" element={<StudentResultPage />} />
          <Route path="/student/assignment" element={<StudentAssignmentPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/allBooks" element={<BooksPage />} />
          <Route path="/admin/edituser" element={<AdminEditUser />} />




        </Routes>
      </BrowserRouter>
      <FooterBar />
    </>


  );
}

export default App;
