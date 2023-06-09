import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";

export default function ModifyHomeButton() {
  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(modifyUser({ name: "Sebas Ron" }));
  };
  return <button onClick={dispatchAction}>Dispatch Modify action</button>;
}
