"use client";

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { HiX, HiChevronLeft, HiChevronRight, HiDownload } from 'react-icons/hi';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ isOpen, onClose, pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPrevPage() {
    setPageNumber(pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber + 1);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Resume</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Controls */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="flex items-center gap-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded transition"
          >
            <HiChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <span className="text-sm text-gray-600">
            Page {pageNumber} of {numPages}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="flex items-center gap-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded transition"
          >
            Next
            <HiChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* PDF Content */}
        <div className="p-4 overflow-auto max-h-[60vh]">
          <div className="flex justify-center">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="shadow-lg"
            >
              <Page 
                pageNumber={pageNumber} 
                width={Math.min(800, window.innerWidth - 100)}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t text-center">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#BD93F9] hover:bg-[#A78BFA] text-white rounded-lg transition"
          >
            <HiDownload className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
