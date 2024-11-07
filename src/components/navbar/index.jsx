// import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { getDataFromLocalStorage } from "../../helpers/get-data-from-local";
// ++++++++++ images import ++++++++++
// import ArrowBottomIcon from "../../assets/icons/arrows/arrow-bottom.svg";

export const Navbar = () => {
  // ----------store----------

  // ---------- hooks ----------
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------- variables ----------
  const lng = i18n.language;

  // ---------- state ----------

  // ---------- lifecycle--------

  // ---------- render jsx ----------
  return (
    <nav className="flex flex-col px-4">
      <ul className="flex flex-col gap-y-1">
        <li className="rounded-11 h-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.company_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/accountPlanning"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.account_planning_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.users_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/userCategory"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.user_category_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/definitionType"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.definition_type_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/definition"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.definition_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/role"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.role_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/city"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.city_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/country"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.country_title")}
          </NavLink>
        </li>

        <li className="rounded-11 h-12">
          <NavLink
            to="/language"
            className={({ isActive }) =>
              isActive
                ? "block pl-5 text-16 rounded-md py-2 bg-custom-blue text-white dark:text-dark_custom-full-white dark:bg-dark_custom-full-black"
                : "block pl-5 text-16 rounded-md py-2 text-custom-dark dark:text-dark_custom-full-white"
            }
          >
            {t("navbar.language_title")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
