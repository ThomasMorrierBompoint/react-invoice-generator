import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  name: '',
  description: '',
  quantity: '1',
  rate: '100',
}

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'INVOICE',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'Canada',
  billTo: 'BILL TO',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'Canada',
  invoiceTitleLabel: 'Invoice #',
  invoiceTitle: '1',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'ITEMS & DESCRIPTION',
  productLineQuantity: 'QTY/HRS',
  productLineQuantityRate: 'RATE',
  productLineQuantityAmount: 'AMOUNT($)',
  productLines: [
    { ...initialProductLine },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  // taxLabel: 'Sale Tax (0%)',
  taxLabel: '',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'NOTES TO CUSTOMER',
  notes: [
    '',
    '',
    '',
  ].join('\n'),
  // termLabel: 'Terms & Conditions',
  // term: 'Please make the payment by the due date.',
  termLabel: '',
  term: '',
}
