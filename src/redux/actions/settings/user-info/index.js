import { api } from "../../../../api";
import { startLoading, endLoading } from "../../../reducers/ui/loading";
import axios from "axios";
import {
  successNotification,
  errorNotification,
} from "../../../../helpers/notification";
import {
  setEditInfo,
  setInfo,
  setLoading,
} from "../../../reducers/settings/user-info";
import { t } from "i18next";

export const getUserInfo = (options) => (dispatch) => {
  dispatch(startLoading());
  axios
    .post(api.SettingsApi.getUserInfos, options)
    .then((res) => {
      dispatch(endLoading());
      if (res.data.statusCode === "200") {
        dispatch(setInfo(res.data));
      } else {
      }
    })
    .catch(() => {
      dispatch(endLoading());
    });
};

export const getByIdUserInfo = (id) => (dispatch) => {
  axios
    .get(api.SettingsApi.getByIdUserInfo + id)
    .then((res) => {
      if (res.data.statusCode === "200") {
        dispatch(setEditInfo(res.data.data));
      } else {
        // errorNotification(t("toast.error"));
      }
    })
    .catch(() => {
      // errorNotification(t("toast.error"));
    });
};

export const editUserInfo = (id, data, setStatus) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .put(api.SettingsApi.editUserInfo + id, data)
    .then((res) => {
      dispatch(setLoading(false));
      if (res.data.statusCode === "200") {
        successNotification(t("toast.success"));
        setStatus(true);
      } else {
        errorNotification(t("toast.error"));
        setStatus(true);
      }
    })
    .catch(() => {
      errorNotification(t("toast.error"));
      dispatch(setLoading(false));
      setStatus(true);
    });
};

export const deleteUserInfo = (id, setStatus) => () => {
  axios
    .delete(api.SettingsApi.deleteUserInfo + id)
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
