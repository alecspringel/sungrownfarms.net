import React from 'react';
import GoogleMapReact from 'google-map-react';

const style = () => ({
  styles: [
    {
      featureType: 'water',
      stylers: [
        {
          color: '#AFD2E9',
        },
      ],
    },
  ],
});

const Map = () => {
  const sungrownLocation = {
    center: {
      lat: 47.240607,
      lng: -123.136142,
    },
    zoom: 11,
  };
  return (
    <>
      <div style={{
        width: '100%', height: 600, position: 'relative', maxHeight: '90vh',
      }}
      >
        {/* <QuestionBox id="legend">
        <p style={{ fontSize: 18 }}>Where is your exact location?</p>
      </QuestionBox> */}
        <GoogleMapReact
          options={style}
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: 'AIzaSyCSDqYHgioyB18I2lCzlGX7XO8JtLhGuk8' }}
          defaultCenter={sungrownLocation.center}
          defaultZoom={sungrownLocation.zoom}
          onGoogleApiLoaded={({ map, maps }) => {
            map.controls[maps.ControlPosition.TOP_LEFT].push(document.getElementById('legend'));
            // eslint-disable-next-line no-new
            new maps.Marker({
              position: sungrownLocation.center,
              map,
            });
            // new maps.Circle({
            //   strokeColor: '#5D8F51',
            //   strokeOpacity: 0.8,
            //   strokeWeight: 2,
            //   fillColor: '#5D8F51',
            //   fillOpacity: 0.3,
            //   map,
            //   center: { lat: sungrownLocation.center.lat, lng: sungrownLocation.center.lng },
            //   radius: 10000,
            // });
          }}
        />
      </div>
      {/* <div className="text-center">
        <p style={{ maxWidth: 800, fontSize: 14, color: '#8a867f' }} className="m-t20 m-auto">
          Security is our highest priority at Sungrown Farms. The precise location of our park
          is hidden to protect our tenants and their businesses. Please
          reach out to schedule a tour or learn more about our location.
        </p>
      </div> */}
    </>
  );
};

export default Map;

// const QuestionBox = styled.aside`
//   cursor: pointer;
//   background-color: #fff;
//   color: #666;
//   height: 40px;
//   margin-left: 10px;
//   margin-top: 10px;
//   padding: 8px;
//   box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
//   border-radius: 2px;
//   display: flex;
//   align-items: center;
//   :hover {
//     color: var(--text-color);
//   }
// `;
