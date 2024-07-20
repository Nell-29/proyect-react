import { useContext } from "react";
import { ClassContext } from "../context/ClassContext";

export const useClass = () => {
    return useContext(ClassContext);
}