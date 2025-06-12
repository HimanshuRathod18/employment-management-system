export function getSelectOptions(users, field) {
  const uniqueValues = [...new Set(users.map((user) => user[field]))];

  return uniqueValues.map((value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value: value,
  }));
}

export function getFilteredUsers(users, filterOptions) {
  const genderValue = filterOptions?.gender?.value;
  const bloodGroupValue = filterOptions?.bloodGroup?.value;
  const universityValue = filterOptions?.university?.value;

  return users.filter((user) => {
    const genderMatch = !genderValue || user.gender === genderValue;
    const bloodGroupMatch =
      !bloodGroupValue || user.bloodGroup === bloodGroupValue;
    const universityMatch =
      !universityValue || user.university === universityValue;

    return genderMatch && bloodGroupMatch && universityMatch;
  });
}

export function getTabData(employee) {
  return [
    {
      label: "Profile",
      data: {
        basicInfo: {
          label: "Basic Info",
          value: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            age: employee.age,
            gender: employee.gender,
            birthDate: employee.birthDate,
            university: employee.university,
            role: employee.role,
          },
        },
        physicalStat: {
          label: "Physical Stat",
          value: {
            height: employee.height,
            weight: employee.weight,
            bloodGroup: employee.bloodGroup,
            eyeColor: employee.eyeColor,
            hairColor: employee.hair.color,
            hairType: employee.hair.type,
          },
        },
      },
    },
    {
      label: "Contact & Identity",
      data: {
        basicContactInfo: {
          label: "Basic Contact Info",
          value: {
            email: employee.email,
            phone: employee.phone,
            username: employee.username,
          },
        },
        identificationDetails: {
          label: "Identification Details",
          value: {
            ssn: employee.ssn,
            ein: employee.ein,
          },
        },
      },
    },
    {
      label: "Address & Work",
      data: {
        employeeAddress: {
          label: "Employee Address",
          value: {
            address: employee.address.address,
            city: employee.address.city,
            state: employee.address.state,
          },
        },
        employeeCompanyDetails: {
          label: "Company Details",
          value: {
            company: employee.company.name,
            department: employee.company.department,
            title: employee.company.title,
            companyCity: employee.company.address.city,
          },
        },
      },
    },
    {
      label: "Finance & Tech",
      data: {
        bankDetails: {
          label: "Bank Details",
          value: {
            cardType: employee.bank.cardType,
            cardNumber: employee.bank.cardNumber,
          },
        },
        cryptoDetails: {
          label: "Crypto Details",
          value: { wallet: employee.crypto.wallet, coin: employee.crypto.coin },
        },
        ipDetails: {
          label: "IP Details",
          value: {
            ip: employee.ip,
            macAddress: employee.macAddress,
          },
        },
      },
    },
  ];
}

export const formatLabel = (str) =>
  str.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
