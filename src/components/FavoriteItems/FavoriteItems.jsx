import { selectFavoriteCar } from 'redux/favorite/favoriteSelectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  removeFromFavorites,
  switchFavorite,
} from 'redux/favorite/favoriteSlice';
import { closeModal, openModal } from 'redux/modal/modalSlice';
import Car from 'components/Car/Car';
import { selectCarData } from 'redux/cars/carsSelectors';
import {
  ContainerFav,
  EmptyFav,
  FavText,
  FavoriteWrap,
  LinkFav,
} from './FavoriteItemsStyled';
import { Container } from 'components/Container/Container';
import imgempty from '../../images/empty_fav.png';

const FavoriteItems = () => {
  const favoriteCars = useSelector(selectFavoriteCar);
  const cars = useSelector(selectCarData);
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
    <Container>
      {favoriteCars.length === 0 ? (
        <ContainerFav>
          <EmptyFav src={imgempty} alt="emptyimg" />
          <FavText>
            {' '}
            No <span>cars</span> found
          </FavText>{' '}
          <LinkFav to="/catalog">Go to Catalog</LinkFav>
        </ContainerFav>
      ) : (
        <FavoriteWrap>
          {favoriteCars.map(car => (
            <Car
              key={car.id}
              {...car}
              onSwitchFavorite={() => handleSwitchFavorite(car)}
              onModalOpen={handleClickModal}
            />
          ))}
        </FavoriteWrap>
      )}
    </Container>
  );
};

export default FavoriteItems;
