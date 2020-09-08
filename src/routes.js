// Landing
import HomePage from 'containers/HomePage/index'

// Global
import ContactPage from 'containers/ContactPage/index'
import NotFoundPage from 'containers/NotFoundPage/index'

// Auth
import RegisterPage from 'containers/RegisterPage/index'
import LoginPage from 'containers/LoginPage/index'

// Account
import AccountPage from 'containers/AccountPage/index'
import ChangePasswordPage from 'containers/ChangePasswordPage/index'

// Trainings
import TrainingsPage from 'containers/TrainingsPage/index'
import TrainingPage from 'containers/TrainingPage/index'
import CreateTrainingPage from 'containers/CreateTrainingPage/index'
import EditTrainingPage from 'containers/EditTrainingPage/index'

// Users
import UserPage from 'containers/UserPage/index'

const routes = [
  {
    path: "",
    name: "Home",
    component: HomePage,
    layout: "/landing",
    type: "Normal"
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    layout: "/landing",
    type: "Normal"
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    layout: "/auth",
    type: "Public"
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    layout: "/auth",
    type: "Public"
  },
  {
    path: "/:name",
    name: "User",
    component: UserPage,
    layout: "/users",
    type: "Normal"
  },
  {
    path: "",
    name: "Account",
    component: AccountPage,
    layout: "/account",
    type: "Private"
  },
  {
    path: "/change-password",
    name: "Change password",
    component: ChangePasswordPage,
    layout: "/account",
    type: "Private"
  },
  {
    path: "",
    name: "Trainings",
    component: TrainingsPage,
    layout: "/trainings",
    type: "Normal"
  },
  {
    path: "/create",
    name: "Create Training",
    component: CreateTrainingPage,
    layout: "/trainings",
    type: "Private"
  },
  {
    path: "/:id",
    name: "Training",
    component: TrainingPage,
    layout: "/trainings",
    type: "Normal"
  },
  {
    path: "/:id/edit",
    name: "Edit Training",
    component: EditTrainingPage,
    layout: "/trainings",
    type: "Private"
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFoundPage,
    layout: "/landing",
    type: "Normal"
  },
  {
    path: "",
    name: "NotFound",
    component: NotFoundPage,
    layout: "/users",
    type: "Normal"
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFoundPage,
    layout: "/account",
    type: "Private"
  },
  {
    path: "/:id/*",
    name: "NotFound",
    component: NotFoundPage,
    layout: "/trainings",
    type: "Private"
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFoundPage,
    layout: "/auth",
    type: "Public"
  }
]

export { routes }
