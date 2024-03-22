import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { AlertStyles } from './AlertStyles';

const Alert = ({ visible, message, onClose }) => {
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={AlertStyles.modalBackground}>
                <View style={AlertStyles.modalContent}>
                    <Text style={AlertStyles.modalText}>{message}</Text>
                    <TouchableOpacity style={AlertStyles.closeButton} onPress={onClose}>
                        <Text style={AlertStyles.closeButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default Alert;