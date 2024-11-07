import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal } from "../modal";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NotificationAlert } from "../notification-alert";

export const PageTitle = () => {
  // ---------- states ----------
  const [isShowModal, setIsShowModal] = useState(false);

  // ----------store----------

  // ---------- i18next ----------
  const { t, i18n } = useTranslation();
  const lng = localStorage.getItem("lng");

  // ----------hooks----------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = useLocation();

  // ---------lifecycle---------

  // ------------ render jsx ------------
  return (
    <>
      {/* <Modal state={isShowModal} onCloseModal={() => setIsShowModal(false)}>
        <div
          className="cursor-pointer dark:text-dark_custom-full-white ml-auto mr-2 mt-2"
          onClick={() => {
            setIsShowModal(false);
          }}
        >
          <svg
            className="dark:text-dark_custom-full-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.5"
              x="6"
              y="17.3137"
              width="16"
              height="2"
              rx="1"
              transform="rotate(-45 6 17.3137)"
              fill="currentColor"
            />
            <rect
              x="7.41422"
              y="6"
              width="16"
              height="2"
              rx="1"
              transform="rotate(45 7.41422 6)"
              fill="currentColor"
            />
          </svg>
        </div>
        {<UserType isShowModal={setIsShowModal} />}
      </Modal> */}
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <h2 className="text-18 font-bold dark:text-white">
            {url.pathname === "/" && t("page_title.company")}
          </h2>
          {/* <div
            onClick={() => setIsShowModal(true)}
            className={
              userType &&
              `px-4 py-2 ${
                userType == 1 ? "bg-custom-blue" : "bg-custom-orange"
              } text-white capitalize rounded-10 cursor-pointer`
            }
          >
            {userType ? (
              userType == 1 ? (
                <p>Startup</p>
              ) : (
                <p>Investory</p>
              )
            ) : (
              <p></p>
            )}
          </div> */}

          {/* <Link to={"/userCompany"}>
            {getDataFromJwtToken("CompanyId") && editInfo.data ? (
              <div
                className={`px-4 py-2 bg-custom-blue text-white capitalize rounded-10 cursor-pointer`}
              >
                <p>{editInfo && editInfo.data && editInfo.data[0]?.title}</p>
              </div>
            ) : null}
          </Link> */}
        </div>

        <NotificationAlert />
      </div>
    </>
  );
};
