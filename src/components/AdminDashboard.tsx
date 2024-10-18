import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Bell } from 'lucide-react';
import BookManagementPage from './admin/BookManagementPage';
import BorrowingApprovalPage from './admin/BorrowingApprovalPage';
import AnnouncementPage from './admin/AnnouncementPage';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">管理员面板</h2>
        </div>
        <ul className="space-y-2 py-4">
          <li>
            <Link to="/admin/book-management" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <BookOpen className="mr-3 h-5 w-5" />
              书籍管理
            </Link>
          </li>
          <li>
            <Link to="/admin/borrowing-approval" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <CheckSquare className="mr-3 h-5 w-5" />
              借阅审批
            </Link>
          </li>
          <li>
            <Link to="/admin/announcements" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
              <Bell className="mr-3 h-5 w-5" />
              公告发布
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-8 overflow-y-auto">
        <Routes>
          <Route path="/book-management" element={<BookManagementPage />} />
          <Route path="/borrowing-approval" element={<BorrowingApprovalPage />} />
          <Route path="/announcements" element={<AnnouncementPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;