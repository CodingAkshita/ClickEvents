/* This code is registering a new A-Frame component called "base". The component has two properties
defined in its schema: "radius" and "height", both of which are numbers with default values of 150
and 3, respectively. The "init" function is called when the component is first attached to an
entity, and it sets the geometry of the entity to a cylinder with the specified radius and height,
and sets the material color to "#1769aa". */

AFRAME.registerComponent("base", {
  /* The `schema` property is defining the properties of the component and their default values. In
  this case, the component has two properties: `radius` and `height`, both of which are numbers. The
  `type` property specifies the data type of the property, and the `default` property specifies the
  default value if the property is not specified when the component is used. So, if the `radius`
  property is not specified, it will default to a value of 150, and if the `height` property is not
  specified, it will default to a value of 3. */
  schema:{
    radius : {type : "number", default : 150},
    height : {type : "number", default: 3}
  },
  
    /* The `init` function is a method of the A-Frame component that is called when the component is first
  attached to an entity. In this case, the `init` function sets the geometry of the entity to a
  cylinder with the specified `radius` and `height` properties from the component's schema, and sets
  the material color to "#1769aa". The `setAttribute` method is used to set the geometry of the
  entity, and the
  `this.data` property is used to access the values of the `radius` and `height`
  properties from the component's schema. The `this.el.setAttribute` method is used to set the
  material color of the entity. */

  init : function(){
    this.el.setAttribute("geometry", {
      primitive : "cylinder",
      radius : this.data.radius,
      height : this.data.height
    });
    this.el.setAttribute("material", {color : "#1769aa"})   
  }

});