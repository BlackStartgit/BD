import React from 'react';
import { BookmarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function ActionButtons({ onBookmark, onDownload }) {
  return (
    <>
      <button
        type="button"
        onClick={onBookmark}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <BookmarkIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onDownload}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
      </button>
    </>
  );
}