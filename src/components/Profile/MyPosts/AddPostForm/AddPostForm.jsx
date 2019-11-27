import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field
            placeholder="Post message"
            name="newPostText"
            component={Textarea}
            validate={[required, maxLength10]}
            cols="30" rows="1" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};


export default reduxForm({form: "profileAddNewPostForm"})(AddPostForm);