import React from "react";

export const ShowTotalCases = (props) => {
    return (
        <div>
            <div>
                <p>Total Cases</p>
                <p>{props.currentCountryTotalConfirmed}</p>
            </div>
        </div>
    );
};
