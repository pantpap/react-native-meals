import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route}) => {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(item => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    });

    const renderMealItem = (itemData) => {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }
        return (
            <MealItem {...mealItemProps}/>
        )
    }

    return(
        <View style={styles.container}>
        <FlatList 
            data={displayedMeals}
            keyExtractor={(item) =>item.id} 
            renderItem={renderMealItem}
        />

        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
