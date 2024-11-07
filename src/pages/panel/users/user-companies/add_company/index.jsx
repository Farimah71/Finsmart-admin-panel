import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { SearchBox, Spinner, Table } from "../../../../../components";
import { getCompanies } from "../../../../../redux/actions/settings/company";
import { useNavigate } from "react-router-dom";
import { createUserCompany } from "../../../../../redux/actions/user-company";
import { BeatLoader } from "react-spinners";

export const AddCompany = ({
  userId,
  userName,
  userCompanyList,
  onCloseModal,
  reloadPageHandler,
}) => {
  // --------- states --------
  const [data, setData] = useState();
  const [userCompanies, setUserCompanies] = useState();
  const [filtered, setFiltered] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [rowId, setRowId] = useState();

  // ---------- store ----------
  const { info: companyData, loading: companyLoading } = useSelector(
    (state) => state.companySlice
  );
  const { loading: userCompanyLoading } = useSelector(
    (state) => state.userCompanySlice
  );

  // ---------- hooks ---------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ---------- i18next ----------
  const { t, i18n } = useTranslation();
  const lng = localStorage.getItem("lng");

  // ---------- lifecycles ----------
  useEffect(() => {
    dispatch(
      getCompanies({
        pageNumber: 0,
        pageSize: 0,
        filters: [],
        orderBy: "",
        includeProperties: "",
      })
    );
  }, []);
  useEffect(() => {
    if (companyData.count) {
      const values = companyData.data.map((item, index) => ({
        rowId: index + 1,
        id: item.companyId,
        logo: item.logo,
        title: item.title,
        bio: item.bio,
        country: item.country?.title,
        establishmentYear: item.establishmentYear,
        activity: item.companyActivityCategory?.titleEn,
      }));
      setData(values);
    }
  }, [companyData]);
  useEffect(() => {
    if (userCompanyList.length) {
      const userCompanyIdList = userCompanyList.map((uc) => uc.companyId);
      setUserCompanies(userCompanyIdList);
    }
  }, [userCompanyList]);

  // ---------- variables ------------
  const cols = [
    {
      name: t("table.col.logo"),
      selector: (row) => (
        <img
          className="w-12 h-12 rounded-full"
          src={`data:image/jpeg;base64,${row.logo}`}
          alt="avatar"
        />
      ),
      width: "120px",
    },
    {
      name: t("table.col.name"),
      cell: (row) => (
        <p className="dark:text-dark_custom-full-white">{row.title}</p>
      ),
      width: "200px",
    },
    {
      name: t("table.col.description"),
      selector: (row) => (
        <div
          className="dark:text-dark_custom-full-white cursor-help"
          title={row.bio}
        >
          {row.bio.length > 30 ? row.bio.substring(0, 30) + "..." : row.bio}
        </div>
      ),
    },
    {
      name: t("table.col.action"),
      cell: (row) => (
        <div className="group relative flex items-center justify-center gap-x-2">
          {actions?.map((action, index) => (
            <>
              {action.type === "add" && (
                <div
                  key={index}
                  onClick={() => {
                    setRowId(row.id);
                    dispatch(
                      createUserCompany(
                        {
                          companyId: row.id,
                          userId: userId,
                          userCategoryId: 1,
                          isActive: false,
                          isPartner: false,
                          siteUrl: "",
                          activationCode: "",
                        },
                        (status) => reloadHandler(status)
                      )
                    );
                  }}
                >
                  <button
                    disabled={
                      (userCompanies?.length > 0 &&
                        userCompanies?.includes(row.id)) ||
                      (userCompanyLoading && row.id == rowId)
                    }
                    className="rounded-md w-26 whitespace-nowrap bg-custom-blue disabled:bg-custom-gray-muted hover:bg-custom-blue-dark p-2 text-white"
                  >
                    {userCompanyLoading && row.id == rowId ? (
                      <BeatLoader color="white" size={5} />
                    ) : (
                      t("button.add_to_user")
                    )}
                  </button>
                </div>
              )}
            </>
          ))}
        </div>
      ),
    },
  ];
  const actions = [
    {
      type: "add",
      path: "",
    },
  ];

  // ----------- functions ------------
  const reloadHandler = (status) => {
    if (status) {
      reloadPageHandler();
      dispatch(
        getCompanies({
          pageNumber: 0,
          pageSize: 0,
          filters: [],
          orderBy: "",
          includeProperties: "",
        })
      );
    }
  };
  const handleSearch = (e) => {
    setIsSearching(true);
    const searchString = e.target.value;
    if (companyData.count) {
      const filtered = data?.filter((company) => {
        return company.title.toLowerCase().includes(searchString.toLowerCase());
      });
      setFiltered(filtered);
    }
  };

  // ----------- render jsx -----------
  return (
    <div className="flex flex-col gap-y-8 min-h-[400px] p-6 pb-4 bg-white dark:bg-dark_custom-light-black rounded-10">
      <div className="flex justify-between items-center dark:bg-dark_custom-light-black">
        <div className="flex flex-col gap-y-1">
          <h4 className="text-19 text-custom-dark font-bold dark:text-dark_custom-full-white">
            {t("text.add_to_be_available")}{" "}
            <span className="text-custom-blue-light capitalize">
              {userName}
            </span>
          </h4>
        </div>
        <div className="flex gap-x-2">
          <div
            className="cursor-pointer dark:text-dark_custom-full-white"
            onClick={onCloseModal}
          >
            <svg
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
        </div>
      </div>
      <hr />

      <div className="flex justify-between">
        <h4 className="text-14 flex gap-x-2 text-custom-gray-muted dark:text-dark_custom-light-white">
          {t("table.result")}:
          <span className="text-custom-gray-200 font-bold dark:text-dark_custom-light-white">
            {companyData.count}
          </span>
        </h4>
        <div>
          {companyData.count > 0 && (
            <SearchBox
              placeholder={t("input.search_company.placeholder")}
              onChange={handleSearch}
            />
          )}
        </div>
      </div>
      <div className="lg:h-[500px] md:h-[400px] h-[300px] overflow-y-scroll">
        {companyLoading && (
          <div className="w-fit mx-auto">
            <Spinner />
          </div>
        )}
        {companyData.count > 0 && (
          <Table cols={cols} data={isSearching ? filtered : data} />
        )}
      </div>
    </div>
  );
};
