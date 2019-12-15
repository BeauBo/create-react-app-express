import React from 'react';
import './customers.css';

function Customers() {
  const [customers, setCustomers] = React.useState([])

  React.useEffect(() => {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => setCustomers(customers))
  })

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => (
          <li>{`${customer.firstName} ${customer.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
