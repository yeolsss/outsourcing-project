import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __setAddress, selectPosition } from 'redux/module/position.slice';
import { selectorTogether } from 'redux/module/together.slice';
import { usePosts } from './usePosts';
import { useZoom } from './useZoom';

export function useMap() {
  const position = useSelector(selectPosition);
  const selectTogethers = useSelector(selectorTogether);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState('');
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const { handler: updatePosition } = usePosts();
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
  };
}
