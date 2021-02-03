import React from "react";

export default function SearchItem() {
  return (
    <div className="ui-container mt-40 mb-30">
      <form>
        <div className="ui seven column grid">
          <div className="column">
            <div className="ui fluid category mini search">
              <div className="ui icon input">
                <i className="times circle icon"></i>
                <input
                  className="prompt bg-grey"
                  type="text"
                  placeholder="Search items..."
                />
              </div>
            </div>
          </div>
          <div className="column">
            <button className="ui primary button mini circular">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
