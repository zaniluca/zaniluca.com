// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import curriculum from "./locales/en/curriculum.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "curriculum";
    resources: {
      curriculum: typeof curriculum;
    };
  }
}
