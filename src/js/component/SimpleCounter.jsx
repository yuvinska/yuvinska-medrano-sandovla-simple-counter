import React from "react";

const SimpleCounter = (props) => {
    let digitOne = props.seconds;
    let digitTwo = 0;
    let digitThree = 0;
    let digitFour = 0;
    let digitFive = 0;
    let digitSix = 0;

    if (props.seconds > 9) {
        digitTwo = Math.floor(props.seconds / 10);
        digitOne = props.seconds % 10;
        
        if (digitTwo > 9) {
            digitThree = Math.floor(digitTwo / 10);
            digitTwo = digitTwo % 10;

            if (digitThree > 9) {
                digitFour = Math.floor(digitThree / 10);
                digitThree = digitThree % 10;

                if (digitFour > 9) {
                    digitFive = Math.floor(digitFour / 10);
                    digitFour = digitFour % 10;

                    if (digitFive > 9) {
                        digitSix = Math.floor(digitFive / 10);
                        digitFive = digitFive % 10;
                    }
                }
            }
        }
    }

    return (
        <div className="container-flex">
            <div className="row">
                <div className="col-12">
                    <h1>{digitSix}</h1>
                    <h1>{digitFive}</h1>
                    <h1>{digitFour}</h1>
                    <h1>{digitThree}</h1>
                    <h1>{digitTwo}</h1>
                    <h1>{digitOne}</h1>
                </div>
            </div>
        </div>
    );
};

export default SimpleCounter;