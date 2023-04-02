import { UserEmptyState } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMorty, mortyUrl } from "../services";

export default function CreateHomeButton() {
  const dispatch = useDispatch();
  const [morty, setMorty] = useState(UserEmptyState);

  const getMorty = async () => {
    const result = await fetchMorty(mortyUrl);
    setMorty(result);
  };

  useEffect(() => {
    getMorty();
  }, []);

  const dispatchAction = () => {
    dispatch(createUser(morty));
  };
  return <button onClick={dispatchAction}>Dispatch Create action</button>;
}
