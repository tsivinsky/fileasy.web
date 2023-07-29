export type OpenFileOptions = {
  accept?: string;
};

export const openFile = async (
  options?: OpenFileOptions
): Promise<File | null> => {
  const { accept = "" } = options || {};

  const input = document.createElement("input");
  input.type = "file";
  input.style.display = "none";

  input.accept = accept;

  input.click();

  return new Promise((resolve) => {
    input.addEventListener("change", function () {
      resolve(this.files?.item(0) ?? null);
    });
  });
};
