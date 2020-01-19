import React, { Component } from 'react';
class Bookings extends Component {
    state = { 
        bookings: [
            {
                id: 1,
                startDate: '2020-01-20',
                endDate: '2020-01-25',
                roomId: 2,
                guestId: 1,
                price: 200
            }
            
        ]
     }

     componentDidMount = () => {
        console.log('mounted');
     }

     handleDelete = (id) => {
         console.log('Deleted booking with id ' + id);
     }
    render() { 
        return ( 
            <div>
                <table class="table table-dark">
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
  </tbody>
</table>
            </div>
         );
    }
}
 
export default Bookings;