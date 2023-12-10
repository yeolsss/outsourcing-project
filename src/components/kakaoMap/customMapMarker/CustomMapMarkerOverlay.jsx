import { getAddress } from 'common/mapUtil';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentMarker } from 'redux/module/currentMarker.slice';
import { selectTogether } from 'redux/module/together.slice';
import styled from 'styled-components';

const CustomMapMarkerOverlay = ({ title = '', position }) => {
  const [address, setAddress] = useState();
  const { selectedMarker } = useSelector(selectCurrentMarker);
  const { togethers } = useSelector(selectTogether);
  const together = togethers?.find((together, idx) => {
    return together.docId === selectedMarker.docId;
  });

  useEffect(() => {
    (async () => {
      setAddress((await getAddress(position)) || '주소를 찾을 수 없습니다.');
    })();
  }, [position]);

  return (
    <StContainer>
      {title && (
        <>
          <li>
            <StCost>{together?.cost}만원</StCost>
          </li>
          <li>
            <StTitle>모집인원 : {together?.togetherNum}명</StTitle>
          </li>
          <li>
            <StTitle>{title}</StTitle>
          </li>
        </>
      )}

      <li>
        <StAddress>{address}</StAddress>
      </li>
    </StContainer>
  );
};
export default CustomMapMarkerOverlay;

const StContainer = styled.ul`
  width: 20rem;
  height: 10rem;
  border-radius: 0.5rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  row-gap: 0.5rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StTitle = styled.span`
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  display: inline-block;
`;

const StAddress = styled.span`
  font-size: 1.4rem;
`;

const StCost = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
