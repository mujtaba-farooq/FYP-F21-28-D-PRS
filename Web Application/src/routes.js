import UserProfiles from './components/userInfo/userProfiles';
import Booking from './screens/bookingScreen';
import Sidebar from "./components/sidebar/sidebar.js";
import FormlogIn from './components/signUp_In/FormlogIn';
import FormSignup from './components/signUp_In/FormSignup';
import FormSuccess from './components/signUp_In/FormSuccess';
import Dashboard from './screens/dashBoard';
import Home from './screens/homeScreen';
import UserData from './screens/userData'
import Parkinglot from './components/parkinglot/parkinglot';

const DashboardRoutes = [
    {
        path: "/home",
        name: "Home",
        icon: "fas fa-home",
        component: Home,
        layout: "/admin",
    }, 
    {
        path: "/parkinglot",
        name: "ParkingLot",
        icon: "fas fa-calendar-alt",
        component: Parkinglot,
        layout: "/admin",
    }, 
    {
        path: "/userProfiles",
        name: "userProfiles",
        icon: "fas fa-users",
        component: UserProfiles,
        layout: "/admin",
    },
    {
        path: "/dashboard",
        name: "dashboard",
        icon: "fas fa-tachometer-alt",
        component: Dashboard,
        layout: "/admin",
    }
]


export default DashboardRoutes;

/**
 * {
        path: "/FormlogIn",
        name: "Login",
        icon: "nc-icon nc-backpack",
        component: FormlogIn,
        layout: "/admin",
    },
    {
        path: "/FormSignup",
        name: "SignUp",
        icon: "nc-icon nc-chart-pie-35",
        component: FormSignup,
        layout: "/admin",
    },
 * 
 * */