import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markdown, setaMarkdown] = useState("Welcome to MarkDown");

  return (
    <>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setaMarkdown(e.target.value)}
        ></textarea>
        <div className="right-side">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Markdown;
