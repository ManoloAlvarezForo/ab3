import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Icon from '@react-native-vector-icons/ionicons';
import HomeScreen from '../screens/Home';
import Agenda from '../screens/Agenda';

// const HomeScreen = () => <Text>Inicio</Text>;
// Uncomment and define other screens as needed
// const Agenda = () => <Text>Agenda</Text>;

const CustomBottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Inicio',
      focusedIcon: 'cube',
      unfocusedIcon: 'cube-outline',
    },
    {
      key: 'agenda',
      title: 'Agenda',
      focusedIcon: 'calendar',
      unfocusedIcon: 'calendar-outline',
    },
    // {
    //   key: 'maps',
    //   title: 'Mapa',
    //   focusedIcon: 'location',
    //   unfocusedIcon: 'location-outline',
    // },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    agenda: Agenda,
    // maps: MapScreen,
  });

  const renderIcon = ({route, focused, color}: any) => {
    const iconName = focused ? route.focusedIcon : route.unfocusedIcon;
    return <Icon name={iconName} size={24} color={color} />;
  };

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
    />
  );
};

export default CustomBottomNavigation;
