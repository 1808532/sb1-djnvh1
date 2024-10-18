import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: '新书上架通知', content: '《人工智能与未来》现已上架，欢迎借阅！', date: '2023-05-01' },
    { id: 2, title: '图书馆开放时间调整', content: '从下周开始，图书馆将延长开放时间至晚上10点。', date: '2023-05-05' },
    { id: 3, title: '读书分享会', content: '本周六下午2点，我们将举办"科幻文学"主题的读书分享会，欢迎参加！', date: '2023-05-08' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState({ id: 0, title: '', content: '', date: '' });

  const handleAddAnnouncement = () => {
    setCurrentAnnouncement({ id: 0, title: '', content: '', date: new Date().toISOString().split('T')[0] });
    setShowModal(true);
  };

  const handleEditAnnouncement = (announcement) => {
    setCurrentAnnouncement(announcement);
    setShowModal(true);
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
  };

  const handleSaveAnnouncement = () => {
    if (currentAnnouncement.id === 0) {
      // Add new announcement
      setAnnouncements([...announcements, { ...currentAnnouncement, id: announcements.length + 1 }]);
    } else {
      // Update existing announcement
      setAnnouncements(announcements.map(announcement => announcement.id === currentAnnouncement.id ? currentAnnouncement : announcement));
    }
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">公告管理</h1>
      
      <div className="mb-4">
        <button
          onClick={handleAddAnnouncement}
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          发布新公告
        </button>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{announcement.title}</h2>
              <div>
                <button
                  onClick={() => handleEditAnnouncement(announcement)}
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDeleteAnnouncement(announcement.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-2">{announcement.content}</p>
            <p className="text-sm text-gray-500">发布日期: {announcement.date}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-xl w-96">
            <h2 className="text-2xl font-bold mb-4">{currentAnnouncement.id === 0 ? '发布新公告' : '编辑公告'}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">标题</label>
                <input
                  type="text"
                  id="title"
                  value={currentAnnouncement.title}
                  onChange={(e) => setCurrentAnnouncement({ ...currentAnnouncement, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">内容</label>
                <textarea
                  id="content"
                  rows={4}
                  value={currentAnnouncement.content}
                  onChange={(e) => setCurrentAnnouncement({ ...currentAnnouncement, content: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">发布日期</label>
                <input
                  type="date"
                  id="date"
                  value={currentAnnouncement.date}
                  onChange={(e) => setCurrentAnnouncement({ ...currentAnnouncement, date: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  取消
                </button>
                <button
                  type="button"
                  onClick={handleSaveAnnouncement}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementPage;