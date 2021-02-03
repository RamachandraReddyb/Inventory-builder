import React, { useState, useEffect } from "react";
import SubCategoryList from "./SubCategoryList";

export default function CategoryList() {
  const [inventoryData, setInventoryData] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  useEffect(() => {
    let tempData = JSON.parse(localStorage.getItem("categories"));
    if (tempData) {
      setInventoryData(tempData);
    } else {
      fetch("./data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setInventoryData(data));
    }
    return () => {};
  }, []);

  const handleToggleClicks = (e, val) => {
    let id = e.target.id;
    let attr = val;
    let data = inventoryData;
    const newData = data.map((element) => {
      if (element.id === parseInt(id)) {
        element[attr] = !element[attr];
      }
      return element;
    });
    setInventoryData(newData);
    localStorage.setItem("categories", JSON.stringify(inventoryData));
  };

  return (
    <div className="ui ui-container pb-20">
      <div className="ui grid ind-item-grid">
        <div className="six column row fs-12">
          <div className="column">Item Name</div>
          <div className="column">Color</div>
          <div className="column">Options</div>
          <div className="column">Sku id</div>
          <div className="column">Stocks</div>
          <div className="column right floated right aligned pr-20">
            Actions
          </div>
        </div>
      </div>
      {inventoryData.map(({ id, name, availability, isShow, subcategory }) => {
        return (
          <div className="main-category mb-20" key={id}>
            <div className="ui grid segment bg-header border-none">
              <div className="three column row">
                <div className="left floated column">{name}</div>
                <div className="right aligned floated column">
                  <label className="mr-20">Availability</label>
                  <div className="ui toggle checkbox">
                    <input
                      id={id}
                      type="checkbox"
                      checked={availability}
                      onChange={(e) => handleToggleClicks(e, "availability")}
                      name="public"
                    />
                    <label>
                      <i
                        id={id}
                        onClick={(e) => handleToggleClicks(e, "isShow")}
                        className={
                          "icon " +
                          (availability && isShow ? "minus blue" : "plus")
                        }
                      ></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {availability && isShow && <SubCategoryList list={subcategory} />}
          </div>
        );
      })}
    </div>
  );
}
