// Landing
import HomePage from './containers/HomePage/index'
import AboutPage from './containers/AboutPage/index'

// Global
import ContactPage from './containers/ContactPage/index'
import NotFoundPage from './containers/NotFoundPage/index'

// Auth
import RegisterPage from './containers/RegisterPage/index'
import RegisterConfirmPage from './containers/RegisterConfirmPage/index'
import RegisterFailurePage from './containers/RegisterFailurePage/index'
import LoginPage from './containers/LoginPage/index'

// Account
import AccountPage from './containers/AccountPage/index'
import ChangePasswordPage from './containers/ChangePasswordPage/index'

// Trainings
import TrainingsPage from './containers/TrainingsPage/index'
import TrainingPage from './containers/TrainingPage/index'
import CreateTrainingPage from './containers/CreateTrainingPage/index'
import EditTrainingPage from './containers/EditTrainingPage/index'

// Users
import UserPage from './containers/UserPage/index'

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
    path: "/about",
    name: "About",
    icon: "",
    component: AboutPage,
    layout: "/landing",
    type: "Normal"
  },
  {
    path: "/contact",
    name: "Contact",
    icon: "",
    component: ContactPage,
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
    path: "/:name",
    name: "User",
    icon: "",
    component: UserPage,
    layout: "/users",
    type: "Normal"
  },
  {
    path: "/change-password",
    name: "Change password",
    icon: "",
    component: ChangePasswordPage,
    layout: "/account",
    type: "Private"
  },
  {
    path: "",
    name: "Trainings",
    icon: "",
    component: TrainingsPage,
    layout: "/trainings",
    type: "Normal"
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
    path: "/:id",
    name: "Training",
    icon: "",
    component: TrainingPage,
    layout: "/trainings",
    type: "Normal"
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
