import React from "react";

/**
 *
 * @param {*} props
 * @returns
 */
export const Button = ({ prefix, type, children, className }) => {
  //   const prefix = props.prefix;
  //   const type = props.type;
  //   const children = props.children;

  return (
    <button className={className} type={type}>
      {prefix && <div>{prefix}</div>}
      {children}
    </button>
  );
};
