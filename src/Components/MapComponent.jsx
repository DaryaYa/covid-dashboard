import {
    MapContainer,
    TileLayer,
    LayerGroup,
    Popup,
    Circle,
    FeatureGroup,
} from "react-leaflet";

export const MapComponent = ({ countriesInfo }) => {
    return (
        <MapContainer
            center={[40, 0]}
            zoom={2}
            scrollWheelZoom={true}
            style={{ height: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
            {countriesInfo.result &&
                countriesInfo.result.map((item, index) => {
                    let lat = item.countryInfo.lat;
                    let long = item.countryInfo.long;
                    let deathes = item.deaths;
                    let maxWeight = 50;
                    let maxDeaths = 300000;

                    let HSLA = 100 - ((deathes / maxDeaths) * 50 + 35);
                    let weight = (maxWeight * deathes) / maxDeaths;
                    return (
                        <FeatureGroup>
                            <Popup>
                                {item.country + `: deathes - ${deathes}`}
                            </Popup>
                            <Circle
                                center={[lat, long]}
                                pathOptions={{
                                    color: `hsl(0 70% ${HSLA}% / 1)`,
                                    weight: `${
                                        weight < 10 ? weight + 10 : weight
                                    }`,
                                }}
                                key={index}
                            />
                        </FeatureGroup>
                    );
                })}
        </MapContainer>
    );
};
