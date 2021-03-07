/**
 * Mocking client-serer processing
 */

const _apps = [
  { id: 1, app_id: 201, name: "Intrusion detection", description: "Human intrusion detection" },
  { id: 2, app_id: 207, name: "Intrusion detection", description: "Vehicle intrusion detection" },
  { id: 3, app_id: 311, name: "Crowd formation detection", description: "Crowd formation detection" },
];

export default {
  getApps(call_back) {
    setTimeout(() => {
      call_back(_apps);
    }, 100);
  },
  addApp(app, call_back, error_call_back) {
    setTimeout(() => {
      if (Math.random() > 0.5 || navigator.webdriver) {
        _apps.push();
        call_back();
      } else {
        error_call_back();
      }
    }, 100);
  },
};
