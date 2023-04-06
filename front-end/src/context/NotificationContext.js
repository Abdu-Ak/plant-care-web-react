import { createContext, useState } from "react";

export const NotificationContext = createContext({});

function ShowNotification({ children }) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <NotificationContext.Provider
      value={{ open, setOpen, showDrawer, onClose }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
export default ShowNotification;
