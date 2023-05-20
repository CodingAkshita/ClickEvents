/* This code is registering a new A-Frame component called "car-model". The component has a schema with
one property called "modelRef" which is a string with a default value of "../assets/car/scene.gltf". */
AFRAME.registerComponent("car-model", {
  /* The `schema` property is defining the component's data schema, which is a way to define and
validate the properties that can be passed to the component. In this case, the schema has one
property called `modelRef` which is of type `string` and has a default value of
`"../assets/car/scene.gltf"`. This means that when the component is used, the `modelRef` property
can be set to a different string value, but if it is not set, it will default to
`"../assets/car/scene.gltf"`. */
  schema: {
    modelRef: { type: "string", default: "./car-scene.gltf" },
    clickCounter : {type : "number", default: "0"}
  },

  /* The `init` function is a built-in function in A-Frame that is called when the component is first
attached to an entity. In this case, the `init` function is setting the `gltf-model` attribute of
the entity to the value of `modelRef` property in the component's schema. It is also setting the
`position` and `rotation` attributes of the entity to specific values. */
  init: function () {
    
    const newPosition = {x : 30, y : 30, z : 23}; 
    const newRotation = {x : 0, y : 85, z : 0};
    this.el.setAttribute("position", newPosition);
    this.el.setAttribute("rotation", newRotation);
    this.el.setAttribute("gltf-model", this.data.modelRef);
  },

  update: function () {
    window.addEventListener("click", e =>{
      this.data.clickCounter = this.data.clickCounter + 1
      if(this.data.clickCounter === 1){
        const newRotation = {x : 0, y : 20, z : 0};
        this.el.setAttribute("rotation", newRotation);
      } else if(this.data.clickCounter === 2){
        const newRotation = {x : 0, y : 100, z : 0}
        this.el.setAttribute("rotation", newRotation);
      } else if(this.data.clickCounter === 3){
        const newRotation = {x : 0, y : 170, z : 0}
        this.el.setAttribute("rotation", newRotation);
      } else if (this.data.clickCounter === 4){
        const newRotation = {x : 0, y : 240, z : 0}
        this.el.setAttribute("rotation", newRotation);
      }  else if (this.data.clickCounter === 4){
        const newRotation = {x : 0, y : 310, z : 0}
        this.el.setAttribute("rotation", newRotation);
      }  else if (this.data.clickCounter === 4){
        const newRotation = {x : 0, y : 360, z : 0}
        this.el.setAttribute("rotation", newRotation);
      }
    })   
  }
})
