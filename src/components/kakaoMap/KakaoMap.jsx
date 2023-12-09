import currentPin from 'assets/current-pin.png';
import { useMap } from 'hooks';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
import SearchBar from '../searchBar/SearchBar';
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
    searchInput,
    handleOnChangeInput,
    handleOnSubmitAddressSearch,
    onIdleMapRef,
  } = useMap();

  return (
    <>
      <Map
        center={{ lat: position.lat, lng: position.lng }} // 지도의 중심 좌표
        style={{ width: '100%', height: '100%', position: 'relative' }} // 지도 크기
        level={13} // 지도 확대 레벨
        onClick={(e, mouseEvent) => {
          handleOnClickPosition(e, mouseEvent);
          onIdleMapRef();
          updatePosition();
        }}
        onIdle={() => {
          onIdleMapRef();
          updatePosition();
        }}
        ref={mapRef}
      >
        <CustomMarkerClusterer togethers={selectTogethers.togethers} />
        <MapMarker
          position={position} // 마커를 표시할 위치
          draggable={true}
          ref={markerRef}
          onDragEnd={() => {
            handleOnDragEndMarker();
            updatePosition(mapRef);
          }}
          onClick={() => handleOnClickMarker()}
          image={{
            src: currentPin, // 마커이미지의 주소입니다
            zIndex: 1000,
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
      </Map>
      <StSearchBarWrapper>
        <form onSubmit={handleOnSubmitAddressSearch}>
          <SearchBar value={searchInput} handler={handleOnChangeInput} />
        </form>
      </StSearchBarWrapper>
      <ZoomButtonWrapper handler={{ zoomHandler }} />
      <MapOverlay />
    </>
  );
}
const StSearchBarWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  z-index: 10;
  width: 100%;
`;
export default KakaoMap;
