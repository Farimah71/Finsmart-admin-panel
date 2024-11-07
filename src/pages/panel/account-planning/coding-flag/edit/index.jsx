import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  MyForm,
  Error,
  Input,
  SelectBox,
} from "../../../../../components";
import {
  editCodingFlag,
  getByIdCodingFlag,
} from "../../../../../redux/actions/settings/coding-flag";
import { Field } from "formik";
import * as Yup from "yup";

export const EditCodingFlag = ({ onCloseModal, isReloadPage, editId }) => {
  // ---------- state ----------
  const [selectedOption, setSelectedOption] = useState({});
  const [initialValue, setInitialValue] = useState({
    codingFlagId: editId,
    finsmartCodingId: 0,
    flagType: 0,
    keyword: "",
  });

  // ---------- store ----------
  const { editInfo, loading } = useSelector((state) => state.codingFlagSlice);

  // ---------- i18next ----------
  const { t, i18n } = useTranslation();
  const lng = localStorage.getItem("lng");

  // ---------- hooks ----------
  const dispatch = useDispatch();

  // ---------- variables ----------
  const selectOptions = [
    { value: 1, label: "Green" },
    { value: 2, label: "Red" },
    { value: 3, label: "Blue" },
  ];
  const dataSchema = Yup.object({
    keyword: Yup.string().required(t("error.keyword_required")),
  });

  // ---------- functions ----------
  const reloadPageHandler = (status) => {
    if (status) {
      onCloseModal();
      isReloadPage();
    }
  };
  const onSubmit = (values) => {
    dispatch(
      editCodingFlag(editId, values, (status) => reloadPageHandler(status))
    );
  };

  // ---------- lifeCycle ----------
  useEffect(() => {
    dispatch(getByIdCodingFlag(editId));
  }, [editId]);
  useEffect(() => {
    if (editInfo) {
      setInitialValue({
        codingFlagId: editId,
        finsmartCodingId: editInfo.finsmartCodingId,
        flagType: editInfo.flagType,
        keyword: editInfo.keyword,
      });
      setSelectedOption(
        selectOptions.filter((option) => option.value === editInfo.flagType)
      );
    }
  }, [editInfo]);

  // ---------- render jsx ----------
  return (
    <>
      <div className="flex items-center justify-between p-3 overflow-hidden border-custom-gray-light dark:bg-dark_custom-average-black">
        <h4 className="text-18 font-bold dark:text-custom-gray-light">
          {t("page_title.edit_coding_flag")}
        </h4>
        <div
          className="cursor-pointer dark:text-custom-gray-light"
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

      <MyForm
        initialValues={initialValue}
        validation={dataSchema}
        submit={onSubmit}
        classes="flex flex-col gap-y-2 px-4"
      >
        <div className="flex flex-col gap-y-4 dark:bg-dark_custom-average-black">
          <div className="w-full flex gap-x-4">
            <div className="w-1/2">
              <Field
                component={Input}
                placeholder={t("input.keyword.placeholder")}
                label={t("input.keyword.label")}
                name="keyword"
                complex
              />
              <Error name="keyword" />
            </div>
            <div className="w-1/2">
              <Field
                component={SelectBox}
                placeholder={t("input.flag_type.placeholder")}
                label={t("input.flag_type.label")}
                name="flagType"
                options={selectOptions}
                selectedOption={selectedOption}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-x-2 items-center justify-end mb-2">
          <Field
            component={Button}
            title={t("button.save_title")}
            loading={loading}
            type="submit"
          />
        </div>
      </MyForm>
    </>
  );
};
