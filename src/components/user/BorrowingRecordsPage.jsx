import React from 'react';
import { Book, Calendar, RefreshCw } from 'lucide-react';

const BorrowingRecordsPage = () => {
  const borrowingRecords = [
    { id: 1, book: '百年孤独', author: '加西亚·马尔克斯', borrowDate: '2023-04-01', returnDate: '2023-05-01', status: '已归还' },
    { id: 2, book: '1984', author: '乔治·奥威尔', borrowDate: '2023-04-15', returnDate: '2023-05-15', status: '借阅中' },
    { id: 3, book: '三体', author: '刘慈欣', borrowDate: '2023-05-01', returnDate: '2023-06-01', status: '借阅中' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">借阅记录</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">书名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">作者</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">借阅日期</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">应还日期</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {borrowingRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Book className="h-5 w-5 text-gray-400 mr-2" />
                    <div className="text-sm font-medium text-gray-900">{record.book}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <div className="text-sm text-gray-900">{record.borrowDate}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <div className="text-sm text-gray-900">{record.returnDate}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    record.status === '已归还' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <RefreshCw className="h-5 w-5 mr-2" />
          续借
        </button>
      </div>
    </div>
  );
};

export default BorrowingRecordsPage;