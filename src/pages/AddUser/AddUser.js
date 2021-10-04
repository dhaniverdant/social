import React from 'react';

const AddUser = ({ onAdd }) => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.username.value);
    e.target.name.value = "";
    e.target.username.value = "";
    console.log("name", e.target.name.value);
  }
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <h3>Add User</h3>
        <input placeholder="Name" name="name" />
        <input placeholder="Username" name="username" />
        <button onSubmit={onHandleSubmit}>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
