export const filterFormData = (data: any) => {
  delete data.errors;

  let filteredData: any = {};

  for (let key in data) {
    if (key !== "product_name") {
      filteredData[key.slice(8)] = data[key];
    } else {
      filteredData["product_name"] = data[key];
    }
  }

  return filteredData;
};
