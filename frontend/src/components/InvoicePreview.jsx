import React, { forwardRef } from "react";
import { formatInvoiceData } from "../utility/helper";
import Template1 from "../templates/template1/template1";
import Template2 from "../templates/template2/template2";
import Template3 from "../templates/template3/template3";

const InvoicePreview = forwardRef(({data, selectedTemplate }, ref) => {
    const formatedData = formatInvoiceData (data); // Placeholder for actual formatting logic based on selectedTemplate
    return (
    <div  ref={ref} className="invoive-preview px-2 py-2 overflow-x-auto">
      {selectedTemplate==="template1"&&<Template1 data ={formatedData}/> }
      {selectedTemplate==="template2"&&<Template2 data ={formatedData}/> }
      {selectedTemplate==="template3"&&<Template3 data ={formatedData}/> }
  
    </div>
  );
});

export default InvoicePreview;
