import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const inputId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.input}
        id={inputId}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}
