import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {auth} from "../Firebase/firebase";

import {
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    VStack,
    MenuDivider,
    Tooltip,
    HStack,
    Text,
    Box,
    Divider,
    Center,
    Badge,
    Button,
    Stack,
    useDisclosure
} from "@chakra-ui/react";

export default function Navbar({userData, updatedConfig}) {


    function changeLocation() {
        const currentLocation = window.location.pathname;
        if (currentLocation === "/") {
            window.location.replace(`/`);
        }
    }

    //eslint-disable-next-line
    return (
        <Box as={'nav'} bgColor={'transparent'} width={['150vw', '100%', '100%', '100%']}
             className="nav"
             color="brand.900"
             bg={'brand.100'}
        >
            <Box display={'flex'} justifyContent={['initial', 'center', 'center', 'center']}>
                <Box display={'flex'} width={['70%', '90%', '90%', '70%']} justifyContent={'space-between'}>

                    <Box pl={[4, 0, 0, 0]} className="Logo whiteText" fontWeight="500">
                        <HStack>
                            <NavLink onClick={changeLocation} to="/" className="site-title">
                                <Text fontSize={'40px'} fontWeight={600}>
                                    Student ELO
                                </Text>
                            </NavLink>
                        </HStack>

                    </Box>
                    <Box fontWeight={"500"} display={['flex']}>
                        <HStack>


                            <Box fontSize={'20px'} pr={10}>
                                <NavLink to="/leaderboard/students">leaderboard</NavLink>
                            </Box>

                            {!auth.currentUser ? (
                                    <Box>
                                        <Button fontSize={'20px'}>
                                            <NavLink to="/login">login</NavLink>
                                        </Button>
                                    </Box>
                                )
                                :
                                (
                                    <Box>
                                        <Button fontSize={'20px'}>
                                            <NavLink to="/create">create profile</NavLink>
                                        </Button>
                                    </Box>
                                )}

                        </HStack>
                    </Box>


                </Box>
            </Box>
        </Box>

    );
}