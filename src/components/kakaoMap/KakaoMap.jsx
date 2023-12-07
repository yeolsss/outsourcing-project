import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import {
  __setAddress,
  selectPosition,
} from '../../redux/module/position.slice';
import CustomMapMarkerOverlay from './customMapMarker/CustomMapMarkerOverlay';
import locationPin from '../../assets/together.png';
import currentPin from '../../assets/current-pin.png';
import { filterMarkersInBounds } from '../../common/mapUtil';
import dumyData from '../../common/dumy.json';

function KakaoMap() {
  const position = useSelector(selectPosition);
  const mapRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarkerId, setSelectedMarkerId] = useState('');
  const [marker, setMarker] = useState(position);
  const [posts, setPosts] = useState();
  console.log(posts);
  const handleOnIdleMap = () => {
    setPosts(filterMarkersInBounds(dumyData, mapRef));
  };

  const dispatch = useDispatch();

  const handleOnClickPosition = (_target, mouseEvent) => {
    const position = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    dispatch(__setAddress({ ...position }));
    setMarker(position);
  };

  const handleOnClickMarker = (postId = '') => {
    setIsOpen(!isOpen);
    setSelectedMarkerId(postId);
  };

  useEffect(() => {
    setPosts(filterMarkersInBounds(dumyData, mapRef));
  }, [mapRef.current]);
  //TODO: 확대 레벨이 n일때 마커를 통합한다.

  return (
    <>
      <Map
        center={{ lat: marker.lat, lng: marker.lng }} // 지도의 중심 좌표

        style={{ width: '50%', height: '100%' }} // 지도 크기
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

        <MarkerClusterer averageCenter={true} minLevel={10}>
          {posts?.map((post) => (
            <MapMarker
              key={post.id}
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
          ))}
        </MarkerClusterer>
      </Map>
    </>
  );
}

export default KakaoMap;
