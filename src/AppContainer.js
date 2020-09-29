import { Container } from "flux/utils";
import App from "./views/App";
import AppStore from "./data/stores/AppStore";
import ActivitiesStore from "./data/stores/ActivitiesStore";
import ActivitiesActions from "./data/actions/ActivitiesActions";

export default Container.createFunctional(
  App,
  () => [AppStore, ActivitiesStore],
  () => ({
    app: AppStore.getState(),
    activity: {},
    activities: ActivitiesStore.getState(),

    onCreateActivity: ActivitiesActions.createActivity,
    onLoadActivities: ActivitiesActions.loadActivities
  })
);
