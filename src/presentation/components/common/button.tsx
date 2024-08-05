import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const Button: React.FC<Props> = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-sky-500 flex justify-center items-center rounded-md p-2 hover:bg-sky-400"
    >
      <Text className="text-red-600">{children}</Text>
    </Pressable>
  );
};

export default Button;
