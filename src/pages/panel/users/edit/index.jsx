import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  MyForm,
  Error,
  Input,
  PhoneNumberInput,
} from "../../../../components";
import { Field } from "formik";
import {
  editUserInfo,
  getByIdUserInfo,
} from "../../../../redux/actions/settings/user-info";
import * as Yup from "yup";

export const EditUser = ({ editId, onCloseModal, isReloadPage }) => {
  // ---------- store ----------
  const { editInfo, loading } = useSelector((state) => state.userInfoSlice);

  // ---------- state ----------
  const [formValue, setFormValue] = useState({});

  // ---------- hooks ----------
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // ---------- variables ----------
  const dataSchema = Yup.object({
    email: Yup.string().required(t("error.email_required")),
    mobileNo: Yup.string().required(t("error.mobileNo_required")),
  });

  // ---------- functions ----------
  const reloadPageHandler = (status) => {
    if (status) {
      onCloseModal();
      isReloadPage();
    }
  };
  const closeHandler = () => {
    onCloseModal();
  };
  const onSubmit = (values) => {
    dispatch(
      editUserInfo(editId, values, (status) => reloadPageHandler(status))
    );
  };

  // ---------- lifeCycles ----------
  useEffect(() => {
    dispatch(getByIdUserInfo(editId));
  }, []);
  useEffect(() => {
    if (Object.keys(editInfo).length > 0) {
      setFormValue({
        userInfoId: editInfo.userInfoId,
        userCategoryId: editInfo.userCategoryId,
        userKey: editInfo.userKey,
        nationalCode: editInfo.nationalCode,
        userName: editInfo.userName,
        mobileNo: editInfo.mobileNo,
        email: editInfo.email,
        firstName: editInfo.firstName,
        lastName: editInfo.lastName,
        password: editInfo.password,
        avatar: editInfo.avatar,
        status: editInfo.status,
        investorCompanyId: editInfo.investorCompanyId,
        activationCode: editInfo.activationCode,
        isFullAdmin: editInfo.isFullAdmin,
        isActive: editInfo.isActive,
        isLock: editInfo.isLock,
        creationDate: editInfo.creationDate,
        fromDate: editInfo.fromDate,
        toDate: editInfo.toDate,
        fromTime: editInfo.fromTime,
        toTime: editInfo.toTime,
        countryId: editInfo.countryId,
        cityId: editInfo.cityId,
        jobTitle: editInfo.jobTitle,
        description: editInfo.description,
        linkedInURL: editInfo.linkedInURL,
        siteUrl: editInfo.siteUrl,
        currentLogin: editInfo.currentLogin,
        userCategory: editInfo.userCategory,
      });
    }
  }, [editInfo]);

  // ---------- render jsx ----------
  return (
    <>
      <div className="flex items-center justify-between p-4 select-none border-b border-custom-gray-light dark:bg-dark_custom-average-black rounded-t-10">
        <h4 className="text-18 font-bold dark:text-dark_custom-full-white rounded-10">
          {t("page_title.edit_user_info")}
        </h4>
        <div
          className="cursor-pointer dark:text-dark_custom-full-white"
          onClick={closeHandler}
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
      <div className="flex-grow overflow-y-auto rounded-b-10">
        <MyForm
          initialValues={formValue}
          validation={dataSchema}
          submit={onSubmit}
          classes="flex flex-col gap-y-10 p-4 select-none"
        >
          <div className="flex flex-col gap-y-4">
            <div className="w-full flex gap-4">
              <div className="flex flex-col gap-y-2 w-1/2 dark:bg-dark_custom-average-black">
                <Field
                  component={PhoneNumberInput}
                  label={t("input.phone_number_title.label")}
                  name="mobileNo"
                  autocomplete="off"
                />
                <Error name="mobileNo" />
              </div>
              <div className="w-1/2">
                <Field
                  component={Input}
                  placeholder={t("input.first_name_title.placeholder")}
                  label={t("input.name.label")}
                  name="firstName"
                  disabled
                />
                <Error name="firstName" />
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <Field
                  component={Input}
                  placeholder={t("input.last_name_title.placeholder")}
                  label={t("input.last_name_title.label")}
                  name="lastName"
                  disabled
                />
              </div>
              <div className="w-1/2">
                <Field
                  component={Input}
                  label={t("input.user_name_title.label")}
                  placeholder={t("input.user_name_title.placeholder")}
                  name="userName"
                  disabled
                  complex
                />
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div className="w-1/2">
                <Field
                  component={Input}
                  placeholder={t("input.email_title.placeholder")}
                  label={t("input.email_title.label")}
                  name="email"
                  complex
                />
                <Error name={"email"} />
              </div>
            </div>
          </div>

          <div className="w-full flex gap-x-2 items-center justify-end">
            <div className="flex items-center gap-x-2">
              <Field
                component={Button}
                title={t("button.save_title")}
                loading={loading}
                type="submit"
              />
            </div>
          </div>
        </MyForm>
      </div>
    </>
  );
};
