import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const getWidth = (span: number) => {
  return `calc(100% * ${span} / 24)`;
};

export const KitchenSinkBox = ({ description, span, children }: React.PropsWithChildren<Props>) => {
  return (
    <Flex alignItems="center" flexDir="column" p={2} border="1px solid" borderColor="grey.200" w={getWidth(span)}>
      <Flex flex={2} alignItems="center" p={1}>
        {children}
      </Flex>
      <Flex h="full" w="full" alignItems="center" justifyContent="center" flex={1}>
        <Text textStyle="body2" fontStyle="italic" color="grey.600" textAlign="center">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

type Props = {
  span: number;
  description?: string;
};
