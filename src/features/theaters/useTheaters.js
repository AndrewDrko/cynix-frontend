import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTheaters } from "./theatersSlice";

export function useTheaters() {
  const dispatch = useDispatch();

  const theaters = useSelector((state) => state.theaters.theaters);
  const status = useSelector((state) => state.theaters.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTheaters());
    }
  }, [dispatch, status]);

  return { theaters, status };
}
