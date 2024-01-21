import React from 'react';
import {
    Modal,
    ModalOverlay,

    ModalContent, HStack,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
} from "@chakra-ui/react";

export default function FinishedModal({isOpen, onClose, oldElo1, oldElo2, newElo1, newElo2, isCorrect}) {
    let student1win = false;
    let student2win = false;
    if (newElo1 > oldElo1) {
        student1win = true;
    }
    if (newElo2 > oldElo2) {
        student2win = true;
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                {/*<ModalHeader>{isCorrect === undefined ? "Correct!" : "Incorrect!"}</ModalHeader>*/}
                <ModalHeader>Results</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <HStack>
                        <Text>
                            Student 1 rating:
                        </Text>
                        <Text color={student1win ? 'green' : 'red'}>{oldElo1} -> {newElo1}</Text>
                    </HStack>
                    <HStack>
                        <Text>
                            Student 2 rating:
                        </Text>
                        <Text color={student2win ? 'green' : 'red'}>{oldElo2} -> {newElo2}</Text>
                    </HStack>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Okay
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}