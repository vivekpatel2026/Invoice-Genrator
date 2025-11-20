import React, { useContext, useRef } from "react";
import { templates } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import InvoicePreview from "../components/invoicePreview";

export default function PreviewPage() {
  const previewRef = useRef();
  const { invoiceData,selectTemplate, setSelectTemplate } = useContext(AppContext);
 // console.log(invoiceData);

  return (
    <div className=" previewpage container-fluid d-flex flex-column p-3 min-vh-100">
      <div className="d-flex flex-column align-items-center mb-4 gap-3">
        {/* Template list buttons */}
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          {templates.map((template) => (
            <button
              key={template.id}
              className={`btn btn-sm rounded-pill p-2 ${
                template.id === selectTemplate
                  ? "btn-warning"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setSelectTemplate(template.id)}
            >
              {template.label}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-primary d-flex align-items-center justify-content-center">
            Save and Exit
          </button>

          <button className="btn btn-danger">Delete Invoice</button>

          <button className="btn btn-secondary">Back to Dashboard</button>

          <button className="btn btn-info">Send Email</button>

          <button className="btn btn-success d-flex align-items-center justify-content-center">
            Download PDF
          </button>
        </div>
      </div>
      {/* Display the invoice preview */}
      <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">
        <div ref={previewRef} className="invoice-preview">
         <InvoicePreview data={invoiceData} selectedTemplate={selectTemplate}/>
        </div>
      </div>
    </div>
  );
}
