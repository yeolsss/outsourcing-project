import React from 'react';
import { MarkerClusterer } from 'react-kakao-maps-sdk';
import CustomMarker from './comtomMarker/CustomMarker';

const CustomMarkerClusterer = ({ posts }) => {
  console.log(posts);
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
