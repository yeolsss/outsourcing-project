import locationPin from '../../../../assets/together.png';
import CustomMapMarkerOverlay from '../../customMapMarker/CustomMapMarkerOverlay';
import { MapMarker } from 'react-kakao-maps-sdk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleMarker,
  selectCurrentMarker,
} from '../../../../redux/module/currentMarker.slice';

const CustomMarker = ({ post }) => {
  // redux 가져와
  const { isOpen, selectedMarkerId } = useSelector(selectCurrentMarker);
  const dispatch = useDispatch();

  const handleOnClickMarker = (id) => {
    dispatch(handleMarker(id));
  };

  return (
    <>
      <MapMarker
        position={{ lat: post.lat, lng: post.lng }}
        onClick={() => handleOnClickMarker(post.id)}
        image={{
          src: locationPin, // 마커이미지의 주소입니다
          size: {
            width: 36,
            height: 40,
          },
        }}
      >
        {isOpen && selectedMarkerId === post.id && (
          <CustomMapMarkerOverlay
            title={post.name}
            position={{ lat: post.lat, lng: post.lng }}
          />
        )}
      </MapMarker>
    </>
  );
};

export default CustomMarker;
