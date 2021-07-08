import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Root } from "../Store";

export const useTypedSelector: TypedUseSelectorHook<Root> = useSelector;
