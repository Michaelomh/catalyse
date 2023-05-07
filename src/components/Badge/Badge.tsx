import React from 'react';
import { Badge as ChakraBadge, Text } from '@chakra-ui/react';

export interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return (
    <ChakraBadge>
      <Text textStyle="body1">{label}</Text>
    </ChakraBadge>
  );
};
