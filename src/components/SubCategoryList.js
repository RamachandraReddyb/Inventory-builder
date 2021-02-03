import React, { useState } from "react";
import Item from "./Item";

export default function SubCategoryList(props) {
  const [data, setdata] = useState(props.list);

  const handleToggleClicks = (e, val) => {
    let id = e.target.id;
    let attr = val;
    const newData = props.list.map((element) => {
      if (element.id === parseInt(id)) {
        element[attr] = !element[attr];
      }
      return element;
    });
    setdata(newData);
  };

  return data.map(({ id, name, availability, isShow, items }) => {
    return (
      <div className="sub-category" key={props.id + "-" + id}>
        <div className="ui grid segment bg-header">
          <div className="two column row">
            <div className="left floated column fs-13">{name}</div>
            <div className="right aligned floated column">
              <label className="mr-20">Availability</label>
              <div className="ui toggle checkbox">
                <input
                  id={id}
                  type="checkbox"
                  checked={availability}
                  onChange={(e) => handleToggleClicks(e, "availability")}
                  name={"public-" + { id }}
                />
                <label>
                  <i
                    id={id}
                    onClick={(e) => handleToggleClicks(e, "isShow")}
                    className={
                      "icon " + (availability && isShow ? "minus blue" : "plus")
                    }
                  ></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        {availability && isShow && <Item list={items} />}
      </div>
    );
  });
}
