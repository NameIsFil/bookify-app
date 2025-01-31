import { Login } from '../../../views/Login';
import { RoutesEnum } from '../../types/Routes.enum';
import { Route } from '../../types/Route';
import { Dashboard } from '../../../views/Dashboard';
import { VenuesList } from "../../../views/VenuesList";
import { VenueDetails } from "../../../views/VenuesList/VenueTable/VenueDetails";

export const routes: Array<Route> = [
  {
    path: RoutesEnum.LogIn,
    Component: <Login />,
    isPublic: true,
  },
  {
    path: RoutesEnum.Fallback,
    Component: <VenuesList />,
    isPublic: true,
  },
  {
    path: RoutesEnum.Dashboard,
    Component: <Dashboard />,
    name: 'dashboard',
    isPublic: false,
  },
  {
    path: RoutesEnum.VenuesList,
    Component: <VenuesList />,
    name: 'venues-list',
    isPublic: true,
  },
  {
    path: RoutesEnum.Details,
    Component: <VenueDetails />,
    isPublic: false,
  },
];
