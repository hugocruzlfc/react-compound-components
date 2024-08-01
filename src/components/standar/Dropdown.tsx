import React, { useState } from "react";

export interface DropdownProps {
  items: string[];
  text: string;
  footerHeading: string;
  footerDescription: string;
  showIcons: boolean;
  hasFooter: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  text,
  footerHeading,
  footerDescription,
  showIcons,
  hasFooter,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[450px]  flex flex-col">
      <button
        className="bg-blue-500 text-white px-3 py-2 rounded-md mb-2"
        onClick={() => setOpen(!open)}
      >
        {text}
      </button>
      {open && (
        <div className="border border-gray-500 rounded-md p-5">
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 items-center"
              >
                {showIcons && (
                  <div className="w-4 h-4 bg-red-500 rounded-full" />
                )}
                {item}
              </li>
            ))}
          </ul>
          {hasFooter && (
            <div className="flex justify-center flex-col items-center">
              <h1>{footerHeading}</h1>
              <p>{footerDescription}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
