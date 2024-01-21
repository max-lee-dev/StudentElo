import React from 'react';

import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react";


export default function UserProfile({thisUser}) {
    return (

        <Box bg={'transparent'} w={'50%'} h={'600px'}>
            <Center>
                <VStack>
                    <Text>
                        test
                        {thisUser.year}
                    </Text>
                    <Text>
                        {thisUser.SAT}
                    </Text>
                    <Text>
                        {thisUser.EC1Name}
                    </Text>
                    <Text>
                        {thisUser.EC1Desc}
                    </Text>
                    <Text>
                        {thisUser.EC2Name}
                    </Text>
                    <Text>
                        {thisUser.EC2Desc}
                    </Text>
                    <Text>
                        {thisUser.EC3Name}
                    </Text>
                    <Text>
                        {thisUser.EC3Desc}
                    </Text>


                </VStack>
            </Center>
        </Box>

    );
}