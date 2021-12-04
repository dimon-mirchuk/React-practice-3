import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import { getFilmDetails } from "../Service/Service-api";

const FilmDetails = () => {
  const [film, setFilm] = useState([]);
  const { filmId } = useParams();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    getFilmDetails(filmId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch((error) => console.log(error));
  }, [filmId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/films");
  };

  const { original_title, release_date, popularity, overview, status } = film;
  return (
    <section>
      <h1>{original_title}</h1>
      <p>{release_date}</p>
      <p>{popularity}</p>
      <p>{overview}</p>
      <p>{status}</p>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
    </section>
  );
};

export default FilmDetails;

// original title, relise date, popularity, overview,status
