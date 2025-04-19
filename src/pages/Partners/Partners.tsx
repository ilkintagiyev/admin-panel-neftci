import React, { useEffect, useState } from 'react'
import style from './Partners.module.scss';
import Modal from '../../components/Modal';
import { MdDelete, MdEdit } from "react-icons/md";
import Add from './Add';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';

const Partners = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + "/partners").then(res => {
            console.log(res?.data);

        })
    }, [])

    return (
        <div className={style.container}>
            <Modal visible={modalVisible} setVisible={setModalVisible} >
                <Add />
            </Modal>

            <button
                className={style.addButton}
                onClick={() => setModalVisible(true)}
            >
                Əlavə et
            </button>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Logo</th>
                        <th>Saytın adı</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td><MdDelete style={{ color: "red" }} /></td>
                        <td><MdEdit /></td>
                    </tr>
                    {/* {data.map((user) => (
          <tr key={user.age} >
            <td >{user.age}</td>
            <td>{user.age}</td>
            <td >{user.age}</td>
          </tr>
        ))} */}
                </tbody>
            </table>

        </div>
    )
}

export default Partners