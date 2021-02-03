import React from "react";
import Header from "./Header";
import CategoryList from "./CategoryList";
import "../custom.css";
import SearchItem from "./SearchItem";

export default function App() {
  return (
    <div>
      <Header />
      <SearchItem />
      <CategoryList />
    </div>
  );
}
