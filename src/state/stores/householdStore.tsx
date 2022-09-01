import { createRoot } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { HouseHold } from "../../types/HouseHold";

const DUMMY_HOUSEHOLDS: HouseHold[] = [new HouseHold("hh1")];

const createHouseHolds = () => {
  const [houseHolds, setHouseHolds] = createStore<HouseHold[]>(DUMMY_HOUSEHOLDS);
  const addHouseHold = () => {
    setHouseHolds(
      produce(households => {
        households.push(new HouseHold());
      })
    );
  };
  return { houseHolds, addHouseHold };
};

export default createRoot(createHouseHolds);
