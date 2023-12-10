import { styled } from 'styled-components';
import CustomConfirmForm from '../components/customConfirm/CustomConfirmForm';
import { useSelector } from 'react-redux';
import { selectorConfirm } from '../redux/module/customConfirm.slice';
import CustomAlert from '../components/customAlert/CustomAlert';
import CustomModal from '../components/customModal/CustomModal';

const CustomConfirm = () => {
  const selectConfirm = useSelector(selectorConfirm);

  const selectConfirmType = () => {
    switch (selectConfirm.model.type) {
      case 'confirm':
        return <CustomConfirmForm />;
      case 'alert':
        return <CustomAlert />;
      default:
        return <CustomModal />;
    }
  };

  return (
    <StConfirmWrapper $isOpen={selectConfirm.isOpen}>
      {selectConfirmType()}
    </StConfirmWrapper>
  );
};

const StConfirmWrapper = styled.div`
  position: absolute;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  z-index: ${({ $isOpen }) => ($isOpen ? '1000' : '-2')};
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: all 0.2s ease-in;
`;

export default CustomConfirm;
