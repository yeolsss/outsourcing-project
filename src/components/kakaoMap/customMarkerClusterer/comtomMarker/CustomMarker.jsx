import { MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleMarker,
  selectCurrentMarker,
} from 'redux/module/currentMarker.slice';
import locationPin from '../../../../assets/house4.png';
import CustomMapMarkerOverlay from '../../customMapMarker/CustomMapMarkerOverlay';

const CustomMarker = ({ together }) => {
  const { isOpen, selectedMarker } = useSelector(selectCurrentMarker);
  const dispatch = useDispatch();

  const handleOnClickMarker = () => {
    dispatch(handleMarker(together));
  };

  return (
    <>
      <MapMarker
        position={{
          lat: together.coordinates.lat,
          lng: together.coordinates.lng,
        }}
        onClick={() => handleOnClickMarker(together.docId)}
        image={{
          src: locationPin, // 마커이미지의 주소입니다
          size: {
            width: 30,
            height: 30,
          },
        }}
      >
        {isOpen && selectedMarker.docId === together.docId && (
          <CustomMapMarkerOverlay
            title={together.title}
            position={{
              lat: together.coordinates.lat,
              lng: together.coordinates.lng,
            }}
          />
        )}
      </MapMarker>
    </>
  );
};

export default CustomMarker;
