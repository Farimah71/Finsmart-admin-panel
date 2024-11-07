import React, { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route } from "react-router-dom";
import { Loading } from "../components";
import PrivateRoute from "./private";

// ---------- Layouts ----------
const { MainLayout } = lazily(() => import("../layout/_main"));
const { PanelLayout } = lazily(() => import("../layout/_panel"));

// ---------- Authentication Pages ----------
const { Login } = lazily(() => import("../pages/auth/login"));
const { Signup } = lazily(() => import("../pages/auth/signup"));
const { ForgetPassword } = lazily(() =>
  import("../pages/auth/forget-password")
);
const { VerifyUser } = lazily(() => import("../pages/verify-user"));
const { VerifiedEmail } = lazily(() =>
  import("../pages/verification-email-sent")
);

// ---------- Panel Pages ----------
const { ComingSoon } = lazily(() => import("../pages/coming-soon"));
const { Company } = lazily(() => import("../pages/panel/companies"));
const { AccountPlanning } = lazily(() =>
  import("../pages/panel/account-planning/coding-header")
);
const { PlanningDetail } = lazily(() =>
  import("../pages/panel/account-planning/coding-detail")
);
const { UsersList } = lazily(() => import("../pages/panel/users/index"));
const { UserProfilePage } = lazily(() =>
  import("../pages/panel/user-profile/index")
);
const { CompanyUsers } = lazily(() =>
  import("../pages/panel/companies/company-users/index")
);
const { UserCategory } = lazily(() =>
  import("../pages/panel/user-category/index")
);
const { Role } = lazily(() => import("../pages/panel/role/index"));
const { EditCompany } = lazily(() =>
  import("../pages/panel/companies/edit/index")
);
const { Definition } = lazily(() => import("../pages/panel/definition"));
const { DefinitionType } = lazily(() =>
  import("../pages/panel/definition-type")
);

const Index = () => {
  // ---------- render jsx ----------
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<PanelLayout />}>
              <Route index element={<Company />} />
              <Route path="/company" element={<Company />} />
              <Route path="/accountPlanning" element={<AccountPlanning />} />
              <Route
                path="/accountPlanning/detail"
                element={<PlanningDetail />}
              />
              <Route path="/users" element={<UsersList />} />
              <Route path="/userProfile" element={<UserProfilePage />} />
              <Route path="/companyUsers" element={<CompanyUsers />} />
              <Route path="/userCategory" element={<UserCategory />} />
              <Route path="/role" element={<Role />} />
              <Route path="/company/edit" element={<EditCompany />} />
              <Route path="/definition" element={<Definition />} />
              <Route path="/definitionType" element={<DefinitionType />} />

              <Route path="*" element={<ComingSoon />} />
            </Route>
          </Route>

          {/* Verify User Route For Account Activation */}
          <Route>
            <Route path="/verifyUser/:GUID" element={<VerifyUser />} />
            <Route path="/emailSent" element={<VerifiedEmail />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Index;
