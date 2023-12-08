import React from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import CustomMarker from './comtomMarker/CustomMarker';

const CustomMarkerClusterer = ({ togethers }) => {
  return (
    <>
      <MarkerClusterer averageCenter={true} minLevel={10}>
        {togethers?.map((together) => (
          <CustomMarker key={together.id} together={together} />
        ))}
      </MarkerClusterer>
    </>
  );
};

export default CustomMarkerClusterer;
