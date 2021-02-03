import React, { useState } from "react";

export default function Item(props) {
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

  const handleSave = (e) => {
    handleToggleClicks(e, "isEdit");
  };

  const handleStockChange = (e) => {
    const newData = props.list.map((element) => {
      if (element.id === parseInt(e.target.id)) {
        element.stocks = e.target.value;
      }
      return element;
    });
    setdata(newData);
  };

  return data.map(
    ({ id, name, color, options, skuid, stocks, isEdit, isUnlimited }) => {
      return (
        <div className="ui grid ind-item" key={id}>
          <div className="six column row ui segment">
            <div className="column">{name}</div>
            <div className="column">{color}</div>
            <div className="column">{options}</div>
            <div className="column">{skuid}</div>
            <div className="column">
              {isEdit && (
                <div className="ui two column grid">
                  <div
                    className={
                      "column ui mini icon input w-65 " +
                      (stocks || isUnlimited ? "" : "error")
                    }
                  >
                    <input
                      id={id}
                      type="text"
                      className="radius-500 bg-grey"
                      placeholder="Enter value"
                      defaultValue={stocks}
                      onChange={(e) => handleStockChange(e)}
                    />
                  </div>
                  <div className="column pt-20 fs-12">
                    <div className="ui checkbox">
                      <input
                        id={id}
                        type="checkbox"
                        name={"unlimited-" + { id }}
                        checked={isUnlimited}
                        onChange={(e) => handleToggleClicks(e, "isUnlimited")}
                      />
                      <label>Unlimited</label>
                    </div>
                  </div>
                </div>
              )}
              {!isEdit && <span> {isUnlimited ? "Unlimited" : stocks}</span>}
            </div>
            <div className="right aligned floated column">
              <button
                id={id}
                style={{ display: isEdit ? "block" : "none" }}
                className={
                  "ui circular blue button mini f-right " +
                  (stocks || isUnlimited ? "" : "disabled")
                }
                onClick={(e) => handleSave(e, stocks)}
              >
                Save
                <i className="save icon right aligned"></i>
              </button>
              <i
                id={id}
                style={{ display: !isEdit ? "block" : "none" }}
                className="pencil icon f-right mr-20"
                onClick={(e) => handleToggleClicks(e, "isEdit")}
              ></i>
            </div>
          </div>
        </div>
      );
    }
  );
}
