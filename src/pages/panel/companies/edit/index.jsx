import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MyForm,
  Input,
  Button,
  Error,
  SelectBox,
  UploadFile,
  Spinner,
} from "../../../../components";
import { Field } from "formik";
import {
  editCompany,
  getByIdCompany,
} from "../../../../redux/actions/settings/company";
import { useTranslation } from "react-i18next";
import { getCountries } from "../../../../redux/actions/settings/country";
import { getCities } from "../../../../redux/actions/settings/city";
import { getCompanyActivityCategories } from "../../../../redux/actions/settings/company-activity-category";
import { convertArrayToSelectOptions } from "../../../../helpers/convert-array-to-select-options";
import { getSectors } from "../../../../redux/actions/settings/sector";
import { getIncomeBudgetTypes } from "../../../../redux/actions/settings/income-budget-type";
import { getCurrencies } from "../../../../redux/actions/settings/currency";
import { getPackets } from "../../../../redux/actions/settings/packet";
import { GiCheckMark } from "react-icons/gi";
import {
  editCompanyPacket,
  getCompanyPacket,
} from "../../../../redux/actions/settings/company-packet";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";

export const EditCompany = () => {
  // ---------- store ----------
  const { isLoading } = useSelector((state) => state.loadingSlice);
  const { editInfo, loading } = useSelector((state) => state.companySlice);
  const { info: countryData, loading: countryLoading } = useSelector(
    (state) => state.countrySlice
  );
  const { info: cityData, loading: cityLoading } = useSelector(
    (state) => state.citySlice
  );
  const { info: activityCategoryData, loading: activityCategoryLoading } =
    useSelector((state) => state.companyActivityCategorySlice);
  const { info: sectorData, loading: sectorLoading } = useSelector(
    (state) => state.sectorSlice
  );
  const { info: budgetTypeData, loading: budgetTypeLoading } = useSelector(
    (state) => state.incomeBudgetTypeSlice
  );
  const { info: currencyData, loading: currencyLoading } = useSelector(
    (state) => state.currencySlice
  );
  const { info: packetData } = useSelector((state) => state.packetSlice);
  const { editInfo: companyPacketData, loading: packetLoading } = useSelector(
    (state) => state.companyPacketSlice
  );

  //  --------- states -----------
  const [isShowERPSelect, setIsShowERPSelect] = useState(false);
  const [selectValue, setSelectValue] = useState({});
  const [isReload, setIsReload] = useState(false);
  const [selectOptions, setSelectOptions] = useState({
    country: [],
    city: [],
    activityCategory: [],
    sector: [],
    incomeBudget: [],
    currency: [],
  });
  const [selectedOptions, setSelectedOptions] = useState({
    country: {},
    city: {},
    activityCategory: {},
    sector: {},
    incomeBudget: {},
    currency: {},
    companyPhase: {},
    erp: {},
  });
  const [initialValues, setInitialValues] = useState({
    companyId: 0,
    userId: null,
    isActiveForUser: true,
    companyActivityCategoryId: null,
    countryId: null,
    currencyId: null,
    languageId: null,
    cityId: null,
    title: "",
    logo: "",
    inviteKey: "",
    isDemo: false,
    bio: "",
    description: "",
    openForCFO: false,
    openForInvestor: false,
    needInvestFrom: 0,
    needInvestTo: 0,
    establishmentYear: null,
    investPrice: 0,
    suggestedInvestPrice: 0,
    isActive: false,
    hasDebit: false,
    isMain: false,
    companyPhase: null,
    targetGroup: "",
    numberOfEmployees: 0,
    incomeBudgetTypeId: null,
    sectorId: null,
    address: "",
  });

  // ---------- i18next ----------
  const { t, i18n } = useTranslation();
  const lng = localStorage.getItem("lng");

  // ---------- hooks ---------
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  // ---------- lifeCycle ----------
  useEffect(() => {
    dispatch(getByIdCompany(companyId, ""));
    dispatch(getCountries(option));
    dispatch(getCities(option));
    dispatch(getCompanyActivityCategories(option));
    dispatch(getSectors(option));
    dispatch(getIncomeBudgetTypes(option));
    dispatch(getCurrencies(option));
    dispatch(
      getPackets({
        pageNumber: 0,
        pageSize: 0,
        filters: [],
        orderBy: "",
        includeProperties: "PacketPeriods.Period,Roles",
      })
    );
    dispatch(
      getCompanyPacket({
        filters: [
          {
            property: "CompanyId",
            operation: 5,
            values: [`${companyId}`],
          },
        ],
      })
    );
  }, [isReload]);
  useEffect(() => {
    if (editInfo) {
      setInitialValues({
        companyId: editInfo.companyId,
        userId: editInfo.userId,
        isActiveForUser: editInfo.isActiveForUser,
        companyActivityCategoryId: editInfo.companyActivityCategoryId,
        countryId: editInfo.countryId,
        currencyId: editInfo.currencyId,
        languageId: editInfo.languageId,
        cityId: editInfo.cityId,
        title: editInfo.title,
        logo: editInfo.logo,
        inviteKey: editInfo.inviteKey,
        isDemo: editInfo.isDemo,
        bio: editInfo.bio,
        description: editInfo.description,
        openForCFO: editInfo.openForCFO,
        openForInvestor: editInfo.openForInvestor,
        needInvestFrom: editInfo.needInvestFrom,
        needInvestTo: editInfo.needInvestTo,
        establishmentYear: editInfo.establishmentYear,
        investPrice: editInfo.investPrice,
        suggestedInvestPrice: editInfo.suggestedInvestPrice,
        isActive: editInfo.isActive,
        hasDebit: editInfo.hasDebit,
        isMain: editInfo.isMain,
        companyPhase: editInfo.companyPhase,
        targetGroup: editInfo.targetGroup,
        numberOfEmployees: editInfo.numberOfEmployees,
        incomeBudgetTypeId: editInfo.incomeBudgetTypeId,
        sectorId: editInfo.sectorId,
        address: editInfo.address,
      });
    }
  }, [editInfo]);
  useEffect(() => {
    if (countryData.count) {
      const countries = convertArrayToSelectOptions(countryData.data, [
        "countryId",
        "title",
      ]);
      setSelectOptions((options) => ({ ...options, country: countries }));
    }
  }, [countryData]);
  useEffect(() => {
    if (cityData.count) {
      const cities = convertArrayToSelectOptions(cityData.data, [
        "cityId",
        "title",
      ]);
      setSelectOptions((options) => ({ ...options, city: cities }));
    }
  }, [cityData]);
  useEffect(() => {
    if (activityCategoryData.count) {
      const categories = convertArrayToSelectOptions(
        activityCategoryData.data,
        [
          "companyActivityCategoryId",
          lng === "en" ? "titleEn" : lng === "tr" ? "titleTr" : "titleEn",
        ]
      );
      setSelectOptions((options) => ({
        ...options,
        activityCategory: categories,
      }));
    }
  }, [activityCategoryData]);
  useEffect(() => {
    if (sectorData.count) {
      const sectors = convertArrayToSelectOptions(sectorData.data, [
        "sectorId",
        "title",
      ]);
      setSelectOptions((options) => ({ ...options, sector: sectors }));
    }
  }, [sectorData]);
  useEffect(() => {
    if (budgetTypeData.count) {
      const budgetTypes = convertArrayToSelectOptions(budgetTypeData.data, [
        "incomeBudgetTypeId",
        "title",
      ]);
      setSelectOptions((options) => ({
        ...options,
        incomeBudget: budgetTypes,
      }));
    }
  }, [budgetTypeData]);
  useEffect(() => {
    if (currencyData.count) {
      const currencies = convertArrayToSelectOptions(currencyData.data, [
        "currencyId",
        "title",
      ]);
      setSelectOptions((options) => ({
        ...options,
        currency: currencies,
      }));
    }
  }, [currencyData]);
  useEffect(() => {
    if (selectValue) {
      selectValue.value === ""
        ? setIsShowERPSelect(true)
        : setIsShowERPSelect(false);
    }
  }, [selectValue]);
  useEffect(() => {
    if (countryData.count) {
      const country = countryData.data?.find(
        (data) => data.countryId === editInfo.countryId
      );
      setSelectedOptions((options) => ({
        ...options,
        country: { value: country?.countryId, label: country?.title },
      }));
    }
    if (cityData.count) {
      const city = cityData.data?.find(
        (data) => data.cityId === editInfo.cityId
      );
      setSelectedOptions((options) => ({
        ...options,
        city: { value: city?.cityId, label: city?.title },
      }));
    }
    if (activityCategoryData.count) {
      const activity = activityCategoryData.data?.find(
        (data) =>
          data.companyActivityCategoryId === editInfo.companyActivityCategoryId
      );
      setSelectedOptions((options) => ({
        ...options,
        activityCategory: {
          value: activity?.companyActivityCategoryId,
          label: activity?.titleEn,
        },
      }));
    }
    if (sectorData.count) {
      const sector = sectorData.data?.find(
        (data) => data.sectorId === editInfo.sectorId
      );
      setSelectedOptions((options) => ({
        ...options,
        sector: { value: sector?.sectorId, label: sector?.title },
      }));
    }
    if (budgetTypeData.count) {
      const budget = budgetTypeData.data?.find(
        (data) => data.incomeBudgetTypeId === editInfo.incomeBudgetTypeId
      );
      setSelectedOptions((options) => ({
        ...options,
        incomeBudget: {
          value: budget?.incomeBudgetTypeId,
          label: budget?.title,
        },
      }));
    }
    if (currencyData.count) {
      const currency = currencyData.data?.find(
        (data) => data.currencyId === editInfo.currencyId
      );
      setSelectedOptions((options) => ({
        ...options,
        currency: { value: currency?.currencyId, label: currency?.title },
      }));
    }
    const phase = companyPhaseOptions.find(
      (data) => data.value === editInfo.companyPhase
    );
    setSelectedOptions((options) => ({
      ...options,
      companyPhase: { value: phase?.value, label: phase?.label },
    }));
    if (
      editInfo.erpSystem === "Logo" ||
      editInfo.erpSystem === "Luka" ||
      editInfo.erpSystem === "Micro"
    ) {
      const erp = ERPOptions.find((data) => data.value === editInfo.erpSystem);
      setSelectedOptions((options) => ({
        ...options,
        erp: { value: erp?.value, label: erp?.label },
      }));
    } else {
      setIsShowERPSelect(true);
      setInitialValues({ ...initialValues, erpSystem: editInfo.erpSystem });
      setSelectedOptions((options) => ({
        ...options,
        erp: { value: "", label: "Other..." },
      }));
    }
  }, [selectOptions]);

  // ---------- variables ---------
  const { companyId } = state;
  const dataSchema = Yup.object().shape({
    title: Yup.string().required(t("error.title_required")),
    countryId: Yup.number().required(t("error.country_required")),
    cityId: Yup.number().required(t("error.city_required")),
    companyActivityCategoryId: Yup.number().required(
      t("error.activity_category_required")
    ),
    establishmentYear: Yup.string().required(
      t("error.establishment_year_required")
    ),
  });
  const option = {
    filters: [],
  };
  const companyPhaseOptions = [
    { value: 1, label: "Pre-seed" },
    { value: 2, label: "Seed" },
    { value: 3, label: "Series A" },
    { value: 4, label: "Series B" },
    { value: 5, label: "Mature" },
  ];
  const ERPOptions = [
    { value: "Logo", label: "Logo" },
    { value: "Luka", label: "Luka" },
    { value: "Micro", label: "Micro" },
    { value: "", label: "Other..." },
  ];
  const periods = ["Monthly", "Yearly"];

  // ---------- functions -----------
  const reloadHandler = (status) => {
    status && setIsReload((prev) => !prev);
  };
  const endEditHandler = (status) => {
    status && navigate(-1);
  };
  const onSubmit = (values) => {
    dispatch(
      editCompany(companyId, values, (status) => endEditHandler(status))
    );
  };

  // ---------- render jsx -----------
  return (
    <MyForm
      initialValues={initialValues}
      validation={dataSchema}
      submit={onSubmit}
      classes={"dark:bg-transparent p-4 bg-white rounded-10"}
    >
      <div className="w-full flex justify-between mb-2">
        <h3 className="text-lg font-semibold dark:text-white">
          {t("page_title.edit_company")}
        </h3>
        <div className="flex gap-x-2">
          <Field
            component={Button}
            title={t("button.back_title")}
            theme="light"
            onClick={() => navigate(-1)}
          />
          <Field
            component={Button}
            title={t("button.save_title")}
            loading={loading}
            type="submit"
          />
        </div>
      </div>
      {isLoading && (
        <div className="text-center">
          <Spinner />
        </div>
      )}
      <div className="mb-2">
        <Field
          component={UploadFile}
          name="logo"
          label={t("button.upload")}
          avatarSrc={`data:image/jpeg;base64,${editInfo.logo}`}
          src={`data:image/jpeg;base64,${editInfo.logo}`}
          maxSize={300000}
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={Input}
            name="title"
            placeholder={t("input.companyTitle.placeholder")}
            label={t("input.companyTitle.label")}
            complex
          />
          <Error name="title" />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="companyActivityCategoryId"
            placeholder={t("input.company_activity_category.placeholder")}
            label={t("input.company_activity_category.label")}
            options={selectOptions.activityCategory}
            loading={activityCategoryLoading}
            selectedOption={selectedOptions.activityCategory}
          />
          <Error name="companyActivityCategoryId" />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={Input}
            type="number"
            name="investPrice"
            placeholder={t("input.investment_so_far.placeholder")}
            label={t("input.investment_so_far.label")}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-4">
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="companyPhase"
            placeholder={t("input.company_phase.placeholder")}
            label={t("input.company_phase.label")}
            options={companyPhaseOptions}
            selectedOption={selectedOptions.companyPhase}
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="currencyId"
            placeholder={t("input.currency.placeholder")}
            label={t("input.currency.label")}
            loading={currencyLoading}
            options={selectOptions.currency}
            selectedOption={selectedOptions.currency}
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={Input}
            name="targetGroup"
            placeholder={t("input.target_group.placeholder")}
            label={t("input.target_group.label")}
            complex
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-4">
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="incomeBudgetTypeId"
            placeholder={t("input.income_budget_type.placeholder")}
            label={t("input.income_budget_type.label")}
            loading={budgetTypeLoading}
            options={selectOptions.incomeBudget}
            selectedOption={selectedOptions.incomeBudget}
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="sectorId"
            placeholder={t("input.sector.placeholder")}
            label={t("input.sector.label")}
            loading={sectorLoading}
            options={selectOptions.sector}
            selectedOption={selectedOptions.sector}
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={Input}
            type="number"
            name="numberOfEmployees"
            placeholder={t("input.number_of_employees.placeholder")}
            label={t("input.number_of_employees.label")}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-4">
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="countryId"
            placeholder={t("input.country.placeholder")}
            label={t("input.country.label")}
            loading={countryLoading}
            options={selectOptions.country}
            //   onChangeHandler={(value) => setSelectedCountry(value)}
            selectedOption={selectedOptions.country}
          />
          <Error name="countryId" />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={SelectBox}
            name="cityId"
            placeholder={t("input.city.placeholder")}
            label={t("input.city.label")}
            options={selectOptions.city}
            loading={cityLoading}
            selectedOption={selectedOptions.city}
          />
          <Error name="cityId" />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={Input}
            name="address"
            placeholder={t("input.address.placeholder")}
            label={t("input.address.label")}
            complex
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-4">
        <div className="w-full flex flex-col gap-y-2">
          <Field
            component={Input}
            type="number"
            name="establishmentYear"
            placeholder={t("input.establishment_year.placeholder")}
            label={t("input.establishment_year.label")}
          />
          <Error name="establishmentYear" />
        </div>
        <div className="w-full">
          <Field
            component={SelectBox}
            name={"erpSystem"}
            label={t("input.erp_system_title.label")}
            placeholder={t("input.erp_system_title.placeholder")}
            options={ERPOptions}
            selectedOption={selectedOptions.erp}
            onChangeHandler={(value) => setSelectValue(value)}
          />
        </div>
        {isShowERPSelect && (
          <div className="w-full">
            <Field
              component={Input}
              name={"erpSystem"}
              label={t("input.erp_title.label")}
              placeholder={t("input.erp_title.placeholder")}
            />
            {<Error name={"erpSystem"} />}
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-3 gap-6 mt-4">
        <div>
          <Field
            component={Input}
            type="textarea"
            name="bio"
            placeholder={t("input.companyBio.placeholder")}
            label={t("input.companyBio.label")}
            complex
          />
        </div>
      </div>
      {packetLoading && (
        <BeatLoader color="blue" size={5} className="w-full text-center" />
      )}
      {packetData.count &&
        packetData.data.map((packet, index) => (
          <div
            className="flex justify-center gap-x-5 mt-4 dark:text-custom-gray-light"
            key={packet.packetId}
          >
            {packet.packetPeriods.map((period, index) => (
              <div
                key={period.periodId}
                className={`border p-5 rounded ${
                  companyPacketData.count &&
                  companyPacketData.data[0]?.packetId === packet.packetId &&
                  companyPacketData.data[0]?.periodId === period.periodId
                    ? "border-custom-blue"
                    : "border-gray-300 opacity-70"
                }`}
              >
                <div className="flex justify-around mb-3">
                  <span className="font-bold">{periods[index]}</span>
                </div>
                <hr />

                <div className="flex justify-around mt-5">
                  <div className="flex gap-4 text-sm font-semibold items-left">
                    {packet.roles.length > 0 &&
                      packet.roles.map((role) => (
                        <span className="flex gap-x-0.5">
                          <GiCheckMark color="#07b555" className="mt-0.5" />
                          <pre>{role.title}</pre>
                        </span>
                      ))}
                  </div>
                </div>
                <span className="flex flex-col gap-y-3 items-center mt-10">
                  <div className="font-semibold">
                    {t("text.price")}: {period.amount}$
                  </div>
                  <Button
                    onClick={() => {
                      dispatch(
                        editCompanyPacket(
                          companyPacketData.data[0]?.companyPacketId,
                          {
                            companyPacketId:
                              companyPacketData.data[0]?.companyPacketId,
                            companyId: companyId,
                            packetId: packet.packetId,
                            periodId: period.periodId,
                            amount: period.amount,
                            isActice: true,
                          },
                          (status) => reloadHandler(status)
                        )
                      );
                    }}
                  >
                    {t("button.select_title")}
                  </Button>
                </span>
              </div>
            ))}
          </div>
        ))}
    </MyForm>
  );
};
