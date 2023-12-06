import { useState } from 'react';

/**
 *
 * @param {{position:{lat, lng}}} marker
 */
export const useAddress = (marker) => {
  const [getAddress, setGetAddress] = useState('');

  const geocoder = new window.kakao.maps.services.Geocoder();

  const callback = (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      setGetAddress(result[0].address.address_name);
    }
  };

  geocoder.coord2Address(marker.position.lng, marker.position.lat, callback);

  return { getAddress };
};
