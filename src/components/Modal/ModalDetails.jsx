import { useSelector } from 'react-redux';
import { selectModalData } from 'redux/modal/modalSelectors';
import {
  DescrText,
  ImgModal,
  LinkStyled,
  ModalList,
  RentalWrap,
  Text,
  WrapAccesories,
} from './ModalDetailsStyled';
import { ModelWrap } from 'components/Car/CarStyled';

const ModalDetails = () => {
  const carInfo = useSelector(selectModalData);

  const {
    id,
    img,
    year,
    make,
    model,
    type,
    rentalPrice,
    mileage,
    description,
    accessories,
    functionalities,
    rentalConditions,
    fuelConsumption,
    address,
    engineSize,
  } = carInfo;

  const rentalCondition = rentalConditions.split('\n');
  const age = rentalCondition[0].split(':');

  return (
    <>
      <ImgModal src={img} alt={make} />
      <ModelWrap>
        <p>{make}</p>
        <span>{model}</span>
        <p>{year}</p>
      </ModelWrap>
      <ModalList>
        <li>{address.split(', ').splice(1, 1)[0]} |</li>
        <li>{address.split(', ').splice(-1, 1)[0]}</li>
        <li>Id:{id} |</li>
        <li>Year:{year} |</li>
        <li>Type:{type}</li>
        <li>Fuel Consumption:{fuelConsumption} |</li>
        <li>Engine Size:{engineSize}</li>
      </ModalList>
      <DescrText>{description}</DescrText>
      <Text>Accessories and functionalities:</Text>
      <WrapAccesories>
        <p>
          {accessories[0]} | {accessories[1]} | {accessories[2]}
        </p>
        <p>
          {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
        </p>
      </WrapAccesories>
      <Text>Rental Conditions:</Text>
      <RentalWrap>
        <p>
          {age[0]}: <span>{age[1]}</span>
        </p>
        <p>{rentalCondition[1]}</p>
        <p>{rentalCondition[2]}</p>
        <p>
          Mileage:
          <span>{mileage.toLocaleString('en-US')}</span>
        </p>
        <p>
          Price: <span>{rentalPrice.substring(1)}$</span>
        </p>
      </RentalWrap>
      <LinkStyled to="tel:+380730000000">Rental car</LinkStyled>
    </>
  );
};

export default ModalDetails;
