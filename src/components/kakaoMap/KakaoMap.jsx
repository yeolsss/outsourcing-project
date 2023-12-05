import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KakaoMap() {
  // const [level, setLevel] = useState(5);

  return (
    <>
      <Map
        center={{ lat: 37.5566803113882, lng: 126.904501286522 }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%' }} // 지도 크기
        level={5} // 지도 확대 레벨
      >
        <MapMarker
          position={{ lat: 37.5566803113882, lng: 126.904501286522 }}
        />
        {/*<button onClick={() => setLevel(level + 1)}>-</button>
        <button onClick={() => setLevel(level - 1)}>+</button>*/}
      </Map>
    </>
  );
}

export default KakaoMap;
