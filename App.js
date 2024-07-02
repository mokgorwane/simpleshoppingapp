import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
import Products from './screens/Products';
import Header from './components/Header';
import Checkout from './screens/Checkout';
import OrderSuccess from './screens/OrderSuccess';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Products');
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addToCheckout = (item) => {
    setCheckoutItems([...checkoutItems, item]);
  };

  const removeFromCheckout = (item) => {
    setCheckoutItems(checkoutItems.filter((i) => i.id !== item.id));
  };

  const navigateToOrderSuccess = () => {
    setCurrentScreen('OrderSuccess');
  };

  const navigateBack = () => {
    setCheckoutItems([]);
    setCurrentScreen('Products');
  };

  return (
    <View style={styles.container}>
      <Header/>
      {currentScreen === 'Products' && <Products addToCheckout={addToCheckout} />}
      {currentScreen === 'Checkout' && (
        <Checkout
          checkoutItems={checkoutItems}
          removeFromCheckout={removeFromCheckout}
          navigateToOrderSuccess={navigateToOrderSuccess}
        />
      )}
      {currentScreen === 'OrderSuccess' && <OrderSuccess navigateBack={navigateBack} />}
      <Navigation setCurrentScreen={setCurrentScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
