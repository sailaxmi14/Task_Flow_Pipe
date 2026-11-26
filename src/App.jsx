import { useState } from 'react';
import './App.css'
function App() {
  const details = [
    {
      schemeName: "SchemeOne",
      schemeType: "Regular",
      amount: 200,
      servcies: [
        {
          servcieName: "Rental",
          subService: "HouseRent",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Maintanence",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.3"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "HouseRent",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "6",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Maintanence",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "0.2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "TokenFee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "3"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
          ]
        },
        {
          servcieName: "Educational",
          subService: "TuitionFee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "6"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.4"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Educational",
          subService: "College Fee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "12",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.6"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "7",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "BBPS",
          subService: "Electricity",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "6",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "0.2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "6",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Mobile Recharge",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
          ]
        }
      ]
    },
    {
      schemeName: "SchemeTwo",
      schemeType: "Regular",
      amount: 200,
      servcies: [
        {
          servcieName: "Rental",
          subService: "HouseRent",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.5"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.6"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Maintanence",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.9"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "HouseRent",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "4"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Maintanence",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.4"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "TokenFee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.3"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "3"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Educational",
          subService: "TuitionFee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.5"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "6",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Educational",
          subService: "College Fee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.2"
            },
          ]
        },
        {
          servcieName: "BBPS",
          subService: "Electricity",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1.2",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "3"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "4"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1"
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Mobile Recharge",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.0"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.1"
            },
          ]
        }
      ]
    },
    {
      schemeName: "SchemeThree",
      schemeType: "Regular",
      amount: 200,
      servcies: [
        {
          servcieName: "Rental",
          subService: "HouseRent",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "0.2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Maintanence",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.5"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "3"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.5"
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "HouseRent",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Maintanence",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2,5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "TokenFee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "2",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.1"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.2"
            },
          ]
        },
        {
          servcieName: "Educational",
          subService: "TuitionFee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.1"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "3"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "1.0"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "5",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Educational",
          subService: "College Fee",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.5"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
          ]
        },
        {
          servcieName: "BBPS",
          subService: "Electricity",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "1"
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "3",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "4",
              processingPercentage: ""
            },
          ]
        },
        {
          servcieName: "Rental",
          subService: "Mobile Recharge",
          status: "Active",
          Charges: [
            {
              paymentMode: "CreditCard",
              paymentMethod: "NormalCreditCard",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "CreditCard",
              paymentMethod: "CorporateCreditCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
            {
              paymentMode: "DebitCrad",
              paymentMethod: "NormalDebitCard",
              status: "Active",
              processingFee: "",
              processingPercentage: "2.0"
            },
            {
              paymentMode: "UPI",
              paymentMethod: "Google Pay",
              status: "Active",
              processingFee: "1",
              processingPercentage: ""
            },
            {
              paymentMode: "UPI",
              paymentMethod: "PhonePay",
              status: "Active",
              processingFee: "",
              processingPercentage: "2"
            },
          ]
        }
      ]
    },

  ]
  const [amount, setAmount] = useState("");
  const [schemeName, setSchemeName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [subServiceName, setSubServiceName] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const unique = (values) => [...new Set(values)];

  const selectedScheme = details.find((item) => item.schemeName == schemeName);
  const availableServices = selectedScheme
    ? unique(
        selectedScheme.servcies
          .filter((item) => item.status == "Active")
          .map((item) => item.servcieName)
      )
    : [];

  const availableSubServices = selectedScheme
    ? unique(
        selectedScheme.servcies
          .filter(
            (item) =>
              item.status == "Active" &&
              item.servcieName == serviceName
          )
          .map((item) => item.subService)
      )
    : [];

  const availableCharges = selectedScheme
    ? selectedScheme.servcies
        .filter(
          (item) =>
            item.status == "Active" &&
            item.servcieName == serviceName &&
            item.subService == subServiceName
        )
        .flatMap((item) =>
          item.Charges.filter((charge) => charge.status == "Active")
        )
    : [];

  const availablePaymentModes = unique(
    availableCharges.map((charge) => charge.paymentMode)
  );

  const availablePaymentMethods = unique(
    availableCharges
      .filter((charge) => charge.paymentMode == paymentMode)
      .map((charge) => charge.paymentMethod)
  );

  const selectedCharge = availableCharges.find(
    (charge) =>
      charge.paymentMode == paymentMode &&
      charge.paymentMethod == paymentMethod
  );

  const baseAmount = Number(amount) > 0 ? Number(amount) : 0;
  const processingFee = selectedCharge
    ? Number(selectedCharge.processingFee) || 0
    : 0;
  const processingPercentage = selectedCharge
    ? Number(selectedCharge.processingPercentage) || 0
    : 0;
  const percentageCharge = (baseAmount * processingPercentage) / 100;
  const totalProcessingCharge =
    processingFee + percentageCharge;
  const totalAmount = baseAmount + totalProcessingCharge;

  const formatAmount = (value) =>
    value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const handleSchemeChange = (value) => {
    setSchemeName(value);
    setServiceName("");
    setSubServiceName("");
    setPaymentMode("");
    setPaymentMethod("");
  };

  const handleServiceChange = (value) => {
    setServiceName(value);
    setSubServiceName("");
    setPaymentMode("");
    setPaymentMethod("");
  };

  const handleSubServiceChange = (value) => {
    setSubServiceName(value);
    setPaymentMode("");
    setPaymentMethod("");
  };

  const handlePaymentModeChange = (value) => {
    setPaymentMode(value);
    setPaymentMethod("");
  };

  const paymentModeLabel = (mode) => {
    if (mode == "DebitCrad") return "Debit Card";
    if (mode == "CreditCard") return "Credit Card";
    return mode;
  };

  return (
    <>
      <h1>Welcome to Payment Methods</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="amount">Enter Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            placeholder="Enter amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <label htmlFor="scheme">Scheme</label>
        <select
          id="scheme"
          value={schemeName}
          onChange={(event) => handleSchemeChange(event.target.value)}
        >
          <option value="">Select a scheme</option>
          {details.map((item) => (
            <option key={item.schemeName} value={item.schemeName}>
              {item.schemeName}
            </option>
          ))}
        </select>

        <label htmlFor="service">Service</label>
        <select
          id="service"
          value={serviceName}
          onChange={(event) => handleServiceChange(event.target.value)}
          disabled={!schemeName}
        >
          <option value="">Select a service</option>
          {availableServices.map((item) => (
            <option key={item} value={item}>
              {item === "Rental" ? "Rent" : item}
            </option>
          ))}
        </select>

        <label htmlFor="sub-service">Sub Service</label>
        <select
          id="sub-service"
          value={subServiceName}
          onChange={(event) => handleSubServiceChange(event.target.value)}
          disabled={!serviceName}
        >
          <option value="">Select a sub service</option>
          {availableSubServices.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="payment-mode">Payment Mode</label>
        <select
          id="payment-mode"
          value={paymentMode}
          onChange={(event) => handlePaymentModeChange(event.target.value)}
          disabled={!subServiceName}
        >
          <option value="">Select a payment mode</option>
          {availablePaymentModes.map((item) => (
            <option key={item} value={item}>
              {paymentModeLabel(item)}
            </option>
          ))}
        </select>

        <label htmlFor="payment-method">Payment Method</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
          disabled={!paymentMode}
        >
          <option value="">Select a payment method</option>
          {availablePaymentMethods.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {selectedCharge && (
          <div>
            <p>Base Amount: {(baseAmount)}</p>
            {processingFee > 0 && (
              <p>Processing Fee: {formatAmount(processingFee)}</p>
            )}
            {processingPercentage > 0 && (
              <p>
                Processing Percentage: {processingPercentage}% (
                {formatAmount(percentageCharge)})
              </p>
            )}
            <p><strong>Total Amount to be paid: {formatAmount(totalAmount)}</strong></p>
          </div>
        )}
      </form>
    </>
  )
}

export default App
