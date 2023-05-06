import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const KitchenSinkSection = ({ title, subtitle, children }: React.PropsWithChildren<Props>) => {
  return (
    <Box pt={5} w="full">
      <Text textStyle="heading2">{title}</Text>
      <Text textStyle="subheading2" color="grey.600">
        {subtitle}
      </Text>
      <Flex pt={1} flexWrap="wrap">
        {children}
      </Flex>
    </Box>
  );
};

type Props = {
  title: string;
  subtitle?: string;
};
