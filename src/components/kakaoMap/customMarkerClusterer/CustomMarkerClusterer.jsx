import React from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import CustomMarker from './comtomMarker/CustomMarker';

const CustomMarkerClusterer = ({ posts }) => {
  return (
    <>
      <MarkerClusterer averageCenter={true} minLevel={10}>
        {posts?.map((post) => (
          <CustomMarker key={post.id} post={post} />
        ))}
      </MarkerClusterer>
    </>
  );
};

export default CustomMarkerClusterer;
