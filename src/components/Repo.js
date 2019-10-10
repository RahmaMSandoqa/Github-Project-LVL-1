import React, { Component } from "react";

export default class Repo extends Component {
  render() {
    return (
      <div style={{ border: "3px red solid" }}>

        <tr>
          
          <td>{this.props.id}</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>

        </tr>

        <p>{this.props.repo.title}</p>
        <p>{this.props.repo.id}</p>
      </div>
    );
  }
}
