import { Map, MapMarker } from 'react-kakao-maps-sdk';
import currentPin from 'assets/current-pin.png';
import { useMap } from 'hooks';
import CustomMapMarkerOverlay from './customMapMarker/CustomMapMarkerOverlay';
import CustomMarkerClusterer from './customMarkerClusterer/CustomMarkerClusterer';
import MapOverlay from './overlay/MapOverlay';
import ZoomButtonWrapper from './zoomButton/ZoomButtonWrapper';

function KakaoMap() {
  const {
    position,
    selectTogethers,
    isOpen,
    selectedMarker,
    mapRef,
    markerRef,
    updatePosition,
    zoomHandler,
    handleOnClickPosition,
    handleOnClickMarker,
    handleOnDragEndMarker,
  } = useMap();

  return (
    <>
      <Map
        center={{ lat: position.lat, lng: position.lng }} // 지도의 중심 좌표
        style={{ width: '50%', height: '100%', position: 'relative' }} // 지도 크기
        level={13} // 지도 확대 레벨
        onClick={(e, mouseEvent) => {
          handleOnClickPosition(e, mouseEvent);
          updatePosition(mapRef);
        }}
        onIdle={() => updatePosition(mapRef)}
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
