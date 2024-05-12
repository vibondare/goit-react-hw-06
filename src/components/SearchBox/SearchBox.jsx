import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ inputValue, onSearch }) {
  const inputId = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.input}
        id={inputId}
        value={inputValue}
        onChange={(search) => onSearch(search.target.value)}
      />
    </div>
  );
}
