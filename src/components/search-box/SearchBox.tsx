import "./SearchBox.css";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <div>
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        // onChange search function
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
