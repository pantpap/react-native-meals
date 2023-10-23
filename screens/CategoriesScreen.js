import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {

  function renderCategoryItem(itemData) {
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={() => pressHandler(itemData.item.id)} />
    );
  }
  
  const pressHandler = (id) => {
    navigation.navigate('MealsOverview', {
      categoryId: id
    });
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;