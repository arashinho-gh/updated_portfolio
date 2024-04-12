import React from "react";

const Contacts = () => {
  const { baseClassName } = Contacts.constants;
  return <div className={baseClassName}></div>;
};

Contacts.constants = {
  baseClassName: "contacts",
};

export default Contacts;
