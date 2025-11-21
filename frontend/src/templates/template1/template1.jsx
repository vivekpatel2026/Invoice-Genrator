import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Template1.css';
// =========================================================
// 1. DUMMY DATA FOR TESTING
// =========================================================
// const dummyInvoiceData = {
//     title: 'PROFORMA INVOICE',

//     // COMPANY DETAILS (Your Company)
//     companyName: 'Global Software Solutions Ltd.',
//     companyAddress: '404 Innovation Drive, Tech City, London SW1A 0AA',
//     companyPhone: '+44 20 7946 0100',
//     companyLogo: 'https://via.placeholder.com/150x50?text=GSS+LOGO', 

//     // INVOICE DETAILS
//     invoiceNumber: 'PFI-UK-2025-583',
//     invoiceDate: '2025-11-20',
//     paymentDate: '2025-12-05', // 15 days net

//     // ACCOUNT DETAILS (Your Bank)
//     accountName: 'GSS Business Current Account',
//     accountNumber: '9876543210',
//     accountIfscCode: 'BARCGB02XXX', // Example SWIFT/BIC code

//     // BILLING DETAILS (Client)
//     billingName: 'Synergy Marketing Agency',
//     billingAddress: '10 Downing Street, Digital Plaza, New York, NY 10001',
//     billingPhone: '+1 212 555 0100',

//     // SHIPPING DETAILS (Client) - Same as billing for services
//     shippingName: 'Synergy Marketing Agency',
//     shippingAddress: '10 Downing Street, Digital Plaza, New York, NY 10001',
//     shippingPhone: '+1 212 555 0100',

//     // FINANCIALS
//     currencySymbol: '£',
//     tax: 20.0, // VAT rate in the UK
//     items: [
//         { description: 'Consulting Services (Oct 2025)', quantity: 40, unitPrice: 85.00 },
//         { description: 'API Integration & Setup Fee', quantity: 1, unitPrice: 1200.00 },
//         { description: 'Premium Support Subscription (1 Year)', quantity: 1, unitPrice: 500.00 },
//     ],
//     notes: 'Please note the payment terms are 15 days net. All amounts are subject to local tax laws.',
    
//     // Calculated Totals (Ensure these match the item calculations in a real app)
//     // Subtotal = (40*85) + (1*1200) + (1*500) = 3400 + 1200 + 500 = 5100.00
//     subtotal: 5100.00, 
//     // Tax Amount = 20% of 5100 = 1020.00
//     taxAmount: 1020.00,
//     // Total = 5100 + 1020 = 6120.00
//     total: 6120.00,
// };
// =========================================================

export default function Template1({ data = dummyInvoiceData }) {
    // We use a default value of dummyInvoiceData if no 'data' prop is passed

    // Destructure all the data fields for easy access
    const {
        title,
        companyName, companyAddress, companyPhone, companyLogo,
        invoiceNumber, invoiceDate, paymentDate,
        accountName, accountNumber, accountIfscCode,
        billingName, billingAddress, billingPhone,
        shippingName, shippingAddress, shippingPhone,
        currencySymbol, tax, items, notes, subtotal, taxAmount, total
    } = data;

    // Helper function for formatting currency
    const formatCurrency = (amount) => {
        return `${currencySymbol}${parseFloat(amount).toFixed(2)}`;
    };

    return (
        <div className="invoice-container p-4 mx-auto border shadow-lg bg-white" style={{ maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>

            {/* Header: Title and Company Details */}
            <header className="row mb-4 border-bottom pb-3">
                <div className="col-8">
                    <h1 className="text-primary fw-bold">{title || 'INVOICE'}</h1>
                    <p className="mb-0 fs-5"><strong>{companyName}</strong></p>
                    <p className="mb-0 text-muted">{companyAddress}</p>
                    <p className="mb-0 text-muted">Phone: {companyPhone}</p>
                </div>
                <div className="col-4 text-end">
                    {companyLogo && (
                        <img 
                            src={companyLogo} 
                            alt={`${companyName} Logo`} 
                            className="img-fluid"
                            style={{ maxHeight: '70px', width: 'auto' }}
                        />
                    )}
                </div>
            </header>
            
            <hr/>

            {/* Invoice and Account Details */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <h5 className="text-secondary border-bottom">Invoice Info</h5>
                    <p className="mb-1"><strong>Invoice No:</strong> <span className="float-end">{invoiceNumber}</span></p>
                    <p className="mb-1"><strong>Date:</strong> <span className="float-end">{invoiceDate}</span></p>
                    <p className="mb-1"><strong>Due Date:</strong> <span className="float-end">{paymentDate}</span></p>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 p-3 bg-light rounded border border-info">
                    <h5 className="text-secondary border-bottom">Bank Details</h5>
                    <p className="mb-1"><strong>Account Name:</strong> <span className="float-end">{accountName}</span></p>
                    <p className="mb-1"><strong>Account No:</strong> <span className="float-end">{accountNumber}</span></p>
                    <p className="mb-1"><strong>IFSC/BIC Code:</strong> <span className="float-end">{accountIfscCode}</span></p>
                </div>
            </div>
            
            <hr/>

            {/* Billing and Shipping Details */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <h5 className="text-secondary border-bottom">Bill To</h5>
                    <p className="mb-1"><strong>{billingName}</strong></p>
                    <p className="mb-1">{billingAddress}</p>
                    <p className="mb-1">Phone: {billingPhone}</p>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                    <h5 className="text-secondary border-bottom">Ship To</h5>
                    <p className="mb-1"><strong>{shippingName}</strong></p>
                    <p className="mb-1">{shippingAddress}</p>
                    <p className="mb-1">Phone: {shippingPhone}</p>
                </div>
            </div>

            {/* Items Table */}
            <h5 className="text-secondary border-bottom mt-4">Items Summary</h5>
            <table className="table table-bordered table-striped mb-4">
                <thead className="table-primary">
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th className="text-end">Qty</th>
                        <th className="text-end">Unit Price</th>
                        <th className="text-end">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {(items && items.length > 0) ? items.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.description}</td>
                            <td className="text-end">{item.quantity}</td>
                            <td className="text-end">{formatCurrency(item.unitPrice)}</td>
                            <td className="text-end">{formatCurrency(item.quantity * item.unitPrice)}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="5" className="text-center text-muted">No items listed.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Financial Summary and Notes */}
            <div className="row">
                <div className="col-md-7">
                    <h5 className="text-secondary border-bottom">Notes</h5>
                    <div className="p-3 bg-warning-subtle border border-warning rounded fst-italic">
                        {notes || 'No specific notes provided.'}
                    </div>
                </div>
                <div className="col-md-5">
                    <table className="table financial-summary-table mt-3 mt-md-0">
                        <tbody>
                            <tr>
                                <td><strong>Subtotal:</strong></td>
                                <td className="text-end">{formatCurrency(subtotal)}</td>
                            </tr>
                            <tr>
                                <td><strong>Tax ({tax}%):</strong></td>
                                <td className="text-end">{formatCurrency(taxAmount)}</td>
                            </tr>
                            <tr className="table-success fw-bold fs-5">
                                <td>TOTAL DUE:</td>
                                <td className="text-end">{formatCurrency(total)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer / Signature Area */}
            <footer className="mt-5 pt-3 border-top text-center text-muted">
                <p>Thank you for your business. Please remit payment by the due date.</p>
                <div className="mx-auto" style={{ width: '200px', borderBottom: '1px solid #6c757d', marginTop: '40px', marginBottom: '5px' }}></div>
                <p>Authorized Signature</p>
            </footer>

        </div>
    );
}