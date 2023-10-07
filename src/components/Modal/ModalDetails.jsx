import { useSelector } from 'react-redux';
import { selectModalData } from 'redux/modal/modalSelectors';

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
    <div>
      <img src={img} alt={make} />
      <div>
        <p>{make}</p>
        <span>{model}</span>
        <p>{year}</p>
      </div>
      <ul>
        <li>{address.split(', ').splice(1, 1)[0]}</li>
        <li>{address.split(', ').splice(-1, 1)[0]}</li>
        <li>Id:{id}</li>
        <li>Year:{year}</li>
        <li>Type:{type}</li>
        <li>FuelConsumption:{fuelConsumption}</li>
        <li>Engine Size:{engineSize}</li>
      </ul>
      <p>{description}</p>
      <p>Accessories and functionalities:</p>
      <p>
        {accessories[0]} | {accessories[1]} | {accessories[2]}
      </p>
      <p>
        {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
      </p>
      <p>Rental Conditions: </p>
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
    </div>
  );
};

export default ModalDetails;
