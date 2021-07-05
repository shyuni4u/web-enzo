import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import moment from 'moment-timezone';

const StyledGithubList = styled.ul`
  ${({ theme }) => {
    const { sizes, colors, fontSizes } = theme;
    return css`
      width: ${sizes.notebook}px;
      margin: 0 auto;
      & > li {
        margin: 10px;
        display: flex;
        background-color: ${colors.background};

        &.title {
          border-bottom: 1px solid ${colors.main};
          & > div {
            padding: 8px 20px;
            background-color: ${colors.main};
            color: ${colors.background};
            font-weight: 600;
          }
        }

        & > .preview {
          flex: 0 0 200px;
          height: 100px;
        }

        & > .content {
          flex: 1 1 auto;
          padding-left: 20px;

          & > .name {
            font-weight: 600;
            font-size: ${fontSizes.name};
            color: ${colors.text};
            &:hover {
              color: ${colors.main};
            }
          }
          & > .description {
            font-size: ${fontSizes.description};
            color: ${colors.secondary};
          }
          & > .date {
            font-size: ${fontSizes.tag};
            font-style: italic;
            color: ${colors.secondary};
          }
          & > .languages {
            font-size: ${fontSizes.tag};
            color: ${colors.secondary};
            display: flex;
            flex-wrap: wrap;
            & > div {
              margin-right: 18px;
              display: flex;
              align-items: center;
              & > * {
                margin-right: 4px;
              }
              & > div.name {
                font-weight: 600;
              }
            }
          }
        }
      }
    `;
  }}
`;

type GraphqlProps = {
  url: string;
  name: string;
  description: string;
  createdAt: string;
  pushedAt: string;
  openGraphImageUrl: string;
  languages: {
    nodes: [
      {
        name: string;
        color?: string;
      }
    ];
    edges: [
      {
        size: number;
      }
    ];
  };
};

const LanguagesColor = {
  TypeScript: '#2b7489',
  JavaScript: '#f1e05a',
  Shell: '#89e051',
  HTML: '#e34c26',
  PHP: '#4F5D95',
  CSS: '#563d7c',
  Vue: '#41b883',
  SCSS: '#c6538c',
  'C#': '#178600',
  Kotlin: '#A97BFF',
  Java: '#b07219'
};

export const Github: React.FC = () => {
  const [reposList, setReposList] = useState<GraphqlProps[]>([]);

  useEffect(() => {
    const loadRepos = async () => {
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Readonly (https://nextjs.org/docs/basic-features/environment-variables)
      const query = `
          query {
            viewer {
              repositories (first:100, orderBy:{field:CREATED_AT, direction: DESC}) {
                nodes {
                  ... on Repository {
                    url
                    name
                    description
                    createdAt
                    pushedAt
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
      <li className={'title'}>
        <div>Repositories</div>
      </li>
      {reposList.map((elRepos: GraphqlProps, elReposIdx: number) => {
        const languages = elRepos.languages;
        const sizes = languages.edges.map((elLanguagesEdge) => elLanguagesEdge.size);
        let total = 0;
        sizes.forEach((elSize: number) => (total += elSize));
        return (
          <li key={elReposIdx}>
            <div className={'preview'}>
              <img
                className={'img'}
                src={
                  elRepos.openGraphImageUrl.indexOf('https://avatars') > -1
                    ? '/img/github-preview-default.png'
                    : elRepos.openGraphImageUrl
                }
              />
            </div>
            <div className={'content'}>
              <div className={'name'}>
                <a href={elRepos.url} target={'_blank'}>
                  {elRepos.name}
                </a>
              </div>
              <div className={'description'}>{elRepos.description}</div>
              <div className={'date'}>
                {moment(elRepos.createdAt).format('YY.MM.DD')} ~ {moment(elRepos.pushedAt).format('YY.MM.DD')}
              </div>
              <div className={'languages'}>
                {languages.nodes.map((elNode, elNodeIdx) => (
                  <div key={elNodeIdx}>
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '4px',
                        backgroundColor: LanguagesColor[elNode.name]
                      }}
                    ></div>
                    <div className={'name'}>{elNode.name}</div>
                    {Math.round((languages.edges[elNodeIdx].size / total) * 100 * 100) / 100}%
                  </div>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </StyledGithubList>
  );
};

export default Github;
