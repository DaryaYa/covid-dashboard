import { MapComponent } from "./MapComponent";

export const MapBox = ({ countriesInfo }) => {
    return (
        <div
            id="mapBox"
            style={{
                gridArea: "1/2/3/3",
                overflow: "hidden",
            }}
        >
            <MapComponent
                countriesInfo={countriesInfo}
                styles={{ width: "50px" }}
            ></MapComponent>
        </div>
    );
};
