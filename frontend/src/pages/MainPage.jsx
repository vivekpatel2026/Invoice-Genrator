import React, { useContext } from "react";
import { Pencil } from "lucide-react";
import { AppContext } from "../context/AppContext";
import InvoiceForm from "../components/InvoiceForm";
import TemplateGrid from "../components/TemplateGrid";

import { validateInvoiceData } from "../utility/helper";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const [isEditingTitle, setIsEditingTitle] = React.useState(false);
  const {
    invoiceTitle,
    setInvoiceTitle,
    invoiceData,
    setInvoiceData,
    selectTemplate,
    setSelectTemplate,
  } = useContext(AppContext);
  //console.log(invoiceData);

  const handleTemplateClick = (templateId) => {
   // validateInvoiceData(invoiceData);
    setSelectTemplate(templateId);
    navigate("/preview");
  };



  const handleTitleChange = (e) => {
    setInvoiceTitle(e.target.value);
    setInvoiceData({ ...invoiceData, title: e.target.value });
  };

  const handleTitleEdit = () => {
    setIsEditingTitle(true);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  return (
    <div className=" mainpage container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        {/* title bar */}
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-item-center">
            {isEditingTitle ? (
              <input
                type="text"
                className="form-control me-2"
                autoFocus
                value={invoiceTitle}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
              />
            ) : (
              <>
                <h5 className="mb-0 me-2">{invoiceTitle}</h5>

                <button
                  className="btn btn-sm p-0 border-0 bg-transparent"
                  onClick={handleTitleEdit}
                >
                  <Pencil className="text-primary" size={20} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* invoice form */}
        <div className="row g-4 align-item-stretch">
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              <InvoiceForm />
            </div>
          </div>

          {/* template grid */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              <TemplateGrid onTemplateClick={handleTemplateClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
