export const products = {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Product Name",
    },
    {
      name: "description",
      type: "text",
      title: "Product Description",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image", title: "image" }],
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
  ],
};
