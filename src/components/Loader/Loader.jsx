import { BackdropLoad, CarLoad, LoaderContainer } from './LoaderStyled';
import car from '../../images/car_load.png';
import { PropagateLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <BackdropLoad>
      <LoaderContainer>
        <CarLoad src={car} alt="Minions" />
        <PropagateLoader
          color="#0B44CD"
          size={50}
          cssOverride={{ position: 'absolute', top: '56%', left: '45%' }}
        />
      </LoaderContainer>
    </BackdropLoad>
  );
};
