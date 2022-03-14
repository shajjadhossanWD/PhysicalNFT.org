import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

const TextEditor = () => {
    const [body, setBody] = useState("");
    
    const handleBody = e =>{
        console.log(e);
        setBody(e);
    }
    
    return (
        <div>
              <ReactQuill
                  placeholder='write your item description'
                  modules={TextEditor.modules}
                  formats={TextEditor.formats}
                  onChange={handleBody}
                  value={body}
                  className="textEditor"
                />
        </div>
    );
};
TextEditor.modules={
    toolbar:[
        [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
    ],
};
TextEditor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block',
];
export default TextEditor;