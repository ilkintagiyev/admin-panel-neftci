import React, { ReactNode } from 'react'
import { Modal as AntModal } from "antd";


interface IProps {
    visible?: boolean;
    setVisible: (val: boolean) => void;
    children?: ReactNode
}

const Modal = ({ visible, setVisible, children }: IProps) => {

    const closeModal = () => {
        setVisible(false);
    }

    return (
        <AntModal
            width={500}
            open={visible}
            onCancel={closeModal}
            mask={false}
            maskClosable={false}
        >
            {children}
        </AntModal>
    )
}

export default Modal