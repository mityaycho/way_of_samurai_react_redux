import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({editMode: true});
  };

  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({status: event.currentTarget.value});
  };

  render() {
    return (
      <>
        {!this.state.editMode &&
        <div className={style.spanText}>
          <span onClick={this.activateEditMode}>{this.props.status}</span>
        </div>}
        {this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange}
                 autoFocus={true}
                 onBlur={this.deactivateEditMode}
                 value={this.state.status}/>
        </div>}
      </>
    );
  }
}

export default ProfileStatus;