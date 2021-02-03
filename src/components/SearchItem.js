import React from "react";

export default function SearchItem() {
  return (
    <div className="ui-container mt-40 mb-30">
      <form>
        <div class="ui seven column grid">
          <div class="column">
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
          <div class="column">
            <button class="ui primary button mini circular">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
