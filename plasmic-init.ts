import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ContentstackCredentials, ContentStackEntry, ContextStackField } from "./pages/test";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "hjo65kJh5RLAiUs89LahwD",
      token: "Ju5YE4EXyHUKsX2rjopziy2DrDIUGHAUFw57RoHfUPAh5Wkzguy4Hb5S8dY7YOC3FAWymjd7EMI9bYYhKw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

PLASMIC.registerComponent(
  ContentstackCredentials, {
    name: "ContentStackCredentials",
    props: {
      key2: "string",
      token: "string",
      children: "slot",
    },
    importPath: ""
  }
)

PLASMIC.registerComponent(
  ContentStackEntry, {
    name: "ContentStackEntry",
    props: {
      entry_uid: "string",
      content_type: "string",
      environment: "string",
      children: "slot",
    },
    importPath: ""
  }
)


PLASMIC.registerComponent(
  ContextStackField, {
    name: "ContentStackField",
    props: {
      field: "string"
    },
    importPath: ""
  }
)