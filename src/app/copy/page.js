'use client'
import { useState } from 'react';

const CopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('hello moto');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div>
      <button onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
};

export default CopyToClipboard;

