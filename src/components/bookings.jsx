import React, { Component } from "react";
import axios from "axios";

class Bookings extends Component {
  state = {
    bookings: []
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost/hotel/api/controllers/booking/read.php`)
      .then(res => {
        const bookings = res.data.records;
        this.setState({ bookings });
        // console.log(bookings);
      });
  };

  handleDelete = id => {
    axios
      .post(`http://localhost/hotel/api/controllers/booking/delete.php`, {
        id: id
      })
      .then(res => {
        console.log(res);
        if (res.status === 200 && res.statusText === "OK") {
          const bookings = this.state.bookings.filter(
            booking => booking.id !== id
          );
          this.setState({ bookings });
        }
      });
  };
  render() {
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Room Id</th>
              <th scope="col">Guest Id</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookings.map(res => {
              return (
                <tr key={res.id}>
                  <th scope="row">1</th>
                  <td>{res.startDate}</td>
                  <td>{res.endDate}</td>
                  <td>{res.roomId}</td>
                  <td>{res.guestId}</td>
                  <td>{res.price}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(res.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bookings;
