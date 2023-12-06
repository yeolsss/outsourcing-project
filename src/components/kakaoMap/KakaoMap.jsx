import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import logoImage from '../../assets/logo.png';
import CustomMapMarker from './customMapMarker/CustomMapMarker';

function KakaoMap({ marker: { marker, setMarker } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Map
        center={{ lat: 37.5566803113882, lng: 126.904501286522 }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%' }} // 지도 크기
        level={5} // 지도 확대 레벨
        onClick={(_target, mouseEvent) => {
          setMarker({
            position: {
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            },
          });
        }}
      >
        {isVisible && (
          <MapMarker
            position={marker.position} // 마커를 표시할 위치
            onClick={() => setIsOpen(!isOpen)}
            image={{
              src: logoImage, // 마커이미지의 주소입니다
              size: {
                width: 34,
                height: 39,
              },
            }}
          >
            {isOpen && <CustomMapMarker marker={marker} />}
          </MapMarker>
        )}
      </Map>
    </>
  );
}

export default KakaoMap;
