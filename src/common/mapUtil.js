export const getAddress = (marker) => {
  return new Promise((res) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const callback = (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        res(result[0].address.address_name);
      }
    };
    geocoder.coord2Address(
      parseFloat(marker?.lng),
      parseFloat(marker?.lat),
      callback,
    );
  });
};

export const getPosition = (address) => {
  return new Promise((res) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        res({ lat: result[0].y, lng: result[0].x });
      } else {
        res(false);
      }
    });
  });
};

export function findPostsWithinRadius(centerPoint, searchRadius, allPosts) {
  if (searchRadius === 0) return allPosts;

  return allPosts.filter((post) => {
    const distanceToPost = calculateDistanceInKm(
      parseFloat(centerPoint.lat),
      parseFloat(centerPoint.lng),
      parseFloat(post.lat),
      parseFloat(post.lng),
    );
    return distanceToPost <= searchRadius;
  });
}

// 도움 함수: 두 좌표 사이의 거리를 계산합니다.
function calculateDistanceInKm(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371; // 지구 반지름 (km)
  const deltaLat = degreesToRadians(lat2 - lat1);
  const deltaLon = degreesToRadians(lon2 - lon1);

  const angleCalculation =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const centralAngle =
    2 *
    Math.atan2(Math.sqrt(angleCalculation), Math.sqrt(1 - angleCalculation));
  // 거리 (km)
  return earthRadiusKm * centralAngle;
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

export const filterMarkersInBounds = (postsData, mapRef) => {
  const swLatLng = mapRef.swLatLng;
  const neLatLng = mapRef.neLatLng;

  return postsData.filter(
    (post) =>
      post.coordinates.lat >= swLatLng.lat &&
      post.coordinates.lat <= neLatLng.lat &&
      post.coordinates.lng >= swLatLng.lng &&
      post.coordinates.lng <= neLatLng.lng,
  );
};

export const updateMapRef = (map) => {
  const bounds = map.getBounds();
  const swLatLng = bounds.getSouthWest();
  const neLatLng = bounds.getNorthEast();
  return {
    swLatLng: {
      lat: swLatLng.getLat(),
      lng: swLatLng.getLng(),
    },
    neLatLng: {
      lat: neLatLng.getLat(),
      lng: neLatLng.getLng(),
    },
  };
};
