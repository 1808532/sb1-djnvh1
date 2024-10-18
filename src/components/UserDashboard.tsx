import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, Book, MessageSquare, ClipboardList, User } from 'lucide-react';
import HomePage from './user/HomePage';
import BooksPage from './user/BooksPage';
import DiscussionPage from './user/DiscussionPage';
import BorrowingRecordsPage from './user/BorrowingRecordsPage';
import ProfilePage from './user/ProfilePage';

const UserDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">图书管理系统</h2>
        </div>
        <ul className="space-y-2 py-4">
          <li>
            <Link to="/user" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Home className="mr-3 h-5 w-5" />
              首页
            </Link>
          </li>
          <li>
            <Link to="/user/books" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Book className="mr-3 h-5 w-5" />
              书籍
            </Link>
          </li>
          <li>
            <Link to="/user/discussion" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <MessageSquare className="mr-3 h-5 w-5" />
              讨论区
            </Link>
          </li>
          <li>
            <Link to="/user/borrowing-records" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <ClipboardList className="mr-3 h-5 w-5" />
              借阅记录
            </Link>
          </li>
          <li>
            <Link to="/user/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <User className="mr-3 h-5 w-5" />
              个人
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/discussion" element={<DiscussionPage />} />
          <Route path="/borrowing-records" element={<BorrowingRecordsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;