import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { Sentry } from "@joor/commons";

Sentry.init({
  dsn:
    "",
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    Sentry.withScope((scope) => {
      scope.setExtras({ err, info });
      const eventId = Sentry.captureException(err);

      Sentry.showReportDialog({ eventId });
    });
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
