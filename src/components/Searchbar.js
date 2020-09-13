import React from "react";
import { Input } from "antd";
const { Search } = Input;

const defaultStyles = {
  width: "55vh",
  padding: 10,
};

const Searchbar = ({ style, size, placeholder, onSearch }) => {
  return (
    <Search
      placeholder={placeholder}
      enterButton
      size={size}
      style={{ ...defaultStyles, ...style }}
      onSearch={(value) => console.log(value)}
    />
  );
};

export default Searchbar;
