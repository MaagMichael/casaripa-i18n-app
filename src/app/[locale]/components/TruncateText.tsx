"use client";
import { useState } from "react";

interface TruncateTextProps {
  text: string;
  maxLength: number;
}

export default function TruncateText({ text, maxLength }: TruncateTextProps) {
  // Create state to track whether text is truncated
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div>
      <p className="whitespace-pre-line text-justify">
        {/* text to show */}
        {isTruncated ? truncatedText : text}
        {/* button to show more/less */}
        <span className="ml-2">
          {text.length > maxLength && (
            <button
              onClick={toggleTruncate}
              className="text-orange focus:outline-none"
              //   className="text-red-500 hover:text-red-700 focus:outline-none inline ml-2"
            >
              {isTruncated ? ">> View more" : "<< View less"}
            </button>
          )}
        </span>
      </p>
    </div>
  );
}
