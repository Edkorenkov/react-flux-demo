import { Container } from "flux/utils";
import App from "./views/App";
import ActivitiesStore from "./data/stores/ActivitiesStore";
import ActivitiesActions from "./data/actions/ActivitiesActions";

export default Container.createFunctional(
  App,
  () => [ActivitiesStore],
  () => ({
    activity: {},
    activities: ActivitiesStore.getState(),

    onLoadActivities: ActivitiesActions.loadActivities
  })
);
