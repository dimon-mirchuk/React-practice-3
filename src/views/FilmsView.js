import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

import * as api from "./Service/Service-api";
import mapper from "./helpers/Mapper";
import FilmGallery from "./components/filmGallery/FilmGallery";
import Button from "./components/button/Button";
import Loader from "./components/loader/Loader";
import Modal from "./components/modal/Modal";

function FilmsView() {
  const [page, setPage] = useState(1);
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    setIsLoading(true);
    api
      .getImages(page)
      .then(({ data }) => {
        setFilm((prevFilm) => [...prevFilm, ...mapper(data.results)]);
      })
      .catch(() => {
        console.log("Wops, something went wrong. Please try again later");
      })
      .finally(() => {
        setIsLoading(false);
        if (page > 1) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
      });
  }, [page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (modalImage) => {
    setImg(modalImage);
  };

  const closeModal = () => {
    setImg("");
  };
  return (
    <div>
      <FilmGallery films={film} onClickImg={openModal}></FilmGallery>
      <Button onClick={onLoadMore} />
      {isLoading && <Loader />}
      {img && <Modal closeModal={closeModal} modalImg={img} />}
    </div>
  );
}

export default FilmsView;
