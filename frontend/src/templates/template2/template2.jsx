import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./template2.css";

export default function Template2({ data }) {
  const {
    title,
    companyName,
    companyAddress,
    companyPhone,
    companyLogo,
    invoiceNumber,
    invoiceDate,
    paymentDate,
    accountName,
    accountNumber,
    accountIfscCode,
    billingName,
    billingAddress,
    billingPhone,
    shippingName,
    shippingAddress,
    shippingPhone,
    currencySymbol,
    tax,
    items,
    notes,
    subtotal,
    taxAmount,
    total,
  } = data;

  const money = (v) => `${currencySymbol}${parseFloat(v).toFixed(2)}`;

  return (
    <div className="premium-invoice mx-auto p-4">
      {/* HEADER */}
      <header className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div>
          <h1 className="fw-bold premium-title mb-1">{title}</h1>
          <p className="fw-semibold mb-0">{companyName}</p>
          <p className="text-muted small mb-0">{companyAddress}</p>
          <p className="text-muted small mb-0">Phone: {companyPhone}</p>
        </div>

        {companyLogo && (
          <img src={companyLogo} alt="Company Logo" className="premium-logo" />
        )}
      </header>

      {/* INFO GRID */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="premium-box">
            <h6 className="premium-heading">Invoice</h6>
            <p className="small mb-1">
              <strong>No:</strong> {invoiceNumber}
            </p>
            <p className="small mb-1">
              <strong>Date:</strong> {invoiceDate}
            </p>
            <p className="small mb-1">
              <strong>Due:</strong> {paymentDate}
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="premium-box">
            <h6 className="premium-heading">Bank</h6>
            <p className="small mb-1">
              <strong>Name:</strong> {accountName}
            </p>
            <p className="small mb-1">
              <strong>Acc No:</strong> {accountNumber}
            </p>
            <p className="small mb-1">
              <strong>IFSC / BIC:</strong> {accountIfscCode}
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="premium-box">
            <h6 className="premium-heading">Bill To</h6>
            <p className="fw-semibold small mb-1">{billingName}</p>
            <p className="small mb-1">{billingAddress}</p>
            <p className="small mb-1">Phone: {billingPhone}</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="premium-box">
            <h6 className="premium-heading">Ship To</h6>
            <p className="fw-semibold small mb-1">{shippingName}</p>
            <p className="small mb-1">{shippingAddress}</p>
            <p className="small mb-1">Phone: {shippingPhone}</p>
          </div>
        </div>
      </div>

      {/* ITEMS TABLE */}
      <table className="table table-sm premium-table mb-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th className="text-end">Qty</th>
            <th className="text-end">Unit Price</th>
            <th className="text-end">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.description}</td>
              <td className="text-end">{item.quantity}</td>
              <td className="text-end">{money(item.unitPrice)}</td>
              <td className="text-end">
                {money(item.unitPrice * item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* NOTES + SUMMARY */}
      <div className="row">
        <div className="col-md-7">
          <h6 className="premium-heading mb-1">Notes</h6>
          <div className="premium-notes p-3">{notes}</div>
        </div>

        <div className="col-md-5">
          <table className="table premium-summary">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td className="text-end">{money(subtotal)}</td>
              </tr>
              <tr>
                <td>Tax ({tax}%)</td>
                <td className="text-end">{money(taxAmount)}</td>
              </tr>
              <tr className="premium-total">
                <td>Total Due</td>
                <td className="text-end">{money(total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center premium-footer mt-5">
        <p className="text-muted small">
          Thank you for choosing our premium service.
        </p>
        <div className="premium-sign-line"></div>
        <p className="small mt-1">Authorized Signature</p>
      </footer>
    </div>
  );
}
