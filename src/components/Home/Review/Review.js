import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://the-green-nursery.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    let indx = 0;
    return (
        <section className=" p-3" style={{backgroundColor: "rgb(249, 250, 215)"}}>
            <div className="text-center">
                <h2 className="mt-5">What customers say...</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-3">
                    {
                        reviews.map(review => <ReviewDetails review={review} key={indx++}></ReviewDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;
