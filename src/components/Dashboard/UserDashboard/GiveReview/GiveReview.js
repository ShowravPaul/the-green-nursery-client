import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain';

const GiveReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser);

    const handleReview = () => {
        let inputReview = document.getElementById("review").value;
        let numOfStar = document.getElementById("numOfStar").value;
        const reviewData = {
            ...loggedInUser,
            inputReview,
            numOfStar
        };

        const url = `https://the-green-nursery.herokuapp.com/addReview`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))

        alert('Thank you!!');
        document.getElementById("review").value="";
        document.getElementById("numOfStar").value="";
    }

    return (
        <>
            <UserDashboardMain></UserDashboardMain>
            <div className="text-center mt-0">
                <h2 >How was your experience?</h2>
                <h3>Write something about us...</h3>
            </div>
            <div className="container" style={{ margin: "20px 20%" }}>
                <form action="">
                    <input id="review" type="text" placeholder="write something" required style={{width: "70%"}}/>
                    <br />
                    <br/>
                    <h4>Give stars out of 5: </h4>
                    <input id="numOfStar" type="number" placeholder="type an integer[1-5]" required style={{width: "20%"}}/>
                    <br />
                    <br/>
                    <div className="btn btn-primary" onClick={() => handleReview()}>submit</div>
                    
                </form>
            </div>
        </>
    );
};

export default GiveReview;
