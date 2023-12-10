import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __setAddress, selectPosition } from 'redux/module/position.slice';
import { selectTogether, setMapRefCurrent } from 'redux/module/together.slice';
import { getPosition } from '../common/mapUtil';
import { useInput } from './useInput';
import { usePosts } from './usePosts';
import { useTogethers } from './useTogethers';
import { useZoom } from './useZoom';

export function useMap() {
  const position = useSelector(selectPosition);
  const selectTogethers = useSelector(selectTogether);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState('');
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const { handler: updatePosition } = usePosts();
  const [zoomHandler] = useZoom(mapRef);
  const [searchInput, handleOnChangeInput] = useInput();
  const dispatch = useDispatch();

  useTogethers();

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
  const handleOnSubmitAddressSearch = async (e) => {
    e.preventDefault();
    const position = await getPosition(searchInput);
    if (!position) {
      alert('검색 결과가 없습니다.');
      return;
    }
    dispatch(__setAddress({ ...position }));
  };

  const onIdleMapRef = () => {
    const map = mapRef.current;
    if (!map) return [];
    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();
    const currentCoordinates = {
      swLatLng: {
        lat: swLatLng.getLat(),
        lng: swLatLng.getLng(),
      },
      neLatLng: {
        lat: neLatLng.getLat(),
        lng: neLatLng.getLng(),
      },
    };
    dispatch(setMapRefCurrent(currentCoordinates));
  };

  return {
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
  };
}
