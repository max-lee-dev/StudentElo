import React from 'react';

import {
    Box,
    Button,
    Center,
    Text,
    Divider,
    SimpleGrid,
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
                <VStack fontSize={'18px'} alignText={''}>
                    <Text fontSize={'40px'} fontWeight={800}>
                        {convertGrade(thisUser.grade)}
                    </Text>
                    <Center>
                        <Box width={'100%'}>
                            <HStack>
                                <Text>
                                    GPA: {thisUser.GPA}
                                </Text>
                                <Divider orientation="vertical" borderColor={'brand.900'}
                                         borderWidth={'2px'}/>

                                <Text>
                                    SAT: {thisUser.SAT}
                                </Text>
                                <Divider orientation="vertical" borderColor={'brand.900'}
                                         borderWidth={'2px'}/>
                                <Text>
                                    ACT: {thisUser.ACT}
                                </Text>
                                <Divider orientation="vertical" borderColor={'brand.900'}
                                         borderWidth={'2px'}/>
                                <Text>
                                    APs: {thisUser.APs}
                                </Text>

                            </HStack>
                        </Box>
                    </Center>
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