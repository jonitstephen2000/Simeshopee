import React, { useState, useRef } from 'react';
import './Products.css';
import { datalist } from './productData';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { MDBBtn } from "mdb-react-ui-kit";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMicFill } from 'react-icons/bs'; // Import microphone icon
import { useSelector, useDispatch } from "react-redux"; 
import { addToCart } from "../Components/features/cartSlice"; 

const Products = () => {
  const [data] = useState(datalist);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;
  const searchInputRef = useRef(null); // Reference to the search input field

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  const handleSpeakOut = () => {
    const isConfirmed = window.confirm("Do you want to use your microphone to search?");
    if (isConfirmed) {
      // Start recording the voice 
      console.log("Recording voice...");
      // Focus on the search input field when the microphone is clicked
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };

  const hideIconClass = searchTerm ? 'hide-icon' : '';

  const dispatch = useDispatch(); 

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
  };

  let displayData;
  if (filteredData.length > 0) {
    displayData = filteredData
      .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
      .map((item) => (
        <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
          <div className="card" style={{ width: '100%' }}>
            <img className="card-img-top" src={item.img} alt="" />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <h4 className="card-subtitle mb-2 text-muted">{item.price}</h4>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add to cart</button>
              <span style={{ marginRight: '1cm' }}></span>
              <Link to={`/slice-payment/${item.id}`}><MDBBtn>Buy</MDBBtn></Link>
            </div>
          </div>
        </div>
      ));
  } else {
    displayData = <p>Item not found.</p>;
  }

  return (
    <div>
      <div className="search-container">
        <input 
          className="input1" 
          type="search" 
          name="search" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          ref={searchInputRef} // Assign the ref to the input field
        />
        <AiOutlineSearch className={`search-icon ${hideIconClass}`} />
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
      <div className="about-search-box-container" style={{ position: "fixed", bottom: "35px", marginRight: "-19px" }}>
        <form className="search-box" action="" method="post" style={{ marginLeft: "1300px" }}>
          <button className="watch-video-button" type="button" onClick={handleSpeakOut} name="button">
            {/* Speak Out to Search */}
            <BsMicFill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;
