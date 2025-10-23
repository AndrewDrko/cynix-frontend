import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Button from "./Button";
import styles from "./Carousel.module.css";
import { useEffect, useMemo, useState } from "react";
import Spinner from "./Spinner";
import ImageSlider from "./ImageSlider";

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

function Carousel() {
  const [topMovies, setTopMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(function () {
    async function getMovies() {
      try {
        // setIsLoading(true);
        const res = await fetch(`${API_URL}/api/v1/movie`);
        const data = await res.json();
        setTopMovies(data.data.movies);
      } catch (error) {
        console.error(error);
      } finally {
        // setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  const cachedImages = useMemo(() => {
    return topMovies.map((movie) => {
      const img = new Image();
      img.src = `${API_URL}${movie.bannerUrl}`;
      return img;
    });
  }, [topMovies]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) =>
        index >= topMovies.length - 1 ? 0 : index + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [topMovies, currentIndex]);

  function handleSliderNext() {
    setCurrentIndex((index) => (index >= topMovies.length - 1 ? 0 : index + 1));
  }

  function handleSliderPrevious() {
    setCurrentIndex((index) => (index <= 0 ? topMovies.length - 1 : index - 1));
  }

  return (
    <div className={styles.container}>
      {topMovies && topMovies.length > 0 ? (
        <>
          <Button
            type="secondary"
            shape="circle"
            className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
            onClick={handleSliderPrevious}
          >
            <MdKeyboardArrowLeft />
          </Button>
          <ImageSlider
            image={`${cachedImages[currentIndex].src}`}
            name={topMovies[currentIndex].title}
            description={topMovies[currentIndex].synopsis}
            trailer={topMovies[currentIndex].trailerUrl}
          />
          <Button
            type="secondary"
            shape="circle"
            className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
            onClick={handleSliderNext}
          >
            <MdKeyboardArrowRight />
          </Button>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Carousel;
