import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle } from 'lucide-react';

const DiscussionPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '推荐一本好书：《百年孤独》', author: '书虫一号', likes: 15, comments: 5 },
    { id: 2, title: '关于图书馆新规定的讨论', author: '图书馆常客', likes: 8, comments: 12 },
    { id: 3, title: '寻找同好：科幻小说交流', author: '星际旅人', likes: 20, comments: 7 },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleNewPost = (e) => {
    e.preventDefault();
    // Add new post logic here
    console.log('New post:', newPost);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">讨论区</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">发布新帖子</h2>
        <form onSubmit={handleNewPost} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">标题</label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">内容</label>
            <textarea
              id="content"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            发布
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">最新帖子</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lgshadow-md">
              <h3 className="text-xl font-medium mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">作者: {post.author}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-blue-500">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  {post.likes}
                </button>
                <button className="flex items-center text-gray-600 hover:text-green-500">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  {post.comments}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;