import { useSelector } from 'react-redux';
import CarsList from 'components/CarsList/CarsList';
import { Container } from 'components/Container/Container';
import { selectError, selectIsLoading } from 'redux/cars/carsSelectors';
import { ErrorImg } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      {error && <ErrorImg text="Oops... Something went wrong..." />}
      {isLoading && <Loader />}
      <CarsList />
    </Container>
  );
};

export default Catalog;
