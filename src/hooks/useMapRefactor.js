import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __setAddress, selectPosition } from 'redux/module/position.slice';
import { selectTogether } from 'redux/module/together.slice';
import { useInput } from './useInput';
import { usePosts } from './usePosts';
import { useZoom } from './useZoom';

function useMap() {
  const position = useSelector(selectPosition);
  const { togethers } = useSelector(selectTogether);

  const [isOpen, setOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState('');

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const {} = usePosts();
  const [zoomHnadler] = useZoom(mapRef);
  const [searchInput, handleOnChangeInput] = useInput();

  const dispatch = useDispatch();

  const handleOnClickPosition = (_target, mouseEvent) => {
    const position = {
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    };
    dispatch(__setAddress({ ...position }));
  };

  const handleOnClickMarker = (postId = '') => {};

  const handleOnDragEndMarker = () => {};

  const handleOnSubmitAddressSearch = async (e) => {
    e.preventDefault();
    const position = await getPosition(searchInput);
  };

  const handleOnIdleMap = () => {};
}

export default useMap;
