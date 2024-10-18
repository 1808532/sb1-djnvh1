import React, { useState } from 'react';
import { Search, Award, BookOpen, Users, Play } from 'lucide-react';

const BooksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBorrowModal, setShowBorrowModal] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  const handleBorrow = () => {
    setShowBorrowModal(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">书籍检索</h1>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex">
          <input
            type="text"
            placeholder="搜索书籍..."
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-yellow-500" />
            借阅排行榜
          </h2>
          <ol className="list-decimal list-inside">
            <li>《百年孤独》 - 加西亚·马尔克斯</li>
            <li>《1984》 - 乔治·奥威尔</li>
            <li>《三体》 - 刘慈欣</li>
            <li>《活着》 - 余华</li>
            <li>《追风筝的人》 - 卡勒德·胡赛尼</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2 text-blue-500" />
            书籍详情
          </h2>
          <h3 className="font-medium text-lg">《百年孤独》</h3>
          <p className="text-gray-600 mb-2">作者：加西亚·马尔克斯</p>
          <p className="mb-4">这部小说讲述了布恩迪亚家族七代人的传奇故事，以及他们所居住的虚构小镇马孔多的兴衰。</p>
          <button
            onClick={handleBorrow}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            借阅
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 text-purple-500" />
            借阅人群分析
          </h2>
          <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
            [借阅人群分析饼图]
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Play className="mr-2 text-red-500" />
            达人推荐
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </div>
        </div>
      </div>

      {showBorrowModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">借阅信息</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">姓名</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">学号</label>
                <input type="text" id="studentId" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="bookTitle" className="block text-sm font-medium text-gray-700">书名</label>
                <input type="text" id="bookTitle" value="《百年孤独》" readOnly className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="bookId" className="block text-sm font-medium text-gray-700">书籍编号</label>
                <input type="text" id="bookId" value="BK001" readOnly className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="borrowDate" className="block text-sm font-medium text-gray-700">借阅时间</label>
                <input type="date" id="borrowDate" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setShowBorrowModal(false)} className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  取消
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  提交
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;