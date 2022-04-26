import React from "react";
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ placeholder }) {
  const [isFocus, setIsFocus] = React.useState(false);
  return (
    <div
      className={isFocus ? "widgetsSearch widgetsSearchFocus" : "widgetsSearch"}
    >
      <SearchIcon
        className={
          isFocus
            ? "widgetsSearchIcon widgetsSearchIconFocus"
            : "widgetsSearchIcon"
        }
      />
      <input
        className="widgetsSearchInput"
        type="text"
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
}

export default SearchBar;