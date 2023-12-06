import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import logoImage from '../../assets/logo.png';
import CustomMapMarker from './customMapMarker/CustomMapMarker';
import { useDispatch, useSelector } from 'react-redux';
import {
  __setAddress,
  selectPosition,
} from '../../redux/module/position.slice';

function KakaoMap() {
  const position = useSelector(selectPosition);
  const [isOpen, setIsOpen] = useState(false);
  const [marker, setMarker] = useState(position);

  const dispatch = useDispatch();

  const handleOnClickPosition = (_target, mouseEvent) => {
    const position = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    dispatch(__setAddress({ ...position }));
    setMarker(position);
  };

  return (
    <>
      <Map
        center={{ lat: marker.lat, lng: marker.lng }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%' }} // 지도 크기
        level={5} // 지도 확대 레벨
        onClick={(e, mouseEvent) => handleOnClickPosition(e, mouseEvent)}
      >
        <MapMarker
          position={marker} // 마커를 표시할 위치
          onClick={() => setIsOpen(!isOpen)}
          image={{
            src: logoImage, // 마커이미지의 주소입니다
            size: {
              width: 60,
              height: 60,
            },
          }}
        >
          {isOpen && <CustomMapMarker />}
        </MapMarker>
      </Map>
    </>
  );
}

export default KakaoMap;
