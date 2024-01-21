import React from 'react';
import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react";

export default function ActivityCard({name, role, description}) {

    if (name === "") {
        return;
    }

    return (
        <Box _hover={{
            boxShadow: "0 0 1px 1px rgba(0, 0, 0, 0.1)",
            transform: "scale(1.01)",
            transition: "all 0.2s ease-in-out",
            cursor: 'pointer',

        }} bg={'brand.100'} w={'400px'} h={'60%'} borderRadius={10}>
            <Center pt={0} width={'100%'} p={2}>
                <VStack fontSize={'18px'} width={'100%'}>
                    <Text fontSize={'24px'} width={'100%'} fontWeight={600}>
                        {name}
                    </Text>
                    <Text width={'100%'}>
                        {role}
                    </Text>
                    <Text width={'100%'}>
                        {description}
                    </Text>
                </VStack>
            </Center>
        </Box>
    );
}