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

export function findPostsWithinRadius(centerPoint, searchRadius, allPosts) {
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
