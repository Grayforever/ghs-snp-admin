import { useOutlet } from "react-router-dom";
import RegionalIndicator from "./subPages/regionalIndicator";

const DataViews = () => {
  const outlet = useOutlet();
  return <>{outlet || <RegionalIndicator />}</>;
};

export default DataViews;
