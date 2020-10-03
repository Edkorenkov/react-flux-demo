import { Container } from "flux/utils";
import App from "./views/App";
import AppStore from "./data/stores/AppStore";
import ActivityStore from "./data/stores/ActivityStore";
import ActivitiesStore from "./data/stores/ActivitiesStore";
import ActivitiesActions from "./data/actions/ActivitiesActions";

export default Container.createFunctional(
  App,
  () => [AppStore, ActivityStore, ActivitiesStore],
  () => ({
    app: AppStore.getState(),
    activity: ActivityStore.getState(),
    activities: ActivitiesStore.getState(),

    onCreateActivity: ActivitiesActions.createActivity,
    onEditActivity: ActivitiesActions.editActivity,
    onDraftActivity: ActivitiesActions.draftActivity,
    onCancelActivity: ActivitiesActions.cancelActivity,
    onLoadActivities: ActivitiesActions.loadActivities
  })
);
