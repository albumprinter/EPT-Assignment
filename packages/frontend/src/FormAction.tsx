import React from 'react';

// can be re-implemented as a selector with all options
export const FormAction = (props: {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  disabled: boolean;
  id: string;
  text: string;
}) => {
  const {disabled, onSubmit, id, text} = props;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={id}>
        <input disabled={disabled} type="submit" name={id} value={text} />
      </label>
    </form>
  );
};
