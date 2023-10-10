import { useSelector } from 'react-redux';
import { selectIsOpen } from 'redux/modal/modalSelectors';
import ModalForm from 'components/Modal/ModalForm';
import ModalDetails from 'components/Modal/ModalDetails';
import { Container } from 'components/Container/Container';
import FavoritesItems from 'components/FavoriteItems/FavoriteItems';
import { selectError, selectIsLoading } from 'redux/cars/carsSelectors';
import { ErrorImg } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

const Favorites = () => {
  const isModalOpen = useSelector(selectIsOpen);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      {error && <ErrorImg text="Oops... Something went wrong..." />}
      {isLoading && <Loader />}
      <FavoritesItems />
      {isModalOpen && (
        <ModalForm>
          <ModalDetails />
        </ModalForm>
      )}
    </Container>
  );
};

export default Favorites;
