/* This code is registering a new A-Frame component called "log-message". The component has a single
property called "message" with a default value of "Hello, World!". When the component is
initialized, the value of the "message" property is logged to the console. */

// Registering component in log-component.js
AFRAME.registerComponent("log-message", {
  /* The `schema` property defines the data schema for the component. In this case, it defines a single
  property called `message` with a type of `string` and a default value of `"Hello, World!"`. This
  means that when the component is used in an A-Frame entity, the `message` property can be set to a
  string value, and if it is not set, it will default to `"Hello, World!"`. */
  schema: {
    message: { type: "string", default: "Hello, World!"}
  },

  /* The `init` function is a built-in function in A-Frame that is called when the component is
  initialized. In this case, it logs the value of the `message` property defined in the component's
  schema to the console. The `this.data` object refers to the component's data properties, and
  `this.data.message` retrieves the value of the `message` property. */
  init: function () {
    console.log(this.data.message);
  }

});