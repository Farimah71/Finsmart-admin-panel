import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Field } from "formik";
import { Button, MyForm, Error, Input } from "../../../../components";
import {
  editUserCategory,
  getByIdUserCategory,
} from "../../../../redux/actions/settings/user-category";
import * as Yup from "yup";

export const EditUserCategory = ({ editId, onCloseModal, isReloadPage }) => {
  // ---------- store ----------
  const { editInfo, loading } = useSelector((state) => state.userCategorySlice);

  // ---------- state ----------
  const [formValue, setFormValue] = useState({
    userCategoryId: null,
    titleEn: "",
    titleTr: "",
  });

  // ---------- hooks ----------
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // ---------- variables ----------
  const dataSchema = Yup.object({
    titleEn: Yup.string().required(t("error.title_en_required")),
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
      editUserCategory(editId, values, (status) => reloadPageHandler(status))
    );
  };

  // ---------- lifeCycles ----------
  useEffect(() => {
    dispatch(getByIdUserCategory(editId));
  }, []);
  useEffect(() => {
    if (Object.keys(editInfo).length > 0) {
      setFormValue({
        userCategoryId: editId,
        titleEn: editInfo.titleEn,
        titleTr: editInfo.titleTr,
      });
    }
  }, [editInfo]);

  // ---------- render jsx ----------
  return (
    <>
      <div className="flex items-center justify-between p-4 select-none border-b border-custom-gray-light dark:bg-dark_custom-average-black rounded-t-10">
        <h4 className="text-18 font-bold dark:text-dark_custom-full-white rounded-10">
          {t("page_title.edit_user_category")}
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
              <div className="w-1/2 dark:bg-dark_custom-average-black">
                <Field
                  component={Input}
                  label={t("input.title_en.label")}
                  placeholder={t("input.title_en.placeholder")}
                  name="titleEn"
                  complex
                />
                <Error name="titleEn" />
              </div>
              <div className="w-1/2">
                <Field
                  component={Input}
                  placeholder={t("input.title_tr.placeholder")}
                  label={t("input.title_tr.label")}
                  name="titleTr"
                  complex
                />
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