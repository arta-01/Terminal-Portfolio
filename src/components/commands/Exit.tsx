import { useContext } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Exit: React.FC = () => {

    window.close()
};

export default Exit;
