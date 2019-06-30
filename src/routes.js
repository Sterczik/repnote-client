// Landing
import HomePage from './containers/HomePage/index'
// import CheckEmail from './containers/ForgotPasswordPage/CheckEmail'
import NotFoundPage from './containers/NotFoundPage/index'

// Auth
import RegisterPage from './containers/RegisterPage/index'
import RegisterConfirmPage from './containers/RegisterConfirmPage/index'
import RegisterFailurePage from './containers/RegisterFailurePage/index'
import LoginPage from './containers/LoginPage/index'
// import ForgotPasswordPage from './containers/ForgotPasswordPage/index'
// import ResetPasswordPage from './containers/ResetPasswordPage/index'

// Account
import AccountPage from './containers/AccountPage/index'
import ChangePasswordPage from './containers/ChangePasswordPage/index'

// Trainings
import TrainingsPage from './containers/TrainingsPage/index'
import MyTrainingsPage from './containers/MyTrainingsPage/index'
import TrainingPage from './containers/TrainingPage/index'
import CreateTrainingPage from './containers/CreateTrainingPage/index'
import EditTrainingPage from './containers/EditTrainingPage/index'

const routes = [
  {
    path: "",
    name: "Home",
    icon: "",
    component: HomePage,
    layout: "/landing",
    type: "Normal"
  },
  {
    path: "/register",
    name: "Register",
    icon: "",
    component: RegisterPage,
    layout: "/auth",
    type: "Public"
  },
  {
    path: "/register-confirm",
    name: "Register Confirm",
    icon: "",
    component: RegisterConfirmPage,
    layout: "/auth",
    type: "Public"
  },
  {
    path: "/register-failure",
    name: "Register Failure",
    icon: "",
    component: RegisterFailurePage,
    layout: "/auth",
    type: "Public"
  },
  {
    path: "/login",
    name: "Login",
    icon: "",
    component: LoginPage,
    layout: "/auth",
    type: "Public"
  },
  {
    path: "",
    name: "Account",
    icon: "",
    component: AccountPage,
    layout: "/account",
    type: "Private"
  },
  {
    path: "/change-password",
    name: "Change password",
    icon: "",
    component: ChangePasswordPage,
    layout: "/account",
    type: "Private"
  },
  // {
  //   path: "/forgot-password",
  //   name: "Forgot password",
  //   icon: "",
  //   component: ForgotPasswordPage,
  //   layout: "/auth",
  //   type: "Public"
  // }, //temporary disabled
  // {
  //   path: "/reset-password",
  //   name: "Reset password",
  //   icon: "",
  //   component: ResetPasswordPage,
  //   layout: "/auth",
  //   type: "Public"
  // }, //temporary disabled
  // {
  //   path: "/check-email",
  //   name: "Check email",
  //   icon: "",
  //   component: CheckEmail,
  //   layout: "/auth",
  //   type: "Public"
  // },
  {
    path: "",
    name: "Trainings",
    icon: "",
    component: TrainingsPage,
    layout: "/trainings",
    type: "Normal"
  },
  {
    path: "/:id",
    name: "Training",
    icon: "",
    component: TrainingPage,
    layout: "/trainings",
    type: "Normal"
  },
  {
    path: "/my",
    name: "My Trainings",
    icon: "",
    component: MyTrainingsPage,
    layout: "/trainings",
    type: "Private"
  },
  {
    path: "/create",
    name: "Create Training",
    icon: "",
    component: CreateTrainingPage,
    layout: "/trainings",
    type: "Private"
  },
  {
    path: "/:id/edit",
    name: "Edit Training",
    icon: "",
    component: EditTrainingPage,
    layout: "/trainings",
    type: "Private"
  },
  {
    path: "/not-found",
    name: "Not found",
    icon: "",
    component: NotFoundPage,
    layout: "/landing",
    type: "Normal"
  }
]

export { routes }
