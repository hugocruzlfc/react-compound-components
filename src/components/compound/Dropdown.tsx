import { createContext, ReactNode, useContext, useState } from "react";

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export default function DropdownProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="w-[450px] flex flex-col">{children}</div>
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useDropdown();
  return (
    <button onClick={() => setOpen(!open)}>
      {children}
      {open ? "🔼" : "🔽"}
    </button>
  );
};

const Menu = ({ children }: { children: ReactNode }) => {
  const { open } = useDropdown();

  return (
    <div>
      {open ? (
        <ul className="border-t-2 border-r-2  border-l-2  rounded-md px-2 pt-2">
          {children}
        </ul>
      ) : null}
    </div>
  );
};

const Item = ({ children }: { children: ReactNode }) => {
  return <li>{children}</li>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  const { open } = useDropdown();
  return (
    <>{open && <div className="px-2 border-2 rounded-md">{children}</div>}</>
  );
};

DropdownProvider.Button = Button;
DropdownProvider.Menu = Menu;
DropdownProvider.Item = Item;
DropdownProvider.Footer = Footer;
