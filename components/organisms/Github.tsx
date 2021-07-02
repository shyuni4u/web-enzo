import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Router from 'next/router';

import { toast } from 'react-toastify';

import Panel from '../atoms/Panel';
import Button from '../atoms/Button';

const StyledGithubList = styled.ul`
  & > li {
    & > .img {
      width: 200px;
      height: 100px;
    }
  }
`;

export const Github: React.FC = () => {
  const [reposList, setReposList] = useState<any[]>([]);

  useEffect(() => {
    const loadRepos = async () => {
      const token = `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`; // Readonly
      const query = `
          query {
            viewer {
              repositories (first:100, orderBy:{field:CREATED_AT, direction: DESC}) {
                nodes {
                  ... on Repository {
                    name
                    description
                    openGraphImageUrl
                    languages(first:100) {
                      nodes {
                        name
                      }
                      edges {
                        size
                      }
                    }
                  }
                }
              }
            }
        }`;
      await axios
        .post('https://api.github.com/graphql', { query: query }, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setReposList(res.data.data.viewer.repositories.nodes))
        .catch((e) => console.error(e));
    };
    loadRepos();
  }, []);

  return (
    <StyledGithubList>
      {reposList.map((elRepos: any, elReposIdx: number) => {
        const languages = elRepos.languages;
        const reducer = (acc: number, cur: number) => acc + cur;
        console.log(languages.edges);
        const totalSize = languages.edges.map((elLanguagesEdge) => elLanguagesEdge.size).reduce(reducer);
        return (
          <li key={elReposIdx}>
            {elRepos.name} / {elRepos.description} / {totalSize}
            <img
              className={'img'}
              src={
                elRepos.openGraphImageUrl.indexOf('https://avatars') > -1
                  ? '/img/github-preview-default.png'
                  : elRepos.openGraphImageUrl
              }
            />
          </li>
        );
      })}
    </StyledGithubList>
  );
};

export default Github;
