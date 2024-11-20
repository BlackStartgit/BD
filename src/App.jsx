import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookmarkList from './components/BookmarkList';
import HistoryList from './components/HistoryList';
import ActionButtons from './components/ActionButtons';

function App() {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/browse', { url });
      setContent(response.data.content);
      addToHistory(url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addBookmark = () => {
    if (url && !bookmarks.includes(url)) {
      setBookmarks([...bookmarks, url]);
    }
  };

  const addToHistory = (url) => {
    setHistory([{ url, timestamp: new Date().toISOString() }, ...history]);
  };

  const handleDownload = async () => {
    try {
      const response = await axios.post('http://localhost:5000/download', { url });
      alert(`File downloaded: ${response.data.filename}`);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Web Browser Interface</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <SearchBar url={url} setUrl={setUrl} />
            <ActionButtons onBookmark={addBookmark} onDownload={handleDownload} />
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BookmarkList bookmarks={bookmarks} />
          <HistoryList history={history} />
        </div>

        {content && (
          <div className="mt-8 bg-white rounded-lg shadow p-4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;