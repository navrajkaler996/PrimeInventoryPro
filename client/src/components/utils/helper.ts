import SuccessIcon from "../../assets/toast/success.png";
import FailedIcon from "../../assets/toast/failed.png";
import moment from "moment";
import { COLOR_CODE } from "../../utils/constants";
//Index signature
interface ItemType {
  [key: string]: any;
}

//Function to return the values for the table
//Using moment.js for createdAt
export const getValue = (item: ItemType, value: string) => {
  for (const key in item) {
    if (key == value) {
      if (key == "createdAt" || key == "received_at")
        return moment(item[key]).fromNow();

      return item[key];
    }
  }
  return "";
};

export const getIcon = (type: string) => {
  if (type === "success") return SuccessIcon;
  if (type === "failed") return FailedIcon;
};

export const getBackgroundColor = (type: string) => {
  if (type === "success") return { backgroundColor: COLOR_CODE.SUCCESS };
  if (type === "failed") return { backgroundColor: COLOR_CODE.FAILED };
};

export const getInitials = (value: string) => {
  let splitValue = value.split(" ");

  return (
    splitValue[0].charAt(0)?.toUpperCase() +
    splitValue[1].charAt(0).toUpperCase()
  );
};
