import React, { useContext, useEffect } from "react";
import assets from "../assets/assets";
import { Trash2 } from "lucide-react";
import { AppContext } from "../context/AppContext";

export default function InvoiceForm() {
  const { invoiceData, setInvoiceData } = useContext(AppContext);

  // -----------------------------------
  // Generic field change handler
  // -----------------------------------
  const handleChange = (section, field, value) => {
    setInvoiceData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // -----------------------------------
  // Handle item change
  // -----------------------------------
  const handleItemChange = (index, field, value) => {
    setInvoiceData((prev) => {
      const updatedItems = [...prev.items];
      updatedItems[index][field] = value;

      const qty = parseFloat(updatedItems[index].qty) || 0;
      const amount = parseFloat(updatedItems[index].amount) || 0;

      updatedItems[index].total = qty * amount;

      return { ...prev, items: updatedItems };
    });
  };

  useEffect(() => {
    // Only generate the number if it's empty
    if (!invoiceData.invoice.number) {
      const randomNumber = `INV-${Math.floor(100000 + Math.random() * 900000)}`;

      setInvoiceData((prev) => ({
        ...prev,
        invoice: {
          ...prev.invoice,
          number: randomNumber,
        },
      }));
    }
  }, []); // runs once on mount
  //console.log(invoiceData);

  // -----------------------------------
  // Same as billing toggle
  // -----------------------------------
  const sameAsBilling = (e) => {
    const checked = e.target.checked;

    setInvoiceData((prev) => ({
      ...prev,
      shipping: checked
        ? { ...prev.billing } // copy billing to shipping
        : { name: "", number: "", address: "" }, // clear when unchecked
    }));
  };

  // -----------------------------------
  // Add new item
  // -----------------------------------
  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { name: "", qty: "", amount: "", description: "", total: 0 },
      ],
    }));
  };

  // -----------------------------------
  // Remove an item
  // -----------------------------------
  const removeItem = (index) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleUploadLogo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setInvoiceData((prev) => ({
        ...prev,
        logo: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // -----------------------------------
  // Totals Calculations
  // -----------------------------------
  const subtotal = invoiceData.items.reduce(
    (sum, item) => sum + (parseFloat(item.total) || 0),
    0
  );

  const taxAmount = subtotal * (parseFloat(invoiceData.tax) / 100 || 0);
  const grandTotal = subtotal + taxAmount;

  return (
    <>
      <div className="invoiceform container py-4">
        {/* Company Logo */}
        <div className="mb-4">
          <h5>Company Logo</h5>
          <div className="d-flex align-item-center gap-3 px-3">
            <label htmlFor="image" className="form-label">
              <img
                src={invoiceData.logo ? invoiceData.logo : assets.logo}
                alt="upload"
                width={65}
              />
            </label>
            <input
              type="file"
              id="image"
              hidden
              accept="image/*"
              onChange={(e) => handleUploadLogo(e)}
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="mb-4">
          <h5>Your Company</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Company name"
                value={invoiceData.company.name}
                onChange={(e) =>
                  handleChange("company", "name", e.target.value)
                }
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Company phone"
                value={invoiceData.company.phone}
                onChange={(e) =>
                  handleChange("company", "phone", e.target.value)
                }
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Company address"
                value={invoiceData.company.address}
                onChange={(e) =>
                  handleChange("company", "address", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="mb-4">
          <h5>Bill To</h5>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={invoiceData.billing.name}
                onChange={(e) =>
                  handleChange("billing", "name", e.target.value)
                }
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={invoiceData.billing.number}
                onChange={(e) =>
                  handleChange("billing", "number", e.target.value)
                }
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={invoiceData.billing.address}
                onChange={(e) =>
                  handleChange("billing", "address", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Ship To</h5>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="sameAsBilling"
                onChange={sameAsBilling}
              />
              <label htmlFor="sameAsBilling" className="form-check-label">
                Same as Billing
              </label>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={invoiceData.shipping.name}
                onChange={(e) =>
                  handleChange("shipping", "name", e.target.value)
                }
              />
            </div>

            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={invoiceData.shipping.number}
                onChange={(e) =>
                  handleChange("shipping", "number", e.target.value)
                }
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Shipping address"
                value={invoiceData.shipping.address}
                onChange={(e) =>
                  handleChange("shipping", "address", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="mb-4">
          <h5>Invoice Information</h5>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Invoice Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Invoice Number"
                disabled
                value={invoiceData.invoice.number}
                onChange={(e) =>
                  handleChange("invoice", "number", e.target.value)
                }
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Invoice Date</label>
              <input
                type="date"
                className="form-control"
                value={invoiceData.invoice.date}
                onChange={(e) =>
                  handleChange("invoice", "date", e.target.value)
                }
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Invoice Due Date</label>
              <input
                type="date"
                className="form-control"
                value={invoiceData.invoice.dueDate}
                onChange={(e) =>
                  handleChange("invoice", "dueDate", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="mb-4">
          <h5>Item Details</h5>

          {invoiceData.items.map((item, index) => (
            <div key={index} className="card p-3 mb-3">
              <div className="row g-3 mb-2">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Item Name"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(index, "name", e.target.value)
                    }
                  />
                </div>

                <div className="col-md-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    value={item.qty}
                    onChange={(e) =>
                      handleItemChange(index, "qty", e.target.value)
                    }
                  />
                </div>

                <div className="col-md-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                    value={item.amount}
                    onChange={(e) =>
                      handleItemChange(index, "amount", e.target.value)
                    }
                  />
                </div>

                <div className="col-md-3">
                  <input
                    type="number"
                     disabled
                    className="form-control"
                    placeholder="Total"
                    value={item.total}
                    readOnly
                  />
                </div>
              </div>

              <div className="d-flex gap-2">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    handleItemChange(index, "description", e.target.value)
                  }
                ></textarea>

                {invoiceData.items.length > 1 && (
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(index)}
                    type="button"
                  >
                    <Trash2 />
                  </button>
                )}
              </div>
            </div>
          ))}

          <button className="btn btn-primary" type="button" onClick={addItem}>
            Add Item
          </button>
        </div>

        {/* Bank Details */}
        <div className="mb-4">
          <h5>Bank Account Details</h5>

          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Account Holder Name"
                value={invoiceData.account.name}
                onChange={(e) =>
                  handleChange("account", "name", e.target.value)
                }
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Account Number"
                value={invoiceData.account.number}
                onChange={(e) =>
                  handleChange("account", "number", e.target.value)
                }
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Branch Code"
                value={invoiceData.account.ifsc}
                onChange={(e) =>
                  handleChange("account", "ifsc", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Totals */}
        <div className="mb-4">
          <h5>Total</h5>

          <div className="d-flex justify-content-end">
            <div className="w-100 w-md-50">
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between align-items-center my-1">
                <label className="form-label mb-0">Tax Rate (%)</label>

                <input
                  type="number"
                  className="form-control text-end"
                  style={{ width: "120px" }}
                  value={invoiceData.tax}
                  onChange={(e) =>
                    setInvoiceData((prev) => ({
                      ...prev,
                      tax: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="d-flex justify-content-between">
                <span>Tax Amount</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between fw-bold mt-2">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-4">
          <h5>Notes:</h5>
          <textarea
            className="form-control"
            rows={3}
            value={invoiceData.notes || ""}
            onChange={(e) => handleChange("notes", "", e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}
