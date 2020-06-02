import React from "react";
import { connect } from "react-redux";

const Filters = ({ filter, dispatch }) => (
  <select
    value={filter}
    onChange={(e) =>
      dispatch({
        type: "CHANGE_FILTER",
        filter: e.target.value,
      })
    }
  >
    <option value="SHOW_ALL">Show all</option>
    <option value="SHOW_TODO">Show todo</option>
    <option value="SHOW_DONE">Show done</option>
  </select>
);
const mapStateToProps = (state) => ({
  filter: state.filter,
});
export default connect(mapStateToProps)(Filters);
