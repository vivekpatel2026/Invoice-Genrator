import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const dummyData = {
    title: "PREMIUM INVOICE",
    companyName: "Global Software Solutions Ltd.",
    companyAddress: "404 Innovation Drive, Tech City, London SW1A 0AA",
    companyPhone: "+44 20 7946 0100",
    companyLogo: "https://via.placeholder.com/150x50?text=GSS+LOGO",
    invoiceNumber: "PRM-2025-583",
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
    tax: 20,
    items: [
        { description: "Consulting Services (Oct 2025)", quantity: 40, unitPrice: 85 },
        { description: "API Integration & Setup Fee", quantity: 1, unitPrice: 1200 },
        { description: "Premium Support Subscription (1 Year)", quantity: 1, unitPrice: 500 },
    ],
    notes: "Payment is due within 15 days. Thank you for choosing our premium services.",
    subtotal: 5100,
    taxAmount: 1020,
    total: 6120,
};

export default function Template2({ data}) {
   
    const {
        title, companyName, companyAddress, companyPhone, companyLogo,
        invoiceNumber, invoiceDate, paymentDate,
        accountName, accountNumber, accountIfscCode,
        billingName, billingAddress, billingPhone,
        shippingName, shippingAddress, shippingPhone,
        currencySymbol, tax, items, notes, subtotal, taxAmount, total
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
                    <img 
                        src={companyLogo}
                        alt="Company Logo"
                        className="premium-logo"
                    />
                )}
            </header>

            {/* INFO 2x2 GRID */}
            <div className="row g-3 mb-4">

                <div className="col-md-6">
                    <div className="premium-box">
                        <h6 className="premium-heading">Invoice</h6>
                        <p className="small mb-1"><strong>No:</strong> {invoiceNumber}</p>
                        <p className="small mb-1"><strong>Date:</strong> {invoiceDate}</p>
                        <p className="small mb-1"><strong>Due:</strong> {paymentDate}</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="premium-box">
                        <h6 className="premium-heading">Bank</h6>
                        <p className="small mb-1"><strong>Name:</strong> {accountName}</p>
                        <p className="small mb-1"><strong>Acc No:</strong> {accountNumber}</p>
                        <p className="small mb-1"><strong>IFSC/BIC:</strong> {accountIfscCode}</p>
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
                            <td className="text-end">{money(item.unitPrice * item.quantity)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* NOTES + TOTAL */}
            <div className="row">
                <div className="col-md-7">
                    <h6 className="premium-heading mb-1">Notes</h6>
                    <div className="premium-notes p-3">
                        {notes}
                    </div>
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
                <p className="text-muted small">Thank you for choosing our premium service.</p>
                <div className="premium-sign-line"></div>
                <p className="small mt-1">Authorized Signature</p>
            </footer>

            {/* CUSTOM CSS */}
            <style>{`
                .premium-invoice {
                    max-width: 860px;
                    background: #fff;
                    border-radius: 14px;
                    box-shadow: 0 0 25px rgba(0,0,0,0.06);
                }
                .premium-title {
                    font-size: 2rem;
                    color: #111;
                    letter-spacing: 0.5px;
                }
                .premium-logo {
                    max-height: 60px;
                }
                .premium-box {
                    background: #fafafa;
                    border-radius: 12px;
                    padding: 12px 14px;
                    border: 1px solid #eee;
                }
                .premium-heading {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #b7950b;
                    text-transform: uppercase;
                    margin-bottom: 6px;
                }
                .premium-table thead {
                    background: #f8f8f8;
                    font-size: 0.85rem;
                }
                .premium-table td, .premium-table th {
                    padding: 8px;
                    font-size: 0.85rem;
                }
                .premium-notes {
                    background: #fffaf2;
                    border-left: 3px solid #b7950b;
                    font-size: 0.85rem;
                }
                .premium-summary td {
                    font-size: 0.9rem;
                    padding: 6px 0;
                }
                .premium-total {
                    background: #b7950b !important;
                    color: #fff !important;
                    font-weight: bold;
                }
                .premium-sign-line {
                    width: 200px;
                    height: 1px;
                    background: #aaa;
                    margin: 30px auto 10px;
                }
            `}</style>
        </div>
    );
}
