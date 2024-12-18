import { Fragment } from "react";
import Counter from "./Counter";

const SectionTitle = ({
  title,
  countValue,
  subtitle1,
  subtitle2,
  bg,
}) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>
        {subtitle1}
        {countValue && countValue > 0 ? (
          <span className={`count-text plus ${bg}`}>
            <Counter end={countValue} />
          </span>
        ) : (
          <></>
        )}
        {" "}
        {subtitle2}
      </p>
    </Fragment>
  );
};

export default SectionTitle;