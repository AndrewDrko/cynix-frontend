import Header from "../layout/Header";
import HeroSection from "../layout/HeroSection";
import ShowtimesSection from "../layout/ShowtimesSection";
import styles from "./Homepage.module.css";
import Modal from "../ui/Modal";

// import { AnimatePresence } from "framer-motion";
// import { useEffect } from "react";

const API_KEY = "8yZbl+r3sTHgIrIYx8O6sA==iulY7jx1bVRUwo4U";

function Homepage() {
  // useEffect(function () {
  //   async function getCelebrity() {
  //     const res = await fetch(
  //       "https://api.api-ninjas.com/v1/celebrity?name=Michael Jordan",
  //       {
  //         method: "GET",
  //         headers: {
  //           "X-Api-Key": "8yZbl+r3sTHgIrIYx8O6sA==iulY7jx1bVRUwo4U",
  //           "Content-Type": API_KEY,
  //         },
  //       }
  //     );
  //     const data = await res.json();

  //     console.log(data);
  //   }

  //   getCelebrity();
  // });

  return (
    <div className={styles.homepage}>
      <Header />
      <HeroSection />
      <ShowtimesSection />
    </div>
  );
}

export default Homepage;
