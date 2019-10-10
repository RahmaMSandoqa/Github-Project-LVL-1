import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    return (
      <div style={{ border: "3px green dotted" }}>
        <table>
          {this.props.reposTable.map(elem => {
            return <Repo repo={elem} />;
          })}
        </table>
      </div>
    );
  }
}
