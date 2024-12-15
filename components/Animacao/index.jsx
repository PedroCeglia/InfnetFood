import { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default function ButtaoAtivoFormaDePagamento() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.box, { transform: [{ scale: scaleAnim }] }]}>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    backgroundColor:"#70286f",
    borderRadius: 10,
  },
});

