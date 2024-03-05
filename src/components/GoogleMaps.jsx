import GoogleMapReact from 'google-map-react';

const Location = ({ text }) => <div>{text}</div>;

export default function GoogleMaps(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Location
          lat={41.544937}
          lng={-87.889828}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}