import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const BorrowingApprovalPage: React.FC = () => {
  const [borrowRequests, setBorrowRequests] = useState([
    { id: 1, user: '李四', book: '百年孤独', date: '2023-05-10', status: 'pending' },
    { id: 2, user: '王五', book: '1984', date: '2023-05-11', status: 'pending' },
    { id: 3, user: '赵六', book: '三体', date: '2023-05-12', status: 'pending' },
  ]);

  const handleApprove = (id: number) => {
    setBorrowRequests(borrowRequests.map(request =>
      request.id === id ? { ...request, status: 'approved' } : request
    ));
  };

  const handleReject = (id: number) => {
    setBorrowRequests(borrowRequests.map(request =>
      request.id === id ? { ...request, status: 'rejected' } : request
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">借阅审批</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">书名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">申请日期</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {borrowRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.book}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    request.status === 'approved' ? 'bg-green-100 text-green-800' :
                    request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status === 'approved' ? '已批准' :
                     request.status === 'rejected' ? '已拒绝' :
                     '待审批'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {request.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="text-green-600 hover:text-green-900 mr-2"
                      >
                        <Check className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowingApprovalPage;