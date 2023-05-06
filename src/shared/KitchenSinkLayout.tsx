import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const KitchenSinkLayout = ({ title, subtitle, children }: React.PropsWithChildren<Props>) => {
  return (
    <Box p={8} maxW="1280px" margin="0px auto">
      <Text textStyle="heading1">{title}</Text>
      <Text textStyle="subheading1" color="grey.600">
        {subtitle}
      </Text>
      <Box mt={-4}>{children}</Box>
    </Box>
  );
};

type Props = {
  title: string;
  subtitle: string;
};
