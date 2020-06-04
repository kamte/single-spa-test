import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@joor/navbar",
//   app: () => System.import("@joor/navbar"),
//   activeWhen: ["/"]
// });

registerApplication(
  "@joor/test-single-spa",
  () => System.import("@joor/test-single-spa"),
  (location) => location.pathname.startsWith("/")
);

start({
  urlRerouteOnly: true,
});
