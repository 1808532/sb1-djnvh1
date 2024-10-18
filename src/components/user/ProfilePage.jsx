import React, { useState } from 'react';
import { User, Mail, Phone, School, Edit2 } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    phone: '123-456-7890',
    studentId: '20230001',
    major: '计算机科学',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated profile to the server
    console.log('Saving profile:', profile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">个人信息</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">个人资料</h2>
          {!isEditing && (
            <button
              onClick={handleEdit}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Edit2 className="h-5 w-5 mr-2" />
              编辑
            </button>
          )}
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">电话</label>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">学号</label>
              <div className="flex items-center">
                <School className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={profile.studentId}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">专业</label>
              <div className="flex items-center">
                <School className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={profile.major}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                取消
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                保存
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;