import { selectFavoriteCar } from 'redux/favorite/favoriteSelectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  removeFromFavorites,
  switchFavorite,
} from 'redux/favorite/favoriteSlice';
import { closeModal, openModal } from 'redux/modal/modalSlice';
import Car from 'components/Car/Car';
import { selectIsOpen } from 'redux/modal/modalSelectors';
import ModalForm from 'components/Modal/ModalForm';
import ModalDetails from 'components/Modal/ModalDetails';
import { selectCarData } from 'redux/cars/carsSelectors';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavoriteCar);
  const isModalOpen = useSelector(selectIsOpen);
  const cars = useSelector(selectCarData);
  console.log(cars);
  const dispatch = useDispatch();

  const handleSwitchFavorite = car => {
    const isFavorite = favoriteCars.some(favCar => favCar.id === car.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(car));
    } else {
      dispatch(switchFavorite(car));
    }
  };

  const handleClickModal = evt => {
    const currentCars = cars.reduce((foundItem, currentItem) => {
      if (foundItem) {
        return foundItem;
      }
      return currentItem.id === Number(evt.currentTarget.id)
        ? currentItem
        : null;
    }, null);
    dispatch(openModal());
    dispatch(closeModal(currentCars));
  };

  return (
    <div>
      <h2>Favorite Cars</h2>
      {favoriteCars.length === 0 ? (
        <p> Is empty...</p>
      ) : (
        <div>
          {favoriteCars.map(car => (
            <Car
              key={car.id}
              {...car}
              onSwitchFavorite={() => handleSwitchFavorite(car)}
              onModalOpen={handleClickModal}
            />
          ))}
          {isModalOpen && (
            <ModalForm>
              <ModalDetails />
            </ModalForm>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
