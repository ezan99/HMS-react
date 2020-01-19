import React, { Component } from 'react';
class Guests extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Username</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Country</th>
      <th scope="col">Personal ID</th>

    </tr>
  </thead>
  {/* <tbody>
      {this.state.bookings.map(res=>{
          return <tr>
            <th scope="row">1</th>
            <td>{res.startDate}</td>
            <td>{res.endDate}</td>
            <td>{res.roomId}</td>
            <td>{res.guestId}</td>
            <td>{res.price}</td>
            <td><button className="btn btn-primary">Edit</button></td>
            <td><button className="btn btn-danger" onClick={()=>this.handleDelete(res.id)}>Delete</button></td>
        </tr>
      })}
  </tbody> */}
</table>
            </div>
         );
    }
}
 
export default Guests;