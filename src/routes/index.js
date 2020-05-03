import React from 'react';
import JumbotronWrapper from '../components/JumbotronWrapper';
import SmsPage from '../components/Sms/Sms';
import DashboardPage from '../components/dashboard/Dashboard';
// import EditModal from '../components/Tables/EditModal';
import SaccoDashBoard from '../components/Sacco/index.js';
import RiderPage from '../components/Riders';
import Newsacco from '../components/Register/Sacco';
import Loading from '../components/Loading';
import Newrider from '../components/Register/Rider';
// import DashboardPage from "../components/dashboard/Dashboard";

// Private routes.
const AdminOnly = () => <JumbotronWrapper title='Admin Only' />;
const Users = () => <JumbotronWrapper title='Users' />;
const Dashboard = () => <DashboardPage Loading={Loading} />;
const Sacco = () => <SaccoDashBoard Loading={Loading} />;
const Riders = () => <RiderPage Loading={Loading} />;
const NewSacco = () => <Newsacco Loading={Loading} />;
const NewRider = () => <Newrider Loading={Loading} />;
const Multistep = () => <JumbotronWrapper title='Multistep' />;
const Sms = () => <SmsPage Loading={Loading} title='Sms' />;
const Profile = () => <JumbotronWrapper title='Profile' />;
const Home = () => <DashboardPage Loading={Loading} />;

export {
  AdminOnly,
  Users,
  Dashboard,
  Sacco,
  Riders,
  Multistep,
  Sms,
  Profile,
  Home,
  NewSacco,
  NewRider
};
