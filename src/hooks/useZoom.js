export const useZoom = (mapRef) => {
  console.log(mapRef);
  const handler = (type) => {
    const map = mapRef.current;
    if (!map) return;

    switch (type) {
      case 'in':
        map.setLevel(map.getLevel() - 1);
        return;
      default:
        map.setLevel(map.getLevel() + 1);
        return;
    }
  };

  return [handler];
};
