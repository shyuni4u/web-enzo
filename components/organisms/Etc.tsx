import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

export const Etc: React.FC = () => {
  return (
    <ul style={{ margin: '10px auto' }}>
      <li style={{ marginBottom: '30px' }}>
        <a href={'http://wow.enzo.kr'}>월드 오브 워크래프트 직업 추천</a>
      </li>
      <li style={{ marginBottom: '30px' }}>
        <a href={'http://lostark.enzo.kr'}>로스트 아크 직업 추천</a>
      </li>
      <li style={{ marginBottom: '30px' }}>github action setting</li>
      <li style={{ marginBottom: '30px' }}>github graphql setting</li>
      <li style={{ marginBottom: '30px' }}>notion html parser</li>
      <li style={{ marginBottom: '30px' }}>aws s3 setting</li>
      <li style={{ marginBottom: '30px' }}>aws lambda setting</li>
      <li style={{ marginBottom: '30px' }}>aws route53 setting</li>
      <li style={{ marginBottom: '30px' }}>convert picture & movie to photobook</li>
      <li style={{ marginBottom: '30px' }}>wine log</li>
    </ul>
  );
};

export default Etc;
