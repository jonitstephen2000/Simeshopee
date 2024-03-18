import React, { useState } from 'react';
import './Products.css';
import { datalist } from './data';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'; // Assuming we are using React Router
import { MDBBtn } from "mdb-react-ui-kit";

const Products = () => {
  const [data, setData] = useState(datalist);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6; // Number of items per page (2 horizontally, 3 vertically)

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(0); // Reset page number when searching
  };

  let displayData;
  if (filteredData.length > 0) {
    displayData = filteredData
      .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
      .map((item) => (
        <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={item.image} alt="" />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <h4 className="card-subtitle mb-2 text-muted">{item.price}</h4>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary">Add to cart</button>
              <span style={{ marginRight: '1cm' }}></span> {/* Space of 1cm */}
               <Link to={`/slice-payment/${item.id}`}><MDBBtn>Buy</MDBBtn></Link>
            </div>
          </div>
        </div>
      ));
  } else {
    displayData = <p>Item not found.</p>;
  }

  return (<div>
      <div>
        <input className="input1" type="search" name="search" placeholder="search" value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div className="row">{displayData}</div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Products;
