import React, {useEffect, useState} from "react";
import {db} from "../Firebase/firebase";
import {getDoc, docs, updateDoc, doc, setDoc, where, orderBy, collection} from "firebase/firestore";
import {getDocs, query} from "firebase/firestore";
import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";


// get all profiles

export default function StudentLeaderboard() {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        getProfiles().then((profiles) => {
            console.log(profiles)
            setProfiles(profiles);
        });
    }, [])
    const getProfiles = async () => {
        const q = query(collection(db, "profiles"));
        const querySnapshot = await getDocs(q);
        // rank profiles by elo

        const sortedProfiles = querySnapshot.docs.sort((a, b) => {
            return b.data().elo - a.data().elo;
        });

        const profiles = [];
        sortedProfiles.forEach((doc) => {

            profiles.push(doc.data());
        });
        return profiles;
    };
    return (
        <Box color={'brand.900'} width={'100%'} fontSize={'24px'}>

            <Center width={'100%'}>
                <VStack width={'100%'}>
                    <Box width={'70%'} bg={'brand.100'} borderRadius={3} p={2}>
                        <HStack fontWeight={800}>
                            <Text width={'20%'}>Rank</Text>
                            <Text width={'20%'}>Grade</Text>
                            <Text width={'20%'}>GPA</Text>
                            <Text width={'20%'}>APs</Text>
                            <Text width={'20%'}>SAT</Text>


                        </HStack>
                    </Box>
                    <VStack width={'100%'}>
                        {profiles.map((profile,) => (

                            <Box p={5} bg={'brand.100'} borderRadius={10} width={'70%'} h={'100px'}>
                                <HStack>
                                    <Text width={'20%'}>{profile.elo}</Text>
                                    <Text width={'20%'}>{profile.grade}</Text>
                                    <Text width={'20%'}>{profile.GPA}</Text>
                                    <Text width={'20%'}>{profile.APs}</Text>
                                    <Text width={'20%'}>{profile.SAT}</Text>
                                </HStack>
                            </Box>
                        ))}
                    </VStack>
                </VStack>
            </Center>
        </Box>

    );
}
