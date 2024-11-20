import React from 'react';

export default function SearchBar({ url, setUrl }) {
  return (
    <div className="flex-1">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL (e.g., https://example.com)"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
    </div>
  );
}