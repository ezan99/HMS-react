import React, { Component } from "react";
import axios from "axios";

class CreateBooking extends Component {
  state = {
      addedBy: 1
  };

  handleSubmit = () => {
      const bookingObj = {
          startDate: document.getElementById('startDate').value,
          endDate: document.getElementById('endDate').value,
          roomId: document.getElementById('roomId').value,
          guestId: document.getElementById('guestId').value,
          price: document.getElementById('price').value,
          addedBy: this.state.addedBy
      }
    axios.post(`http://localhost/hotel/api/controllers/booking/create.php`, bookingObj )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  handleChange = event =>{
    this.setState({ startDate: event.target.value});
    this.setState({ endDate: event.target.value});
    this.setState({ roomId: event.target.value});
    this.setState({ guestId: event.target.value});
    this.setState({ addedBy: event.target.value});

  }

  render() {
    return (
      <div className="mt-5">
        <form>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              className="form-control"
              id="startDate"
              placeholder="yyyy-mm-dd"
              name="startDate"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              className="form-control"
              id="endDate"
              placeholder="yyyy-mm-dd"
              name="endDate"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="roomId">Room Id</label>
            <input
              type="number"
              className="form-control"
              id="roomId"
              placeholder="Room Id"
              name="roomId"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="guestId">Guest Id</label>
            <input
              type="number"
              className="form-control"
              id="guestId"
              placeholder="Guest Id"
              name="guestId"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
              name="price"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" onClick = {() => this.handleSubmit()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateBooking;
