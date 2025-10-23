import Header from "../layout/Header";
import HeroSection from "../layout/HeroSection";
import ShowtimesSection from "../layout/ShowtimesSection";
import Carousel from "../ui/Carousel";
import Spinner from "../ui/Spinner";
import styles from "./Homepage.module.css";
import Modal from "../ui/Modal";
import TheaterSelector from "../ui/TheaterSelector";
import { useModal } from "../../contexts/ModalContext";

function Homepage() {
  const { showModal, content } = useModal();

  return (
    <div className={styles.homepage}>
      <Header />
      <HeroSection />
      <ShowtimesSection />
      {showModal && <Modal>{content}</Modal>}
    </div>
  );
}

export default Homepage;
