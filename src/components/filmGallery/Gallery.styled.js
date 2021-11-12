import styled from "styled-components";

const FilmList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1170px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Title = styled.h2`
  color: green;
`;

const FilmListItem = styled.li`
  width: 370px;
  height: 300px;
  &:not(:nth-child(3n + 3)) {
    margin-right: 30px;
  }
  &:last-child {
    margin-right: 0px;
  }
  &:hover ${Title} {
    color: red;
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

export { FilmList, FilmListItem, Image, Title };
