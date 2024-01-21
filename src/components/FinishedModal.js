import React from 'react';
import {
    Modal,
    ModalOverlay,

    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
} from "@chakra-ui/react";

export default function FinishedModal({isOpen, onClose, oldElo1, oldElo2, newElo1, newElo2}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Match complete</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Text>Player 1 elo: {oldElo1} -> {newElo1}</Text>
                    <Text>Player 2 elo: {oldElo2} -> {newElo2}</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}