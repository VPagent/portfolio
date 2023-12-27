export const techIconsCreator = (description: string) => {
  const iconsNames = [];
  const lowDescription = description.toLocaleLowerCase();

  if (lowDescription.includes("html")) {
    iconsNames.push("html");
  }
  if (lowDescription.includes("js") || lowDescription.includes("java")) {
    if (lowDescription.includes("react")) {
      iconsNames.push("react");
    }
    if (!lowDescription.includes("react")) {
      iconsNames.push("javascript");
    }
  }
  if (lowDescription.includes("type") || lowDescription.includes("type-script")) {
    iconsNames.push("typescript");
  }
  if (lowDescription.includes("tailwind")) {
    iconsNames.push("taillwind");
  }
  if (lowDescription.includes("rest-api")) {
    iconsNames.push("restapi");
  }
  if (lowDescription.includes("sass") || lowDescription.includes("scss")) {
    iconsNames.push("sass");
  }
  if (lowDescription.includes("wordpress")) {
    iconsNames.push("wordpress");
  }

  return iconsNames;
};

export const userNameValidation = (name: string) => {
  if (!name?.length || name.length < 2) {
    return false;
  }

  return name;
};

export const userEmailValidation = (email: string) => {
  if (!email.includes("@") || !email.includes(".") || email.length < 4) {
    return false;
  }

  return email;
};

export const userMessageValidation = (message: string) => {
  if (!message.length || message.length < 10) {
    return false;
  }

  return message;
};
