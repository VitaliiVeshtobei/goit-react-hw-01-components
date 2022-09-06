import styled from 'styled-components';

export const SectionStatistics = styled.section`
  background-color: #f7f9fa;
  padding-top: 20px;
`;
export const TitleStat = styled.h2`
  padding: 0;
  margin: 0;
`;

export const StaticList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding-left: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #a4abaa;

  margin: 0px;
  margin-top: 10px;
`;

export const StaticSpanLabel = styled.span`
  display: block;
  margin-bottom: 10px;

  letter-spacing: 0.06em;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.9;
`;
export const StaticSpanPerc = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 2;
`;

export const StaticItem = styled.li`
  width: 100px;
  background-color: ${'#' +
  (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()};
`;
