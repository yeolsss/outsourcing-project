import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import {
  __setAddress,
  selectPosition,
} from '../../redux/module/position.slice';
import CustomMapMarkerOverlay from './customMapMarker/CustomMapMarkerOverlay';
import currentPin from '../../assets/current-pin.png';
import { filterMarkersInBounds } from '../../common/mapUtil';
import dumyData from '../../common/dumy.json';
import CustomMarkerClusterer from './customMarkerClusterer/CustomMarkerClusterer';
import ZoomButtonWrapper from './zoomButton/ZoomButtonWrapper';
import MapOverlay from './overlay/MapOverlay';

function KakaoMap() {
  const position = useSelector(selectPosition);
  const mapRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarkerId, setSelectedMarkerId] = useState('');
  const [marker, setMarker] = useState(position);
  const [posts, setPosts] = useState();
  const [displayInfo, setDisplayInfo] = useState();
  console.log(posts);
  const handleOnIdleMap = () => {
    setPosts(filterMarkersInBounds(dumyData, mapRef));
  };

  const dispatch = useDispatch();

  // zoomIn, zoomOut func
  const zoomIn = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setLevel(map.getLevel() - 1);
  };

  const zoomOut = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setLevel(map.getLevel() + 1);
  };

  // 클릭된 좌표 얻기
  const handleOnClickPosition = (_target, mouseEvent) => {
    const position = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    dispatch(__setAddress({ ...position }));
    setMarker(position);
  };

  // 마커 클릭하면 overlay 보여주기
  const handleOnClickMarker = (postId = '') => {
    setIsOpen(!isOpen);
    setSelectedMarkerId(postId);
  };

  useEffect(() => {
    setPosts(filterMarkersInBounds(dumyData, mapRef));
  }, [mapRef.current]);

  return (
    <>
      <Map
        center={{ lat: marker.lat, lng: marker.lng }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%', position: 'relative' }} // 지도 크기
        level={13} // 지도 확대 레벨
        onClick={(e, mouseEvent) => handleOnClickPosition(e, mouseEvent)}
        onIdle={handleOnIdleMap}
        ref={mapRef}
      >
        {/*현재 클릭한 마커 start*/}
        <MapMarker
          position={marker} // 마커를 표시할 위치
          onClick={() => handleOnClickMarker()}
          image={{
            src: currentPin, // 마커이미지의 주소입니다
            size: {
              width: 36,
              height: 40,
            },
          }}
        >
          {isOpen && selectedMarkerId === '' && (
            <CustomMapMarkerOverlay position={marker} />
          )}
        </MapMarker>
        {/*현재 클릭한 마커 end*/}

        <CustomMarkerClusterer posts={posts} />
      </Map>
      <ZoomButtonWrapper zoom={{ zoomIn, zoomOut }} />
      <MapOverlay />
    </>
  );
}

export default KakaoMap;
