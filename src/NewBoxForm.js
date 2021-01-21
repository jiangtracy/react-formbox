import { useState } from "react";

/** 
 * NewBoxForm renders a controlled form to create new Box to add to BoxList.
 * 
 * props: addBox
 * 
 * state: 
 *  form data for width, height, and color of the Box
 *  on submission, { width, height, color } to function received from parent
 * 
 * BoxList -> NewBoxForm
 **/ 

function NewBoxForm({addBox}) {
  const initialState = { width: "", height: "", color: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send { width, height, color } to parent
   *  & clears form 
   **/  
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state of form inputs with current input elements */  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( formData => (
      {
        ...formData,
        [name]: value
      }
    ));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width: </label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="color">color: </label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add a new Box!</button>
    </form>
  );
}

export default NewBoxForm;
