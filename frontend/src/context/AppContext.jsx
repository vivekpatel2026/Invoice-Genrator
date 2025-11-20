import { createContext, useState } from "react";
import assets from "../assets/assets";

export const AppContext = createContext({});

const initialInvoiceData = {
  title: "new Invoice",
  billing: { name: "", phone: "", address: "" },
  shipping: { name: "", phone: "", address: "" },
  invoice: { number: "", date: "", dueDate: "" },
  account: { name: "", number: "", ifsc: "" },
  company: { name: "", phone: "", address: "" },
  tax: 0,
  notes: "",
  items: [
    { name: "", qty: "", ammount: "", description: "", total: 0 },
  ],
  logo: "",
};
export const AppContextProvider = ({ children }) => {
  const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");
  const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
  const [selectTemplate, setSelectTemplate] = useState("template1");

  const contextValue = {
    invoiceTitle,
    setInvoiceTitle,
    invoiceData,
    setInvoiceData,
    selectTemplate,
    setSelectTemplate,
    initialInvoiceData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
