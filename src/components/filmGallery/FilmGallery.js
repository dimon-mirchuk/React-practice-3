import PropTypes from "prop-types";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { FilmList, FilmListItem, Image, Title } from "./Gallery.styled";

const FilmGallery = ({ films, onClickImg }) => {
  const { url } = useRouteMatch();
  const location = useLocation();
  if (films.length === 0) return null;
  return (
    <FilmList>
      {films.map(({ id, img, title, text }) => (
        <FilmListItem key={id}>
          <Title>{title}</Title>
          <Image
            src={`https://image.tmdb.org/t/p/w400/${img}`}
            alt={title}
            onClick={() => onClickImg(img)}
          />
          <Link
            to={{
              pathname: `${url}/${id}`,
              state: { from: location },
            }}
          >
            About Film
          </Link>
          {/* <p>{text}</p> */}
        </FilmListItem>
      ))}
    </FilmList>
  );
};

FilmGallery.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmGallery;
