

import toast from "react-hot-toast";

export function validateInvoiceData(invoiceData) {
    
      if(invoiceData.logo===""){
      toast.error("please upload your company logo");
      return ;
    }
     if(invoiceData.billing.name===""||invoiceData.billing.address===""||invoiceData.billing.phone===""){
      toast.error("please fill all the company details");
      return;
    }
    

    if(invoiceData.shipping.name===""||invoiceData.shipping.address===""||invoiceData.shipping.phone===""){
      toast.error("please fill all the shipping  details");
      return;
    }
     if(invoiceData.invoice.number===""||invoiceData.invoice.date===""||invoiceData.invoice.duedate===""){
      toast.error("please fill all the invoice details");
      return;
    }
    if(invoiceData.account.name===""||invoiceData.account.number===""||invoiceData.account.ifsc===""){
      toast.error("please fill all the account details");
      return;
    }
     if(invoiceData.company.name===""||invoiceData.company.address===""||invoiceData.company.phone===""){
      toast.error("please fill all the company details");
      return;
    }
    const validateion=invoiceData.items.some((item)=>{
      return item.name!=="" || item.qty!==0 || item.ammount==0;
    })
    if(validateion){
     toast.error("Please enter name ,quantity and amount for all the items ");
      return;
    }
}


export const formatInvoiceData = (invoiceData = {}) => {
  const {
    title = "",
    company = {},
    invoice = {},
    account = {},
    billing = {},
    shipping = {},
    tax = 0,
    notes = "",
    items = [],
    logo = ""
  } = invoiceData || {};

  // Currency symbol (you can change this)
  const currencySymbol = "₹";

  // Calculate subtotal of all line items
  const subtotal = items.reduce(
    (acc, item) => acc + (item.qty * item.amount),
    0
  );

  // tax percentage applied over subtotal
  const taxAmount = subtotal * (tax / 100);

  // Final total
  const total = subtotal + taxAmount;

  // Return normalized invoice object
  return {
    // MAIN TITLE
      title,

      // COMPANY DETAILS
      companyName: company.name,
      companyAddress: company.address,
      companyPhone: company.phone,
      companyLogo: logo,

      // INVOICE DETAILS
      invoiceNumber: invoice.number,
      invoiceDate: invoice.date,
      paymentDate: invoice.dueDate,

      // ACCOUNT DETAILS
      accountName: account.name,
      accountNumber: account.number,
      accountIfscCode: account.ifscCode,

      // BILLING DETAILS
      billingName: billing.name,
      billingAddress: billing.address,
      billingPhone: billing.phone,

      // SHIPPING DETAILS
      shippingName: shipping.name,
      shippingAddress: shipping.address,
      shippingPhone: shipping.phone,

      // FINANCIALS
      currencySymbol,
      tax,
      items,
      notes,
      subtotal,
      taxAmount,
      total,
    };
};
