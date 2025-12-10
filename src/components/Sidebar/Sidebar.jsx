import css from './Sidebar.module.css';
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className={css.container}>
            <div className={css.logoWrapper}>
                <img src="./logo.png" alt="logo" className={css.logo} />
            </div>

            <nav className={css.menu}>
                <NavLink
                    to="dashboard"
                    className={({ isActive }) =>
                        `${css.item} ${isActive ? css.active : ""}`
                    }
                    title="Dashboard"
                    aria-label="Dashboard"
                    end
                >
                    <MdSpaceDashboard size={24} />
                </NavLink>

                <NavLink
                    to="calendar"
                    className={({ isActive }) =>
                        `${css.item} ${isActive ? css.active : ""}`
                    }
                    title="Calendar"
                    aria-label="Calendar"
                >
                    <AiFillCalendar size={24} />
                </NavLink>

                <NavLink
                    to="board"
                    className={({ isActive }) =>
                        `${css.item} ${isActive ? css.active : ""}`
                    }
                    title="Trello Board"
                    aria-label="Trello Board"
                >
                    <FaTasks size={22} />
                </NavLink>

                <NavLink
                    to="users"
                    className={({ isActive }) =>
                        `${css.item} ${isActive ? css.active : ""}`
                    }
                    title="Users"
                    aria-label="Users"
                >
                    <AiOutlineTable size={24} />
                </NavLink>
            </nav>

            {/* Optional bottom section – you can later add avatar / settings here */}
            <div className={css.bottom}>
                <span className={css.appName}>Service Desk</span>
            </div>
        </aside>
    );
};

export default Sidebar;
