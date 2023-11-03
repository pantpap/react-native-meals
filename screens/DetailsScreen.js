import { Text} from "react-native";
import {useLayoutEffect} from "react";

const DetailsScreen = ({route, navigation}) => {
  const mealId = route.params.id;
  const mealTitle = route.params.title

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle
    })
  }, [navigation])

  return <Text>Details Screen {mealId}</Text>
}

export default DetailsScreen;
