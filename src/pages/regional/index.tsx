import { useOutlet } from "react-router-dom";
import Reports from "./subPages/reports";

const Regional = () => {
  const outlet = useOutlet();
  return <>{outlet || <Reports />}</>;
};

export default Regional;
