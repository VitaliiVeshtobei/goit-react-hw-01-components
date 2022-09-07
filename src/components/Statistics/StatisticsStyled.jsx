import styled from 'styled-components';

export const SectionStatistics = styled.section`
  background-color: #f7f9fa;
  padding-top: 20px;
  padding-bottom: 20px;
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

const setBgColor = ({ label }) => {
  switch (label) {
    case '.docx':
      return (
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      );
    case '.pdf':
      return (
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      );
    case '.mp3':
      return (
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      );
    case '.psd':
      return (
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      );
    case '.pdf':
      return (
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      );
    default:
      return '#ffff';
  }
};

export const StaticItem = styled.li`
  width: 100%;
  background-color: ${setBgColor};
`;
