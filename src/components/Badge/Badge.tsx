import React from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/react';

export interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => {
  return <ChakraBadge>{label}</ChakraBadge>;
};
