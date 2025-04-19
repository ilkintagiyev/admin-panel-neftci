import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { datas } from "./utils";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.sidebar}>
            <h2 className={styles.title}>Admin Panel</h2>
            <ul className={styles.menu}>
                {datas?.map((data) => (
                    <li
                        onClick={() => navigate(data?.link)}
                        className={styles.menuItem}
                    >
                        {data?.label}
                    </li>
                ))}
                <li className={styles.menuItem}>Users</li>
                <li className={styles.menuItem}>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;