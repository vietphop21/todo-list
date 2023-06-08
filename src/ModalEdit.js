import React, { useRef, useState } from 'react';
import { Button, Modal } from 'antd';
import { toast } from 'react-toastify';

const ModalEdit = (props) => {
    const inputeditRef = useRef();
    let { item, handleEdittodo } = props
    const [valueedit, setValueedit] = useState(`${item.title}`)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleEditEnter = (event) => {
        if (event.keyCode === 13) {
            handleOk()
        }
    }
    const handleOk = () => {
        if (valueedit === '') {
            toast.error("Không được để trống !")
            inputeditRef.current.focus()
            return 0;
            
        }
        if (valueedit === `${item.title}`) {
            toast.error("Vui lòng không nhập cùng công việc cũ !!!")
            inputeditRef.current.focus()
            return 0;
            
        }

        handleEdittodo(
            {
                id: item.id,
                title: valueedit
            }
        )
        inputeditRef.current.focus()
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit
            </Button>
            <Modal title="Edit Todo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                Title:   <input
                    style={{ fontWeight: 'bold' }}
                    type="text"
                    value={valueedit}
                    ref={inputeditRef}
                    onKeyDown={(event) => handleEditEnter(event)}
                    onChange={(e) => setValueedit(e.target.value)}
                />
                <div> Title: {item.title}</div>
                <div> id: {item.id}</div>
            </Modal>
        </>
    );
};

export default ModalEdit;