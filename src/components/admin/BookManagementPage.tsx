import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const BookManagementPage: React.FC = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '百年孤独', author: '加西亚·马尔克斯', isbn: '9787544253994', category: '小说' },
    { id: 2, title: '1984', author: '乔治·奥威尔', isbn: '9787532751396', category: '科幻' },
    { id: 3, title: '三体', author: '刘慈欣', isbn: '9787536692930', category: '科幻' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentBook, setCurrentBook] = useState({ id: 0, title: '', author: '', isbn: '', category: '' });

  const handleAddBook = () => {
    setCurrentBook({ id: 0, title: '', author: '', isbn: '', category: '' });
    setShowModal(true);
  };

  const handleEditBook = (book: typeof currentBook) => {
    setCurrentBook(book);
    setShowModal(true);
  };

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleSaveBook = () => {
    if (currentBook.id === 0) {
      // Add new book
      setBooks([...books, { ...currentBook, id: books.length + 1 }]);
    } else {
      // Update existing book
      setBooks(books.map(book => book.id === currentBook.id ? currentBook : book));
    }
    setShowModal(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">书籍管理</h1>
      
      <div className="mb-4">
        <button
          onClick={handleAddBook}
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          添加新书
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">书名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">作者</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book) => (
              <tr key={book.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.isbn}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEditBook(book)}
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteBook(book.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-xl w-96">
            <h2 className="text-2xl font-bold mb-4">{currentBook.id === 0 ? '添加新书' : '编辑书籍'}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">书名</label>
                <input
                  type="text"
                  id="title"
                  value={currentBook.title}
                  onChange={(e) => setCurrentBook({ ...currentBook, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">作者</label>
                <input
                  type="text"
                  id="author"
                  value={currentBook.author}
                  onChange={(e) => setCurrentBook({ ...currentBook, author: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">ISBN</label>
                <input
                  type="text"
                  id="isbn"
                  value={currentBook.isbn}
                  onChange={(e) => setCurrentBook({ ...currentBook, isbn: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">分类</label>
                <input
                  type="text"
                  id="category"
                  value={currentBook.category}
                  onChange={(e) => setCurrentBook({ ...currentBook, category: e.target.value })}
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
                  onClick={handleSaveBook}
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

export default BookManagementPage;