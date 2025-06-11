export function getSelectOptions(users, field) {
  const uniqueValues = [...new Set(users.map((user) => user[field]))];

  return uniqueValues.map((value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value: value,
  }));
}

export function getFilteredUsers(users, filterOptions) {
  // const {
  //   gender: { value: genderValue },
  //   bloodGroup: { value: bloodGroupValue },
  //   university: { value: universityValue },
  // } = filterOptions;
  const genderValue = filterOptions?.gender?.value;
  const bloodGroupValue = filterOptions?.bloodGroup?.value;
  const universityValue = filterOptions?.university?.value;

  console.log("::: genderValue", genderValue, bloodGroupValue, universityValue);
  console.log("::: filterOptions", filterOptions);

  return users.filter(
    (user) =>
      (!filterOptions.gender?.value ||
        user.gender === filterOptions.gender.value) &&
      (!filterOptions.bloodGroup?.value ||
        user.bloodGroup === filterOptions.bloodGroup.value) &&
      (!filterOptions.university?.value ||
        user.university === filterOptions.university.value)
  );
}
