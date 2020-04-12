import React from "react";

class NewTodo extends React.Component {
  state = {
    name: "",
    is_status: false
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim()) {
      this.props.onAddTodo(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      is_status: false
    });
  };

  render() {
    return (
      <div className="mb-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTodo;
