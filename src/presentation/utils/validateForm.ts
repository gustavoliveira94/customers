export const validate = (text: string) => ({
  required: !text?.length,
});
