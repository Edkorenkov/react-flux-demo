class ActivitiesManager {
  load() {
    return (ok) => {
      setTimeout(() => {
        ok([
          {
            id: "1",
            date: "2020-09-18",
            userId: "1",
            records: [
              {
                id: "1",
                startedAt: "15:17",
                finishedAt: "15:19",
                name: "Reading the book"
              },
              {
                id: "2",
                startedAt: "15:19",
                finishedAt: "16:00",
                name: "Work - retrospective"
              }
            ]
          }
        ]);
      }, 1000);
    };
  }
  create() {
    return (ok) => {
      setTimeout(() => {
        ok({
          id: "1",
          record: {
            id: "3",
            startedAt: "16:00",
            finishedAt: "",
            name: "Coffee break"
          }
        });
      }, 1000);
    };
  }
}
export default new ActivitiesManager();
