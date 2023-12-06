export const getAddress = (marker) => {
  return new Promise((res) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const callback = (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        res(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(marker.lng, marker.lat, callback);
  });
};
