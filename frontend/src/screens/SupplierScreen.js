import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsSupplier, saveSupplierReview } from '../actions/supplierActions';
// import Rating from '../components/Rating';
// import { SUPPLIER_REVIEW_SAVE_RESET } from '../constants/supplierConstants';

function SupplierScreen(props) {
  const [qty, setQty] = useState(1);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const supplierDetails = useSelector((state) => state.supplierDetails);
  const { supplier, loading, error } = supplierDetails;
  // const supplierReviewSave = useSelector((state) => state.supplierReviewSave);
  const { success: supplierSaveSuccess } = supplierReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (supplierSaveSuccess) {
      alert('Review submitted successfully.');
      // setRating(0);
      // setComment('');
      // dispatch({ type: SUPPLIER_REVIEW_SAVE_RESET });
    }
    dispatch(detailsSupplier(props.match.params.id));
    return () => {
      //
    };
  }, [supplierSaveSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    // dispatch(
    //   saveSupplierReview(props.match.params.id, {
    //     name: userInfo.name,
    //     rating: rating,
    //     comment: comment,
    //   })
    // );
  };
  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={supplier.image} alt="supplier"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{supplier.name}</h4>
                </li>
                {/* <li>
                  <a href="#reviews">
                    <Rating
                      value={supplier.rating}
                      text={supplier.numReviews + ' reviews'}
                    />
                  </a>
                </li> */}
                <li>
                  Email: <b>${supplier.email}</b>
                </li>
                <li>
                  Location:
                  <div>{supplier.location}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Email: {supplier.email}</li>
                <li>
                  Status:{' '}
                  {supplier.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  Qty:{' '}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(supplier.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {supplier.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary"
                    >
                      Add to Order
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="content-margined">
            {/* <h2>Reviews</h2> */}
            {/* {!supplier.reviews.length && <div>There is no review</div>} */}
            <ul className="review" id="reviews">
              {/* {supplier.reviews.map((review) => (
                <li key={review._id}>
                  <div>{review.name}</div>
                  <div>
                    <Rating value={review.rating}></Rating>
                  </div>
                  <div>{review.createdAt.substring(0, 10)}</div>
                  <div>{review.comment}</div>
                </li>
              ))} */}
              <li>
                {/* <h3>Write a customer review</h3> */}
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      {/* <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li> */}
                      {/* <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li> */}
                      {/* <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li> */}
                    </ul>
                  </form>
                ) : (
                  <div>
                    {/* Please <Link to="/signin">Sign-in</Link> to write a review. */}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
export default SupplierScreen;
