//Net salary calculator
let basicSalary = Number(prompt("Please enter the basic salary in Ksh: "));
let benefits = Number(prompt("Please enter the benefits in Ksh: "));
let grossSalary = basicSalary + benefits;

const payeRates = [
    {
      monthlyTaxablePay: "Up to 24,000",
      annualTaxablePay: "Up to 288,000",
      rateOfTax: 10.0,
    },
    {
      monthlyTaxablePay: "24,001 - 32,333",
      annualTaxablePay: "288,001 - 388,000",
      rateOfTax: 25.0,
    },
    {
      monthlyTaxablePay: "32,334 - 500,000",
      annualTaxablePay: "388,001 - 6,000,000",
      rateOfTax: 30.0,
    },
    {
      monthlyTaxablePay: "500,001 - 800,000",
      annualTaxablePay: "6,000,001 - 9,600,000",
      rateOfTax: 32.5,
    },
    {
      monthlyTaxablePay: "Above 800,000",
      annualTaxablePay: "Above 9,600,000",
      rateOfTax: 35.0,
    },
  ];

  const otherPayeParameters = [
    {
      parameter: "Allowable Aggregate Benefits",
      monthlyLimit: 5000,
      annualLimit: 60000,
      effectiveSince: "27 December 2024",
    },
    {
      parameter: "Allowable Meals Benefit",
      monthlyLimit: 5000,
      annualLimit: 60000,
      effectiveSince: "27 December 2024",
    },
    {
      parameter: "Allowable Pension Fund Contribution",
      monthlyLimit: 30000,
      annualLimit: 360000,
      effectiveSince: "27 December 2024",
    },
    {
      parameter: "Allowable Owner Occupier Interest",
      monthlyLimit: 30000,
      annualLimit: 360000,
      effectiveSince: "27 December 2024",
    },
    {
      parameter: "Personal Relief",
      monthlyLimit: 2400,
      annualLimit: 28800,
      effectiveSince: "25 April 2020",
    },
    {
      parameter: "Insurance Relief",
      monthlyLimit: 5000,
      annualLimit: 60000,
      effectiveSince: "1 January 2007",
    },
    {
      parameter: "Affordable Housing Relief",
      monthlyLimit: 0,
      annualLimit: 0,
      effectiveSince: "27 December 2024",
    },
    {
      parameter: "Disability Exemption",
      monthlyLimit: 150000,
      annualLimit: 1800000,
      effectiveSince: "10 March 2010",
    },
  ];

// Function to calculate PAYE (Tax) without 
function calculatePAYE(grossSalary) {
    let paye = 0;
    let remainingSalary = grossSalary;

    for (let i = 0; i < payeRates.length; i++) {
        const rate = payeRates[i];
        let upperLimit;

        if (rate.monthlyTaxablePay.includes("Up to")) {
            upperLimit = parseInt(rate.monthlyTaxablePay.replace("Up to ", "").replace(",", ""));
        } else if (rate.monthlyTaxablePay.includes("Above")) {
            upperLimit = Infinity;
        } else {
            const range = rate.monthlyTaxablePay.split(" - ");
            upperLimit = parseInt(range[1].replace(",", ""));
        }

        if (remainingSalary > 0) {
            const taxableAmount = Math.min(remainingSalary, upperLimit - (i > 0 ? parseInt(payeRates[i - 1].monthlyTaxablePay.split(" - ")[1].replace(",", "")) : 0));
            paye += taxableAmount * (rate.rateOfTax / 100);
            remainingSalary -= taxableAmount;
        } else {
            break;
        }
    }

    return paye;
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    const tier1 = Math.min(grossSalary, 6000) * 0.06;
    const tier2 = Math.min(Math.max(grossSalary - 6000, 0), 12000) * 0.06;
    return tier1 + tier2;
}

// Calculate deductions and net salary
const paye = calculatePAYE(grossSalary);
const nhif = calculateNHIF(grossSalary);
const nssf = calculateNSSF(grossSalary);
const totalDeductions = paye + nhif + nssf;
const netSalary = grossSalary - totalDeductions;

// Output results
console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
console.log(`PAYE (Tax): Ksh ${paye.toFixed(2)}`);
console.log(`NHIF Deductions: Ksh ${nhif.toFixed(2)}`);
console.log(`NSSF Deductions: Ksh ${nssf.toFixed(2)}`);
console.log(`Total Deductions: Ksh ${totalDeductions.toFixed(2)}`);
console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);

