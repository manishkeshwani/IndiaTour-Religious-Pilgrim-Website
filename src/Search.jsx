import React from "react";

const Search = () => {
  return (
    <section className="tour-search">
      <div className="container">
        <form action="" className="tour-search-form">
          <div className="input-wrapper">
            <label for="destination" className="input-label">
              Search Destination*
            </label>

            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="Enter Destination"
              className="input-field"
            />
          </div>

          <div className="input-wrapper">
            <label for="people" className="input-label">
              Number Of Travellers*
            </label>

            <input
              type="number"
              name="people"
              id="people"
              required
              placeholder="No.of People"
              className="input-field"
            />
          </div>

          <div className="input-wrapper">
            <label for="checkin" className="input-label">
              Checkin Date*
            </label>

            <input
              type="date"
              name="checkin"
              id="checkin"
              required
              className="input-field"
            />
          </div>

          <div className="input-wrapper">
            <label for="checkout" className="input-label">
              Checkout Date*
            </label>

            <input
              type="date"
              name="checkout"
              id="checkout"
              required
              className="input-field"
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Inquire now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
