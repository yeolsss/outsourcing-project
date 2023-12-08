import { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import currentPin from '../../assets/current-pin.png';
import { usePosts, useZoom } from '../../hooks';
import {
  __setAddress,
  selectPosition,
} from '../../redux/module/position.slice';
import { selectorTogether } from '../../redux/module/together.slice';
import CustomMapMarkerOverlay from './customMapMarker/CustomMapMarkerOverlay';
import CustomMarkerClusterer from './customMarkerClusterer/CustomMarkerClusterer';
import MapOverlay from './overlay/MapOverlay';
import ZoomButtonWrapper from './zoomButton/ZoomButtonWrapper';

function KakaoMap() {
  const position = useSelector(selectPosition);
  const selectTogethers = useSelector(selectorTogether);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState('');
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const { handler } = usePosts();
  const [zoomHandler] = useZoom(mapRef);

  const dispatch = useDispatch();

  // 클릭된 좌표 얻기
  const handleOnClickPosition = (_target, mouseEvent) => {
    const position = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    dispatch(__setAddress({ ...position }));
  };

  // 마커 클릭하면 overlay 보여주기
  const handleOnClickMarker = (postId = '') => {
    setIsOpen(!isOpen);
    setSelectedMarker(postId);
  };
  // 마커 드레그가 마치면 position을 얻어옴
  const handleOnDragEndMarker = () => {
    const { Ma: lat, La: lng } = markerRef.current.getPosition();
    dispatch(__setAddress({ lat, lng }));
  };
  return (
    <>
      <Map
        center={{ lat: position.lat, lng: position.lng }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%', position: 'relative' }} // 지도 크기
        level={13} // 지도 확대 레벨
        onClick={(e, mouseEvent) => {
          handleOnClickPosition(e, mouseEvent);
          handler(mapRef);
        }}
        onIdle={() => handler(mapRef)}
        ref={mapRef}
      >
        {/*이 부분 CustomMapMaker와 통합해야함.*/}
        <MapMarker
          position={position} // 마커를 표시할 위치
          draggable={true}
          ref={markerRef}
          onDragEnd={() => handleOnDragEndMarker()}
          onClick={() => handleOnClickMarker()}
          image={{
            src: currentPin, // 마커이미지의 주소입니다
            size: {
              width: 36,
              height: 40,
            },
          }}
        >
          {isOpen && selectedMarker === '' && (
            <CustomMapMarkerOverlay position={position} />
          )}
        </MapMarker>

        <CustomMarkerClusterer togethers={selectTogethers.togethers} />
      </Map>
      <ZoomButtonWrapper handler={{ zoomHandler }} />
      <MapOverlay />
    </>
  );
}

export default KakaoMap;
