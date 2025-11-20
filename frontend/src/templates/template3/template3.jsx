import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dummyInvoiceData = {
    title: "INVOICE",
    companyName: "Global Software Solutions Ltd.",
    companyAddress: "404 Innovation Drive, Tech City, London SW1A 0AA",
    companyPhone: "+44 20 7946 0100",
    companyLogo: "https://via.placeholder.com/150x50?text=GSS+LOGO",
    invoiceNumber: "INV-2025-583",
    invoiceDate: "2025-11-20",
    paymentDate: "2025-12-05",
    accountName: "GSS Business Current Account",
    accountNumber: "9876543210",
    accountIfscCode: "BARCGB02XXX",
    billingName: "Synergy Marketing Agency",
    billingAddress: "10 Downing Street, Digital Plaza, New York, NY 10001",
    billingPhone: "+1 212 555 0100",
    shippingName: "Synergy Marketing Agency",
    shippingAddress: "10 Downing Street, Digital Plaza, New York, NY 10001",
    shippingPhone: "+1 212 555 0100",
    currencySymbol: "£",
    tax: 20.0,
    items: [
        { description: "Consulting Services (Oct 2025)", quantity: 40, unitPrice: 85.00 },
        { description: "API Integration & Setup Fee", quantity: 1, unitPrice: 1200.0 },
        { description: "Premium Support Subscription (1 Year)", quantity: 1, unitPrice: 500.0 },
    ],
    notes: "Payment terms are 15 days. Thank you!",
    subtotal: 5100.0,
    taxAmount: 1020.0,
    total: 6120.0,
};

// =========================================================
// TEMPLATE 2 – MODERN DARK HEADER INVOICE
// =========================================================

export default function Template2({ data = dummyInvoiceData }) {
    const {
        title,
        companyName, companyAddress, companyPhone, companyLogo,
        invoiceNumber, invoiceDate, paymentDate,
        accountName, accountNumber, accountIfscCode,
        billingName, billingAddress, billingPhone,
        shippingName, shippingAddress, shippingPhone,
        currencySymbol, tax, items, notes, subtotal, taxAmount, total
    } = data;

    const formatCurrency = (amount) => `${currencySymbol}${parseFloat(amount).toFixed(2)}`;

    return (
        <div className="invoice-wrapper p-4 bg-light">
            {/* ======= HEADER ======= */}
            <div className="bg-dark text-white p-4 rounded-top d-flex justify-content-between align-items-center shadow">
                <div>
                    <h1 className="fw-bold mb-1">{title}</h1>
                    <p className="mb-0">{companyName}</p>
                    <p className="mb-0 small">{companyAddress}</p>
                    <p className="mb-0 small">Phone: {companyPhone}</p>
                </div>

                {companyLogo && (
                    <img 
                        src={companyLogo} 
                        alt="Company Logo" 
                        className="img-fluid"
                        style={{ maxHeight: "70px" }}
                    />
                )}
            </div>

            {/* ======= BODY ======= */}
            <div className="bg-white p-4 shadow rounded-bottom">

                {/* Invoice Info */}
                <div className="row my-3">
                    <div className="col-md-6">
                        <h5 className="border-start border-3 border-primary ps-2">Invoice Details</h5>
                        <p><strong>Invoice No:</strong> {invoiceNumber}</p>
                        <p><strong>Date:</strong> {invoiceDate}</p>
                        <p><strong>Due Date:</strong> {paymentDate}</p>
                    </div>

                    <div className="col-md-6">
                        <h5 className="border-start border-3 border-success ps-2">Bank Details</h5>
                        <p><strong>Account Name:</strong> {accountName}</p>
                        <p><strong>Account No:</strong> {accountNumber}</p>
                        <p><strong>BIC/IFSC Code:</strong> {accountIfscCode}</p>
                    </div>
                </div>

                <hr />

                {/* Billing + Shipping */}
                <div className="row my-3">
                    <div className="col-md-6">
                        <h5 className="border-start border-3 border-info ps-2">Bill To</h5>
                        <p className="fw-bold">{billingName}</p>
                        <p>{billingAddress}</p>
                        <p>Phone: {billingPhone}</p>
                    </div>

                    <div className="col-md-6">
                        <h5 className="border-start border-3 border-warning ps-2">Ship To</h5>
                        <p className="fw-bold">{shippingName}</p>
                        <p>{shippingAddress}</p>
                        <p>Phone: {shippingPhone}</p>
                    </div>
                </div>

                {/* Items Table */}
                <h5 className="mt-4 border-bottom pb-2">Items</h5>
                <table className="table table-hover align-middle">
                    <thead className="table-dark">
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
                                <td className="text-end">{formatCurrency(item.unitPrice)}</td>
                                <td className="text-end">{formatCurrency(item.unitPrice * item.quantity)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Totals */}
                <div className="row mt-4">
                    <div className="col-md-7">
                        <h5 className="border-start border-3 border-secondary ps-2">Notes</h5>
                        <div className="bg-light p-3 rounded border">
                            {notes}
                        </div>
                    </div>

                    <div className="col-md-5">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><strong>Subtotal:</strong></td>
                                    <td className="text-end">{formatCurrency(subtotal)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tax ({tax}%):</strong></td>
                                    <td className="text-end">{formatCurrency(taxAmount)}</td>
                                </tr>
                                <tr className="bg-success text-white fw-bold fs-5">
                                    <td>Total:</td>
                                    <td className="text-end">{formatCurrency(total)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-4 text-muted">
                    <p>Thank you for your business.</p>
                    <div style={{ borderBottom: "2px solid #999", width: "200px", margin: "40px auto 10px" }}></div>
                    <p className="small">Authorized Signature</p>
                </div>
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                .invoice-wrapper {
                    max-width: 850px;
                    margin: auto;
                    border-radius: 12px;
                }
            `}</style>
        </div>
    );
}
