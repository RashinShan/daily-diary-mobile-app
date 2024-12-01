import React from 'react';
import styles from '../assets/MyComponent.module.css';
import { View, Button } from 'react-native-web';

const Packages = () => {
  return (
    <View>
        <div className={styles.packages}>
                <div className={styles.box}>
                <h1>$10/mo.</h1>
                    <div className={styles.ribbonb}>
                        <h2>Basic</h2>
                    </div>
                    <Button title="Get"/>
                </div>
                <div className={styles.box}>
                <h1>$20/mo.</h1>
                    <div className={styles.ribbong}>
                        <h2>Gold</h2>
                    </div>
                    <Button title="Get"/>
                </div>
                <div className={styles.box}>
                <h1>$30/mo.</h1>
                    <div className={styles.ribbonp}>
                        <h2>Premium</h2>
                    </div>
                    <Button title="Get"/>
                </div>
        </div>
    </View>
  );
};

export default Packages;
