import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <p className={css.text}>
          <FaUser className={css.icon} size="22" />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill className={css.icon} size="22" />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}