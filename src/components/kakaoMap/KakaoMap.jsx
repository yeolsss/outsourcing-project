import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import logoImage from '../../assets/logo.png';
import CustomMapMarker from './customMapMarker/CustomMapMarker';
import { useDispatch } from 'react-redux';
import { __setAddress } from '../../redux/module/position.slice';

function KakaoMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [marker, setMarker] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

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
        center={{ lat: 37.5566803113882, lng: 126.904501286522 }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%' }} // 지도 크기
        level={5} // 지도 확대 레벨
        onClick={(e, mouseEvent) => handleOnClickPosition(e, mouseEvent)}
      >
        {isVisible && (
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
        )}
      </Map>
    </>
  );
}

export default KakaoMap;
