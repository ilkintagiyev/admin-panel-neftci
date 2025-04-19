import React, { useState, FormEvent, ChangeEvent } from "react";
import style from "./About.module.scss";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import Modal from "../../components/Modal";
import { MdDelete, MdEdit } from "react-icons/md";
import Add from "./Add";


const About = () => {

  const [modalVisible, setModalVisible] = useState(false);

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
            <th>Başlıq</th>
            <th>Şəkil</th>
            <th>Kontent</th>
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
  );
};

export default About;
