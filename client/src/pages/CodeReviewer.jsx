import React, { useState, useEffect } from 'react';
import './CodeReviewer.css';

import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import Editor from "react-simple-code-editor"
import axios from 'axios';
function CodeReviewer() {
  const [darkMode, setDarkMode] = useState(true);
  const [code, setCode] = useState(`function sum() {
  console.log("what do you mean");
}`)
  const [review,setReview]=useState(``)
  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    Prism.highlightAll();
  }, []);
 const reviewCode=async()=>{
    const response= await axios.post('http://localhost:4000/ai/get-review',{code})
    setReview(response.data)
    console.log(response.data)
 }
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button className="toggle-btn" onClick={toggleTheme}>
        👾 Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, 'javascript')
              }
              padding={12}
              className="code-editor"
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                backgroundColor: '#1e1e1e',
                color: '#fff',
                borderRadius: '8px',
                minHeight: '300px',
              }}

            />

          </div>

          <div className="review">
            <button className="review-btn" onClick={reviewCode}>Review</button>
          </div>
        </div>

        <div className="right">
          review.split('\n').map((line,index)=>{
            <div key={index}>{line}</div>
          })
        </div>

      </main >
    </div >
  );
}

export default CodeReviewer;
