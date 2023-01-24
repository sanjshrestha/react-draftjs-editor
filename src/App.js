import React, { useState, useEffect } from 'react';
import Link from "./images/Vector.png";
import Image from "./images/image.svg";
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  useEffect(() => {
    setEditorState( EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('<div><h4><span>Presenting Complaints</span></h4><ul><li>Fever since 5 days</li></ul><br/><h4><span>History of Presenting Complaints</span></h4><ul><li>On sat 29/7/9 pt cut his knee on glass while attending october fest in germany</li><li>pt attended to hisown woundy keeping it clean returned to UK no significant problems</li><li>During the next week the pt’s wounded and experienced reduced movement of his knee.</li><li>He was admitted to oKG on 3/10/07 for surgical debndement of his knew wound</li><li>On fri 5/10/7 the pt began to feel unwell with fever lasting few hours and experienced sore throat</li></ul><h4><span>Past Medical History</span></h4></br><h4><span>Allergies</span></h4></br><h4><span>Drug History</span></h4></br><h4><span>Family History</span></h4></br><h4><span>Social History / Lifestyle</span></h4></br></div>'))));
  }, []);
  

  return (
    <div className="App">
     <div className="d-flex justify-content-center" style ={{width: 800}}> 
     <h1>Tool Bar</h1>
     <label>History of Presenting Complaints</label>
      <Editor
      //  toolbarOnFocus
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbarStyle={{
          position: 'fixed',
          top: 0,
          width:"100%",
          zIndex: 1000,
          
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'APPLE', value: 'apple', url: 'https://www.facebook.com' },
            { text: 'BANANA', value: 'banana', url: 'google.com' },
            { text: 'CHERRY', value: 'cherry', url: 'cherry' },
            { text: 'DURIAN', value: 'durian', url: 'durian' },
            { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
            { text: 'FIG', value: 'fig', url: 'fig' },
            { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
            { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
          ],
        }}
        editorStyle={{
          height:550,
          minHeight: 150,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        toolbar = {{
          
            options: ['inline', 'list',  'link', 'image',],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold'],
              bold: {  className: undefined },
              
            },
           
           
            
            list: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered'],
              unordered: { className: undefined },
              ordered: {  className: undefined },
              indent: {  className: undefined },
              outdent: {  className: undefined },
            },
           
           
            link: {
             
              inDropdown: false,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              dropdownClassName: undefined,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_self',
              options: ['link'],
              link: {  icon:Link, className: undefined },
              
              linkCallback: undefined
            },
            
            
            image: {
             icon:Image,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
           
          
        }}
       
        // toolbarHidden
      />
       {/* <Editor
      //  toolbarOnFocus
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbarStyle={{
          position: 'fixed',
          top: 0,
          width:"100%",
          zIndex: 1000,
          
        }}
        editorStyle={{
          height:550,
          minHeight: 150,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        toolbar = {{
          
            options: ['inline', 'list',  'link', 'image',],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold'],
              bold: {  className: undefined },
              
            },
           
           
            
            list: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered'],
              unordered: { className: undefined },
              ordered: {  className: undefined },
              indent: {  className: undefined },
              outdent: {  className: undefined },
            },
           
           
            link: {
             
              inDropdown: false,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              dropdownClassName: undefined,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_self',
              options: ['link'],
              link: {  icon:Link, className: undefined },
              
              linkCallback: undefined
            },
            
            
            image: {
             icon:Image,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
           
          
        }}
       
        // toolbarHidden
      /> */}
      </div>
      <div
        className=""
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div>
    </div>
  )
}

export default App;