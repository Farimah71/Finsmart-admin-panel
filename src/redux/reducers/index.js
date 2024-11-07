import { combineReducers } from "redux";

import authSlice from "./auth/index";
import loadingSlice from "./ui/loading/index";
import themeSlice from "./theme/index";
import userCompanySlice from "./user-company/index";
import countrySlice from "./settings/country/index";
import citySlice from "./settings/city/index";
import currencySlice from "./settings/currency/index";
import languageSlice from "./settings/language/index";
import companyActivityCategorySlice from "./settings/company-activity-category/index";
import companySlice from "./settings/company/index";
import packetSlice from "./settings/packet/index";
import companyPacketSlice from "./settings/company-packet/index";
import FinsmartCodingSlice from "./settings/Finsmart-coding/index";
import FinsmartCodingHeaderSlice from "./settings/Finsmart-coding-header/index";
import codeMapperSlice from "./settings/code-mapper/index";
import reloadPageSlice from "./ui/reload-page/index";
import codingFlagSlice from "./settings/coding-flag/index";
import sectorSlice from "./settings/sector/index";
import incomeBudgetTypeSlice from "./settings/income-budget-type/index";
import companyContactSlice from "./settings/company-contact";
import companyInvestSlice from "./settings/company-invest";
import userCategorySlice from "./settings/user-category";
import roleSlice from "./settings/role";
import definitionTypeSlice from "./settings/definition-type";
import definitionSlice from "./settings/definition";
import userInfoSlice from "./settings/user-info";

export const reducers = combineReducers({
  authSlice,
  loadingSlice,
  themeSlice,
  userCompanySlice,
  countrySlice,
  citySlice,
  languageSlice,
  currencySlice,
  companyActivityCategorySlice,
  companySlice,
  packetSlice,
  companyPacketSlice,
  FinsmartCodingSlice,
  FinsmartCodingHeaderSlice,
  codeMapperSlice,
  reloadPageSlice,
  codingFlagSlice,
  sectorSlice,
  incomeBudgetTypeSlice,
  companyContactSlice,
  companyInvestSlice,
  userCategorySlice,
  roleSlice,
  definitionSlice,
  definitionTypeSlice,
  userInfoSlice,
});
