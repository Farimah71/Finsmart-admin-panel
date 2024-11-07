import { API_URL } from "../../config";

export const SettingsApi = {
  // ========== User info ==========
  getUserInfos: `${API_URL}/UserInfo/Get`,
  getByIdUserInfo: `${API_URL}/UserInfo/Get/`,
  createUserInfo: `${API_URL}/UserInfo/Post`,
  editUserInfo: `${API_URL}/UserInfo/Put/`,
  deleteUserInfo: `${API_URL}/UserInfo/Delete/`,

  // ========== AccountType ==========
  getAccountTypes: `${API_URL}/AccountType/Get`,
  getAccountType: `${API_URL}/AccountType/Get/`,
  createAccountType: `${API_URL}/AccountType/Post`,
  editAccountType: `${API_URL}/AccountType/Put/`,
  deleteAccountType: `${API_URL}/AccountType/Delete/`,

  // ========== City ==========
  getCities: `${API_URL}/City/Get`,
  getCity: `${API_URL}/City/Get/`,
  createCity: `${API_URL}/City/Post`,
  editCity: `${API_URL}/City/Put/`,
  deleteCity: `${API_URL}/City/Delete/`,

  // ========== Currency ==========
  getCurrencies: `${API_URL}/Currency/Get`,
  getCurrency: `${API_URL}/Currency/Get/`,
  createCurrency: `${API_URL}/Currency/Post`,
  editCurrency: `${API_URL}/Currency/Put/`,
  deleteCurrency: `${API_URL}/Currency/Delete/`,
  getCurrencySuggestion: `${API_URL}/Currency/Suggestion`,

  // ========== Country ==========
  getCountries: `${API_URL}/Country/Get`,
  getCountry: `${API_URL}/Country/Get/`,
  createCountry: `${API_URL}/Country/Post`,
  editCountry: `${API_URL}/Country/Put/`,
  deleteCountry: `${API_URL}/Country/Delete/`,
  getCountrySuggestion: `${API_URL}/Country/Suggestion`,

  // ========== Company ==========
  getCompanies: `${API_URL}/Company/Get`,
  getCompany: `${API_URL}/Company/Get/`,
  createCompany: `${API_URL}/Company/Post`,
  editCompany: `${API_URL}/Company/Put/`,
  deleteCompany: `${API_URL}/Company/Delete/`,
  getCompanySuggestion: `${API_URL}/Company/Suggestion`,
  updateERP: `${API_URL}/Company/UpdateERP`,

  // ========== Login History ==========
  changeCompany: `${API_URL}/LoginHistory/ChangeCompany`,

  // ========== Company Activity Category ==========
  getCompanyActivityCategories: `${API_URL}/CompanyActivityCategory/Get`,
  getCompanyActivityCategory: `${API_URL}/CompanyActivityCategory/Get/`,
  createCompanyActivityCategory: `${API_URL}/CompanyActivityCategory/Post`,
  editCompanyActivityCategory: `${API_URL}/CompanyActivityCategory/Put/`,
  deleteCompanyActivityCategory: `${API_URL}/CompanyActivityCategory/Delete/`,

  // ========== Company Packet ==========
  getCompanyPackets: `${API_URL}/CompanyPacket/Get`,
  getCompanyPacket: `${API_URL}/CompanyPacket/Get/`,
  createCompanyPacket: `${API_URL}/CompanyPacket/Post`,
  editCompanyPacket: `${API_URL}/CompanyPacket/Put/`,
  deleteCompanyPacket: `${API_URL}/CompanyPacket/Delete/`,

  // ========== Finsmart Coding ==========
  getFinsmartCodings: `${API_URL}/FinsmartCoding/Get`,
  getFinsmartCoding: `${API_URL}/FinsmartCoding/Get/`,
  createFinsmartCoding: `${API_URL}/FinsmartCoding/Post`,
  editFinsmartCoding: `${API_URL}/FinsmartCoding/Put/`,
  deleteFinsmartCoding: `${API_URL}/FinsmartCoding/Delete/`,

  // ========== Finsmart Coding Header ==========
  getFinsmartCodingHeaders: `${API_URL}/FinsmartCodingHeader/Get`,
  getFinsmartCodingHeader: `${API_URL}/FinsmartCodingHeader/Get/`,
  createFinsmartCodingHeader: `${API_URL}/FinsmartCodingHeader/Post`,
  editFinsmartCodingHeader: `${API_URL}/FinsmartCodingHeader/Put/`,
  deleteFinsmartCodingHeader: `${API_URL}/FinsmartCodingHeader/Delete/`,
  copyFinsmartCodingHeader: `${API_URL}/FinsmartCodingHeader/Copy/`,

  // ========== Code Mapper ==========
  getCodeMappers: `${API_URL}/CodeMapper/Get`,
  getCodeMapper: `${API_URL}/CodeMapper/Get/`,
  createCodeMapper: `${API_URL}/CodeMapper/Post`,
  editCodeMapper: `${API_URL}/CodeMapper/Put/`,
  deleteCodeMapper: `${API_URL}/CodeMapper/Delete/`,

  // ========== Coding Flag ==========
  getCodingFlags: `${API_URL}/CodingFlag/Get`,
  getCodingFlag: `${API_URL}/CodingFlag/Get/`,
  createCodingFlag: `${API_URL}/CodingFlag/Post`,
  editCodingFlag: `${API_URL}/CodingFlag/Put/`,
  deleteCodingFlag: `${API_URL}/CodingFlag/Delete/`,

  // ========== Company File ==========
  getCompanyFiles: `${API_URL}/CompanyFile/Get`,
  getCompanyFile: `${API_URL}/CompanyFile/Get/`,
  createCompanyFile: `${API_URL}/CompanyFile/Post`,
  editCompanyFile: `${API_URL}/CompanyFile/Put/`,
  convertCompanyFile: `${API_URL}/CompanyFile/StartConvert/`,
  mapCompanyFile: `${API_URL}/CompanyFile/StartMapping/`,
  acceptCompanyFile: `${API_URL}/CompanyFile/AcceptFile/`,

  // ========== Excel Temp Data ==========
  getExcelTempDatas: `${API_URL}/ExcelTempData/Get`,
  getExcelTempData: `${API_URL}/ExcelTempData/Get/`,
  createExcelTempData: `${API_URL}/ExcelTempData/Post`,
  editExcelTempData: `${API_URL}/ExcelTempData/Put/`,
  deleteExcelTempData: `${API_URL}/ExcelTempData/Delete/`,

  // ========== Temp Transaction ==========
  getTempTransactions: `${API_URL}/TempTransaction/Get`,
  getTempTransaction: `${API_URL}/TempTransaction/Get/`,
  createTempTransaction: `${API_URL}/TempTransaction/Post`,
  editTempTransaction: `${API_URL}/TempTransaction/Put/`,
  deleteTempTransaction: `${API_URL}/TempTransaction/Delete/`,

  // ========== Company Transaction ==========
  getCompanyTransactions: `${API_URL}/CompanyTransaction/Get`,
  getCompanyTransaction: `${API_URL}/CompanyTransaction/Get/`,
  createCompanyTransaction: `${API_URL}/CompanyTransaction/Post`,
  editCompanyTransaction: `${API_URL}/CompanyTransaction/Put/`,
  deleteCompanyTransaction: `${API_URL}/CompanyTransaction/Delete/`,

  // ========== Sector ==========
  getSectors: `${API_URL}/Sector/Get`,
  getSector: `${API_URL}/Sector/Get/`,
  createSector: `${API_URL}/Sector/Post`,
  editSector: `${API_URL}/Sector/Put/`,
  deleteSector: `${API_URL}/Sector/Delete/`,

  // ========== Income Budget Type ==========
  getIncomeBudgetTypes: `${API_URL}/IncomeBudgetType/Get`,
  getIncomeBudgetType: `${API_URL}/IncomeBudgetType/Get/`,
  createIncomeBudgetType: `${API_URL}/IncomeBudgetType/Post`,
  editIncomeBudgetType: `${API_URL}/IncomeBudgetType/Put/`,
  deleteIncomeBudgetType: `${API_URL}/IncomeBudgetType/Delete/`,

  // ========== Company Contact ==========
  getCompanyContacts: `${API_URL}/CompanyContact/Get`,
  getCompanyContact: `${API_URL}/CompanyContact/Get/`,
  createCompanyContact: `${API_URL}/CompanyContact/Post`,
  editCompanyContact: `${API_URL}/CompanyContact/Put/`,
  deleteCompanyContact: `${API_URL}/CompanyContact/Delete/`,

  // ========== Company Invest ==========
  getCompanyInvests: `${API_URL}/CompanyInvest/Get`,
  getCompanyInvest: `${API_URL}/CompanyInvest/Get/`,
  createCompanyInvest: `${API_URL}/CompanyInvest/Post`,
  editCompanyInvest: `${API_URL}/CompanyInvest/Put/`,
  deleteCompanyInvest: `${API_URL}/CompanyInvest/Delete/`,

  // ========== User Category ==========
  getUserCategories: `${API_URL}/UserCategory/Get`,
  getUserCategory: `${API_URL}/UserCategory/Get/`,
  createUserCategory: `${API_URL}/UserCategory/Post`,
  editUserCategory: `${API_URL}/UserCategory/Put/`,
  deleteUserCategory: `${API_URL}/UserCategory/Delete/`,

  // ========== Contract Type ==========
  getContractTypes: `${API_URL}/ContractType/Get`,
  getContractType: `${API_URL}/ContractType/Get/`,
  createContractType: `${API_URL}/ContractType/Post`,
  editContractType: `${API_URL}/ContractType/Put/`,
  deleteContractType: `${API_URL}/ContractType/Delete/`,

  // ========== Definition Type ==========
  getDefinitionTypes: `${API_URL}/DefinationType/Get`,
  getDefinitionType: `${API_URL}/DefinationType/Get/`,
  createDefinitionType: `${API_URL}/DefinationType/Post`,
  editDefinitionType: `${API_URL}/DefinationType/Put/`,
  deleteDefinitionType: `${API_URL}/DefinationType/Delete/`,

  // ========== Definition ==========
  getDefinitions: `${API_URL}/Defination/Get`,
  getDefinition: `${API_URL}/Defination/Get/`,
  createDefinition: `${API_URL}/Defination/Post`,
  editDefinition: `${API_URL}/Defination/Put/`,
  deleteDefinition: `${API_URL}/Defination/Delete/`,

  // ========== Language ==========
  getLanguages: `${API_URL}/Language/Get`,
  getLanguage: `${API_URL}/Language/Get/`,
  createLanguage: `${API_URL}/Language/Post`,
  editLanguage: `${API_URL}/Language/Put/`,
  deleteLanguage: `${API_URL}/Language/Delete/`,
  getLanguageSuggestion: `${API_URL}/Language/Suggestion`,

  // ========== Province ==========
  getProvinces: `${API_URL}/Province/Get`,
  getProvince: `${API_URL}/Province/Get/`,
  createProvince: `${API_URL}/Province/Post`,
  editProvince: `${API_URL}/Province/Put/`,
  deleteProvince: `${API_URL}/Province/Delete/`,
  getProvinceSuggestion: `${API_URL}/Province/Suggestion`,

  // ========== Packet ==========
  getPackets: `${API_URL}/Packet/Get`,
  getPacket: `${API_URL}/Packet/Get/`,
  createPacket: `${API_URL}/Packet/Post`,
  editPacket: `${API_URL}/Packet/Put/`,
  deletePacket: `${API_URL}/Packet/Delete/`,

  // ========== Employee Title ==========
  getEmployeeTitles: `${API_URL}/EmployeeTitle/Get`,
  getEmployeeTitle: `${API_URL}/EmployeeTitle/Get/`,
  createEmployeeTitle: `${API_URL}/EmployeeTitle/Post`,
  editEmployeeTitle: `${API_URL}/EmployeeTitle/Put/`,
  deleteEmployeeTitle: `${API_URL}/EmployeeTitle/Delete/`,

  // ========== Military Status ==========
  getAllMilitaryStatus: `${API_URL}/MilitaryStatus/Get`,
  getMilitaryStatus: `${API_URL}/MilitaryStatus/Get/`,
  createMilitaryStatus: `${API_URL}/MilitaryStatus/Post`,
  editMilitaryStatus: `${API_URL}/MilitaryStatus/Put/`,
  deleteMilitaryStatus: `${API_URL}/MilitaryStatus/Delete/`,

  // ========== Permission Type ==========
  getPermissionTypes: `${API_URL}/PermissionType/Get`,
  getPermissionType: `${API_URL}/PermissionType/Get/`,
  createPermissionType: `${API_URL}/PermissionType/Post`,
  editPermissionType: `${API_URL}/PermissionType/Put/`,
  deletePermissionType: `${API_URL}/PermissionType/Delete/`,

  // ========== Person ==========
  getPersons: `${API_URL}/Person/Get`,
  getPerson: `${API_URL}/Person/Get/`,
  createPerson: `${API_URL}/Person/Post`,
  editPerson: `${API_URL}/Person/Put/`,
  deletePerson: `${API_URL}/Person/Delete/`,
  getPersonSuggestion: `${API_URL}/Person/Suggestion`,

  // ========== Role ==========
  getRoles: `${API_URL}/Role/Get`,
  getRole: `${API_URL}/Role/Get/`,
  createRole: `${API_URL}/Role/Post`,
  editRole: `${API_URL}/Role/Put/`,
  deleteRole: `${API_URL}/Role/Delete/`,

  // ========== Role Permission ==========
  getRolePermissions: `${API_URL}/RolePermission/Get`,
  getRolePermission: `${API_URL}/RolePermission/Get/`,
  createRolePermission: `${API_URL}/RolePermission/Post`,
  editRolePermission: `${API_URL}/RolePermission/Put/`,
  deleteRolePermission: `${API_URL}/RolePermission/Delete/`,

  // ========== Work Type ==========
  getWorkTypes: `${API_URL}/WorkType/Get`,
  getWorkType: `${API_URL}/WorkType/Get/`,
  createWorkType: `${API_URL}/WorkType/Post`,
  editWorkType: `${API_URL}/WorkType/Put/`,
  deleteWorkType: `${API_URL}/WorkType/Delete/`,

  // ========== Work Mode ==========
  getWorkModes: `${API_URL}/WorkMode/Get`,
  getWorkMode: `${API_URL}/WorkMode/Get/`,
  createWorkMode: `${API_URL}/WorkMode/Post`,
  editWorkMode: `${API_URL}/WorkMode/Put/`,
  deleteWorkMode: `${API_URL}/WorkMode/Delete/`,

  // ========== Work Location ==========
  getWorkLocations: `${API_URL}/WorkLocation/Get`,
  getWorkLocation: `${API_URL}/WorkLocation/Get/`,
  createWorkLocation: `${API_URL}/WorkLocation/Post`,
  editWorkLocation: `${API_URL}/WorkLocation/Put/`,
  deleteWorkLocation: `${API_URL}/WorkLocation/Delete/`,

  // ========== File Type ==========
  getFileTypes: `${API_URL}/FileType/Get`,
  getFileType: `${API_URL}/FileType/Get/`,
  createFileType: `${API_URL}/FileType/Post`,
  editFileType: `${API_URL}/FileType/Put/`,
  deleteFileType: `${API_URL}/FileType/Delete/`,

  // ========== PowerBi ==========
  getEmbedReport: `${API_URL}/PowerBI/EmbedReport`,
};
