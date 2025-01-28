import React, { useEffect, useState } from 'react';
import { fetchBooks, addBook } from '../api/01api';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    name: '',
    isIssued: false,
    authorName: '',
    datePublished: '',
    noOfPages: '',
  });

  useEffect(() => {
    const getBooks = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const addedBook = await addBook(newBook);
      setBooks((prevBooks) => [...prevBooks, addedBook]);
      setNewBook({ name: '', isIssued: false, authorName: '', datePublished: '', noOfPages: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Library Books</h1>

      {/* Book List */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Available Books</h2>
        <ul className="divide-y divide-gray-200">
          {books.map((book) => (
            <li key={book.id} className="py-3">
              <p className="text-lg font-medium text-gray-800">{book.name}</p>
              <p className="text-sm text-gray-600">by {book.authorName}</p>
              <span
                className={`text-xs font-semibold mt-1 inline-block ${
                  book.isIssued ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {book.isIssued ? 'Issued' : 'Available'}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Book Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Book</h2>
        <form onSubmit={handleAddBook} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={newBook.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter book name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Author Name</label>
            <input
              type="text"
              name="authorName"
              value={newBook.authorName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter author name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date Published</label>
            <input
              type="date"
              name="datePublished"
              value={newBook.datePublished}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Number of Pages</label>
            <input
              type="number"
              name="noOfPages"
              value={newBook.noOfPages}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter number of pages"
              required
            />
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isIssued"
                checked={newBook.isIssued}
                onChange={handleInputChange}
                className="h-5 w-5 text-blue-600 focus:ring focus:ring-blue-300"
              />
              <span className="text-gray-700 font-medium">Is Issued</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookList;

// import React, { useEffect, useState } from 'react';
// import { fetchBooks, addBook } from '../api/01api';

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   // Fetch books on component load
//   useEffect(() => {
//     const getBooks = async () => {
//       try {
//         const booksData = await fetchBooks();
//         setBooks(booksData);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     getBooks();
//   }, []);

//   const handleAddBook = async () => {
//     const newBook = {
//       // id: 5,
//       name: 'New Book',
//       isIssued: false,
//       authorName: 'Author XYZ',
//       datePublished: '2025-01-01',
//       noOfPages: 200,
//     };

//     try {
//       const addedBook = await addBook(newBook);
//       setBooks((prevBooks) => [...prevBooks, addedBook]);
//     } catch (error) {
//       console.error('Error adding book:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Library Books</h1>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>{book.name} by {book.authorName}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddBook}>Add Book</button>
//     </div>
//   );
// };

// export default BookList;
