import PropTypes from "prop-types";
import { FilmList, FilmListItem, Image, Title } from "./Gallery.styled";

const FilmGallery = ({ films, onClickImg }) => {
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
