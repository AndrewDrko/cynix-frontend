import { useSelector, useDispatch } from "react-redux";
import { selectCinema, toggleFavorite } from "./preferencesSlice";

export function usePreferences() {
  const dispatch = useDispatch();

  const selectedCinema = useSelector(
    (state) => state.preferences.selectedCinema
  );

  const favoriteCinemas = useSelector(
    (state) => state.preferences.favoriteCinemas
  );

  // ✅ Helpers
  const isFavorite = (id) => favoriteCinemas.includes(id);

  // ✅ Actions
  const handleSelectCinema = (id) => {
    dispatch(selectCinema(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return {
    selectedCinema,
    favoriteCinemas,
    isFavorite,
    handleSelectCinema,
    handleToggleFavorite,
  };
}
