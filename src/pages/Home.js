import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
} from "@chakra-ui/react";
import {getTwoRandomProfiles} from "../Firebase/getTwoRandomProfiles";
import UserProfile from "../components/UserProfile";

import {auth} from "../Firebase/firebase";

export default function Home({user}) {
    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});
    const [loading, setLoading] = useState(true);

    function getNewUsers() {
        setLoading(true);
        getTwoRandomProfiles().then((profiles) => {
            setUser1(profiles[0]);
            setUser2(profiles[1]);
            setLoading(false);
        });
    }

    useEffect(() => {
        getNewUsers();
    }, []);


    return (
        <Box>
            <Center>
                <Box width={'100%'}>
                    <VStack width={'100%'}>
                        <Box width={'100%'} color={'brand.900'}>
                            <HStack>
                                <UserProfile thisUser={user1}/>
                                <UserProfile thisUser={user2}/>


                            </HStack>

                        </Box>
                        <HStack width={'100%'} bg={''}>

                            <Box width={'50%'}>
                                <Center>
                                    <Button>
                                        student 1
                                    </Button>
                                </Center>
                            </Box>
                            <Box width={'50%'}>
                                <Center>
                                    <Button>
                                        student 2
                                    </Button>
                                </Center>
                            </Box>
                        </HStack>
                        <Button onClick={getNewUsers} colorScheme="blue" variant="solid">
                            skip
                        </Button>
                        <Text>
                            logged in as {user?.displayName}
                        </Text>
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
}

