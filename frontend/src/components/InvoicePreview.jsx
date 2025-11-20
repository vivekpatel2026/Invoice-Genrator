import React, { forwardRef } from "react";
import { formatInvoiceData } from "../utility/helper";
import Tempplate1 from "../templates/template1/template1";
import Tempplate2 from "../templates/template2/template2";
import Tempplate3 from "../templates/template3/template3";

const InvoicePreview = forwardRef(({data, selectedTemplate }, ref) => {
    const formatedData = formatInvoiceData (data); // Placeholder for actual formatting logic based on selectedTemplate
    //console.log(formatedData.title);
    // console.log(selectedTemplate);
    return (
    <div ref={ref} className="invoive-preview px-2 py-2 overflow-x-auto">
     <Tempplate2 data={formatedData} />
    </div>
  );
});

export default InvoicePreview;
