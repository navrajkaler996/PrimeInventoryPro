import moment from "moment";
//Index signature
interface ItemType {
  [key: string]: any;
}

//Function to return the values for the table
//Using moment.js for createdAt
export const getValue = (item: ItemType, value: string) => {
  for (const key in item) {
    if (key == value) {
      if (key == "createdAt") return moment(item[key]).fromNow();

      return item[key];
    }
  }
  return "";
};
