import React from 'react';

import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react";
import ActivityCard from "./ActivityCard";


export default function UserProfile({thisUser}) {

    function convertGrade(grade) {
        const gradeint = parseInt(grade);
        switch (gradeint) {
            case 9:
                return "Freshman";
            case 10:
                return "Sophomore";
            case 11:
                return "Junior";
            case 12:
                return "Senior";
            default:
                return "Grade not found";
        }
    }

    return (

        <Box _hover={{}} bg={'transparent'} w={'50%'} h={'600px'}>
            <Center pt={50}>
                <VStack fontSize={'18px'}>
                    <Text fontSize={'24px'}>
                        {convertGrade(thisUser.grade)}
                    </Text>
                    <HStack>
                        <Text>
                            {thisUser.GPA}
                        </Text>
                        <Text>
                            {thisUser.SAT}
                        </Text>
                        <Text>
                            {thisUser.ACT}
                        </Text>
                    </HStack>
                    <ActivityCard name={thisUser.EC1Name} role={thisUser.EC1Role}
                                  description={thisUser.EC1Description}/>
                    <ActivityCard name={thisUser.EC2Name} role={thisUser.EC2Role}
                                  description={thisUser.EC2Description}/>
                    <ActivityCard name={thisUser.EC3Name} role={thisUser.EC3Role}
                                  description={thisUser.EC3Description}/>


                </VStack>
            </Center>
        </Box>

    );
}