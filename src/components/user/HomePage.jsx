import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">首页</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">公告栏</h2>
        <ul className="space-y-4">
          <li className="border-b pb-2">
            <h3 className="font-medium">新书上架通知</h3>
            <p className="text-gray-600">《人工智能与未来》现已上架，欢迎借阅！</p>
          </li>
          <li className="border-b pb-2">
            <h3 className="font-medium">图书馆开放时间调整</h3>
            <p className="text-gray-600">从下周开始，图书馆将延长开放时间至晚上10点。</p>
          </li>
          <li>
            <h3 className="font-medium">读书分享会</h3>
            <p className="text-gray-600">本周六下午2点，我们将举办"科幻文学"主题的读书分享会，欢迎参加！</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;