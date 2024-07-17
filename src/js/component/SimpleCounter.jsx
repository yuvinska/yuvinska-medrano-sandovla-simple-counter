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
        <>
            <div className="ccounter">
                <div className="clock">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                </div>
                <div className="six">{digitSix}</div>
                <div className="five">{digitFive}</div>
                <div className="four">{digitFour}</div>
                <div className="tree">{digitThree}</div>
                <div className="two">{digitTwo}</div>
                <div className="one">{digitOne}</div>
            </div>
        </>
    );
};

export default SimpleCounter;





