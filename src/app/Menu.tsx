import { Link } from "react-router-dom";
import React from "react";

export const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Расчет</Link>
            </li>
            <li>
                <Link to="/reports">Отчеты</Link>
            </li>
            <li>
                <Link to="/editor">Редактор комнат</Link>
            </li>
        </ul>
    </nav>
)