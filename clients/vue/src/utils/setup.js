import Vue from "vue";
import { lowerCase, camelCase } from "lodash";

export function regsiterComponents(context, append = "") {
  context.keys().forEach(fileName => {
    // Get component config
    const componentConfig = context(fileName);

    // Get PascalCase name of component
    const componentName = lowerCase(
      camelCase(
        // Gets the file name regardless of folder depth
        fileName
          // Remove the "./_" from the beginning
          .replace(/^\.\/_/, "")
          // Remove the file extension from the end
          .replace(/\.\w+$/, "")
      )
    );

    // Globally register the component
    Vue.component(
      `${componentName}${append}`,
      componentConfig.default || componentConfig
    );
  });
}
