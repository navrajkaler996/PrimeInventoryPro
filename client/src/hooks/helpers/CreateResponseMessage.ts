const createResponseMessage = (type: string, method: string): string => {
  if (type === "success") {
    if (method === "POST") return "Product created successfully";
    if (method === "PUT") return "Product updated successfully";
    if (method === "DELETE") return "Product deleted successfully";
  } else if (type === "failed") {
    if (method === "POST") return "Product could not be created!";
    if (method === "PUT") return "Product could not be updated";
    if (method === "DELETE") return "Product could not be deleted";
  }

  return "Unknown response";
};

export default createResponseMessage;
