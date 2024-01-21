import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";
import {getTwoRandomProfiles} from "../Firebase/getTwoRandomProfiles";
import UserProfile from "../components/UserProfile";
import {calculateChange} from "../components/calculateChange";
import {updateElo} from "../Firebase/updateElo";
import FinishedModal from "../components/FinishedModal";


import {auth} from "../Firebase/firebase";

export default function Home({user}) {
    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});
    const [loading, setLoading] = useState(true);
    const [oldElo1, setOldElo1] = useState(0);
    const [oldElo2, setOldElo2] = useState(0);
    const [newElo1, setNewElo1] = useState(0);
    const [newElo2, setNewElo2] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const {
        isOpen: isOpenFinishedModal,
        onOpen: onOpenFinishedModal,
        onClose: onCloseFinishedModal
    } = useDisclosure();


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


    function handleClick(winner) {
        console.log("test")

        console.log(user1.elo, user2.elo, winner, user1.uid)
        if (user1.elo > user2.elo && winner === 1) {

            setIsCorrect(true);
        } else if (user2.elo > user1.elo && winner === 2) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        console.log("correct?: " + isCorrect)
        setOldElo1(user1.elo);
        setOldElo2(user2.elo);
        const [newElo1, newElo2] = calculateChange(user1.elo, user2.elo, winner);
        setNewElo1(newElo1);
        setNewElo2(newElo2);
        updateElo(user1.uid, newElo1).then(r => console.log(r));
        updateElo(user2.uid, newElo2).then(r => console.log(r));

        onOpenFinishedModal();
        getNewUsers();


    }


    return (
        <Box>
            <Center>
                <Box width={'100%'}>
                    <VStack width={'100%'}>
                        <Box width={'100%'} color={'brand.900'}>
                            <HStack>
                                <UserProfile thisUser={user1}/>
                                <Text fontSize={'60px'} position={'relative'} fontWeight={600}>
                                    VS
                                </Text>
                                <UserProfile thisUser={user2}/>


                            </HStack>

                        </Box>
                        <HStack width={'100%'} bg={''} mt={-5}>

                            <Box width={'50%'}>
                                <Center>
                                    <Button fontSize={'20px'} width={400} borderColor={'brand.900'} borderWidth={'2px'}
                                            onClick={() => handleClick(1)}>
                                        Choose left
                                    </Button>
                                </Center>
                            </Box>
                            <Box width={'50%'}>
                                <Center>
                                    <Button fontSize={'20px'} width={400} borderColor={'brand.900'} borderWidth={'2px'}
                                            onClick={() => handleClick(2)}>
                                        Choose right
                                    </Button>
                                </Center>
                            </Box>
                        </HStack>

                    </VStack>
                </Box>
            </Center>
            <FinishedModal isOpen={isOpenFinishedModal} onClose={onCloseFinishedModal} oldElo1={oldElo1}
                           newElo1={newElo1} newElo2={newElo2}
                           oldElo2={oldElo2}
                           correct={isCorrect}
            />
        </Box>
    );
}

