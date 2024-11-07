import axios from "axios";
import { api } from "../../../api";
import { startLoading, endLoading } from "../../reducers/ui/loading/index";
import {
  setInfo,
  setEditInfo,
  setLoading,
  setRequested,
} from "../../reducers/user-company";
import {
  errorNotification,
  successNotification,
} from "../../../helpers/notification";
// import { setReload } from "../../reducers/ui/reload-page";
import { t } from "i18next";

export const getUserCompanies = (options) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(api.userCompanyApi.getUserCompanies, options)
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setInfo(res.data.data));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    })
    .catch((err) => {
      dispatch(setLoading(false));
    });
};

export const getUserCompanyRequests = (options) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(api.userCompanyApi.getUserCompanies, options)
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setRequested(res.data.data));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    })
    .catch((err) => {
      dispatch(setLoading(false));
    });
};

export const getUserCompany = (id) => (dispatch) => {
  // dispatch(startLoading());
  axios
    .get(api.userCompanyApi.getUserCompany + id)
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setEditInfo(res.data.data));
        // dispatch(endLoading());
      } else {
        // dispatch(endLoading());
      }
    })
    .catch((err) => {
      // dispatch(endLoading());
    });
};

export const createUserCompany = (data, setStatus) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(api.userCompanyApi.createUserCompany, data)
    .then((res) => {
      if (res.data.statusCode === "200") {
        successNotification(t("toast.success"));
        dispatch(setLoading(false));
        setStatus(true);
      } else {
        errorNotification(t("toast.error"));
        dispatch(setLoading(false));
        setStatus(true);
      }
    })
    .catch(() => {
      errorNotification(t("toast.error"));
      dispatch(setLoading(false));
      setStatus(true);
    });
};

export const getByIdUserCompany = (id) => (dispatch) => {
  axios
    .get(api.userCompanyApi.getUserCompany + id)
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setEditInfo(res.data.data));
      } else {
        errorNotification(t("toast.error"));
      }
    })
    .catch(() => {
      errorNotification(t("toast.error"));
    });
};

export const editUserCompany = (id, data, setStatus) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .put(api.userCompanyApi.editUserCompany + id, data)
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setLoading(false));
        successNotification(t("toast.success"));
        setStatus(true);
      } else {
        dispatch(setLoading(false));
        errorNotification(t("toast.error"));
        setStatus(true);
      }
    })
    .catch((err) => {
      dispatch(setLoading(false));
      errorNotification(t("toast.error"));
      setStatus(true);
    });
};

export const deleteUserCompany = (id, setStatus) => (dispatch) => {
  axios
    .delete(api.userCompanyApi.deleteUserCompany + id)
    .then((res) => {
      if (res.data.statusCode === "200") {
        setStatus(true);
      } else {
        setStatus(true);
      }
    })
    .catch((err) => {
      setStatus(true);
    });
};
