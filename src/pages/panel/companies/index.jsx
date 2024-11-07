import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { SearchBox, Spinner, Table } from "../../../components";
import { HiUsers } from "react-icons/hi";
import { MdDomainDisabled } from "react-icons/md";
// import { UpdateAxiosHeaders } from "../../../helpers/update-axios-headers";
import {
  editCompany,
  getByIdCompany,
  getCompanies,
} from "../../../redux/actions/settings/company";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

export const Company = () => {
  // --------- states --------
  const [data, setData] = useState();
  const [editType, setEditType] = useState();
  const [filtered, setFiltered] = useState();
  const [isSearching, setIsSearching] = useState(false);

  // ---------- store ----------
  const {
    info: companyData,
    loading: companyLoading,
    editInfo,
  } = useSelector((state) => state.companySlice);

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
        includeProperties: "Country,CompanyActivityCategory",
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
    if (Object.keys(editInfo).length > 0) {
      editType === "deactivate" &&
        dispatch(
          editCompany(
            editInfo.companyId,
            { ...editInfo, isActive: false },
            (status) => reloadPageHandler(status)
          )
        );
    }
  }, [editInfo]);

  // ---------- variables ------------
  const cols = [
    {
      name: t("table.col.no"),
      selector: (row) => (
        <div className="dark:text-dark_custom-full-white">{row.rowId}</div>
      ),
    },
    {
      name: t("table.col.logo"),
      selector: (row) => (
        <img
          className="w-12 h-12 rounded-full"
          src={`data:image/jpeg;base64,${row.logo}`}
          alt="avatar"
        />
      ),
    },
    {
      name: t("table.col.name"),
      cell: (row) => (
        <p className="dark:text-dark_custom-full-white">{row.title}</p>
      ),
    },
    {
      name: t("table.col.activity"),
      selector: (row) => (
        <div className="dark:text-dark_custom-full-white">{row.activity}</div>
      ),
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
      name: t("table.col.country"),
      selector: (row) => (
        <div className="dark:text-dark_custom-full-white">{row.country}</div>
      ),
    },
    {
      name: t("table.col.establishment"),
      selector: (row) => (
        <div className="dark:text-dark_custom-full-white">
          {row.establishmentYear}
        </div>
      ),
    },
    {
      name: t("table.col.action"),
      cell: (row) => (
        <div className="group relative flex items-center justify-center gap-x-2">
          {actions?.map((action, index) => (
            <>
              {action.type === "edit" && (
                <div
                  key={index}
                  className="p-2 rounded-md bg-custom-gray-light cursor-pointer"
                  onClick={() =>
                    navigate("/company/edit", { state: { companyId: row.id } })
                  }
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M14.2667 5.56754L12.8334 7.00754L8.99337 3.16754L10.4334 1.73421C10.5577 1.60516 10.7069 1.50252 10.8718 1.43241C11.0368 1.36231 11.2141 1.32617 11.3934 1.32617C11.5726 1.32617 11.75 1.36231 11.9149 1.43241C12.0799 1.50252 12.229 1.60516 12.3534 1.73421L14.2667 3.64754C14.3957 3.77192 14.4984 3.92104 14.5685 4.08598C14.6386 4.25093 14.6747 4.42831 14.6747 4.60754C14.6747 4.78677 14.6386 4.96415 14.5685 5.1291C14.4984 5.29404 14.3957 5.44316 14.2667 5.56754ZM2.46003 14.6209L6.59337 13.2475L2.75337 9.40754L1.38003 13.5409C1.3297 13.6913 1.32229 13.8528 1.35865 14.0072C1.39501 14.1616 1.4737 14.3029 1.58587 14.415C1.69805 14.5272 1.83927 14.6059 1.99368 14.6423C2.1481 14.6786 2.30959 14.6712 2.46003 14.6209Z"
                      fill="#A1A5B7"
                    />
                    <path
                      d="M3.71337 14.2013L2.46003 14.6213C2.30959 14.6716 2.1481 14.679 1.99368 14.6427C1.83927 14.6063 1.69805 14.5276 1.58587 14.4155C1.4737 14.3033 1.39501 14.1621 1.35865 14.0077C1.32229 13.8532 1.3297 13.6917 1.38003 13.5413L1.80003 12.288L3.71337 14.2013ZM2.75337 9.40797L6.59337 13.248L12.8334 7.00797L8.99337 3.16797L2.75337 9.40797Z"
                      fill="#A1A5B7"
                    />
                  </svg>
                </div>
              )}
              {action.type === "users" && (
                <div
                  key={index}
                  className="p-2 rounded-md bg-custom-gray-light cursor-pointer"
                  onClick={() =>
                    navigate("/companyUsers", { state: { companyId: row.id } })
                  }
                >
                  <HiUsers
                    size={16}
                    className="opacity-70 outline-none"
                    color="gray"
                  />
                </div>
              )}
              {action.type === "deactive" && (
                <div
                  key={index}
                  className="p-2 rounded-md bg-custom-gray-light cursor-pointer"
                  onClick={() => {
                    dispatch(getByIdCompany(row.id, ""));
                    setEditType("deactivate");
                  }}
                >
                  <MdDomainDisabled
                    data-tooltip-id="deactivate"
                    size={16}
                    className="opacity-70 outline-none"
                    color="gray"
                  />
                  <Tooltip id="deactivate">{t("tooltip.deactivate")}</Tooltip>
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
      type: "edit",
      path: "",
    },
    {
      type: "users",
      path: "",
    },
    {
      type: "deactive",
      path: "",
    },
  ];

  // ----------- functions ------------
  const reloadPageHandler = (status) => {
    if (status) {
      dispatch(
        getCompanies({
          pageNumber: 0,
          pageSize: 0,
          filters: [],
          orderBy: "",
          includeProperties: "Country,CompanyActivityCategory",
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
    <div className="flex flex-col gap-y-8 w-full p-6 pb-4 bg-white dark:bg-dark_custom-light-black rounded-10">
      <div className="flex justify-between items-center dark:bg-dark_custom-light-black">
        <div className="flex flex-col gap-y-1">
          <h4 className="text-19 text-custom-dark font-bold dark:text-dark_custom-full-white">
            {t("page_title.companies_list")}
          </h4>
          <h4 className="text-14 flex gap-x-2 text-custom-gray-muted dark:text-dark_custom-light-white">
            {t("text.dashboard")} - {t("text.companies_list")}
          </h4>
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
      {companyLoading ? (
        <Spinner />
      ) : (
        companyData.count > 0 && (
          <Table cols={cols} data={isSearching ? filtered : data} />
        )
      )}
    </div>
  );
};
