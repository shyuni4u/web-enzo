import React, { useState, useEffect } from 'react';
// import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from 'react-markdown';
import Wrapper from '../components/organisms/Wrapper';

export const Readme: React.FC = () => {
  useEffect(() => {
    // console.log('asdf')
  }, []);
  // const [val, setVal] = useState<string>('');

  // useEffect(() => {
  //   fetch(source)
  //     .then(response => {
  //       return response.text()
  //     })
  //     .then(text => {
  //       setVal(text)
  //     })
  // }, [])

  return (
    <Wrapper>
      {/* <MDEditor
        value={val}
        onChange={setVal}
      /> */}
      {/* <ReactMarkdown source={val} /> */}
    </Wrapper>
  );
};

export default Readme;
