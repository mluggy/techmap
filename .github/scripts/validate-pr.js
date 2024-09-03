const fs = require("fs");
const path = require("path");
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const sharp = require("sharp");
const { execSync } = require("child_process");

const ajv = new Ajv();
addFormats(ajv);

// Define your JSON schema here
const schema = {
  type: "object",
  required: ["name", "categoryId", "websiteUrl", "addresses"],
  properties: {
    name: { type: "string" },
    description: { type: "string" },
    categoryId: { type: "integer" },
    size: { enum: ["xs", "s", "m", "l", "xl"] },
    logoFile: {
      type: "string",
      pattern: "^logos/.*\\.(webp|gif|jpe?g|png)$",
    },
    websiteUrl: { type: "string", format: "uri" },
    careersUrl: { type: "string", format: "uri" },
    linkedinId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    linkedinNum: { type: "number" },
    crunchbaseId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    finderId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    xId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    facebookId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    greenhouseId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    breezyId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    leverId: { type: "string", pattern: "^[a-zA-Z0-9\\-_\\.,]+$" },
    comeetId: {
      type: "string",
      pattern: "^[a-zA-Z0-9\\-_\\.,]+/[a-zA-Z0-9\\-_\\.,]+$",
    },
    addresses: {
      type: "array",
      minItems: 1,
      items: {
        type: "object",
        required: ["city"],
        properties: {
          street: { type: "string" },
          houseNumber: { type: "number" },
          city: { type: "string" },
          lat: { type: "number" },
          lon: { type: "number" },
        },
      },
    },
    isMultinational: { type: "boolean" },
  },
  additionalProperties: false,
};

const validate = ajv.compile(schema);

async function validateJson(filePath) {
  const jsonContent = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const valid = validate(jsonContent);

  let hasOnlyAdditionalPropertiesError = false;
  let additionalProperties = [];

  if (!valid) {
    hasOnlyAdditionalPropertiesError = validate.errors.every(
      (error) => error.keyword === "additionalProperties"
    );

    if (!hasOnlyAdditionalPropertiesError) {
      console.error("We found some issues with your JSON file:");
    }

    validate.errors.forEach((error) => {
      let message = `- ${error.instancePath} ${error.message}`;
      switch (error.keyword) {
        case "type":
          message = `- "${error.instancePath.slice(1)}" should be a ${
            error.params.type
          }`;
          break;
        case "required":
          message = `- "${error.params.missingProperty}" is required`;
          break;
        case "enum":
          message = `- "${error.instancePath.slice(
            1
          )}" should be one of: ${error.params.allowedValues.join(", ")}`;
          break;
        case "format":
          message = `- "${error.instancePath.slice(1)}" should be a valid ${
            error.params.format
          }`;
          break;
        case "pattern":
          message = `- "${error.instancePath.slice(
            1
          )}" should match the pattern: ${error.params.pattern}`;
          break;
        case "additionalProperties":
          additionalProperties.push(error.params.additionalProperty);
          return; // Skip logging this error
      }
      if (!hasOnlyAdditionalPropertiesError) {
        console.error(message);
      }
    });

    if (additionalProperties.length > 0) {
      console.warn("\nWarning: Additional properties found:");
      additionalProperties.forEach((prop) => {
        console.warn(`- "${prop}"`);
      });
      console.warn("\nAllowed properties are:");
      Object.keys(schema.properties).forEach((prop) => {
        console.warn(`- "${prop}"`);
      });
    }

    if (!hasOnlyAdditionalPropertiesError) {
      process.exit(1);
    }
  }

  if (jsonContent.isHiring !== undefined) {
    console.warn(
      'Friendly reminder: The "isHiring" field is obsolete and can be removed, but it\'s still allowed in the schema.'
    );
  }

  if (valid || hasOnlyAdditionalPropertiesError) {
    console.log("Great job! Your JSON file passed validation.");
    if (hasOnlyAdditionalPropertiesError) {
      console.log("(with warnings about additional properties)");
    }
  }
}

async function validateLogo(jsonFilePath, logosFolderPath) {
  const jsonContent = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
  const logoFile = jsonContent.logoFile;

  // Ensure logoFile starts with "logos/"
  if (!logoFile.startsWith("logos/")) {
    console.error(`Logo file path "${logoFile}" must start with "logos/"`);
    process.exit(1);
  }

  // Use the logoFile path directly, as it already includes "logos/"
  const logoPath = path.join(process.cwd(), logoFile);

  console.log(`Validating logo: ${logoPath}`);

  if (!fs.existsSync(logoPath)) {
    console.error(`Logo file ${logoFile} not found at path: ${logoPath}`);
    console.error(
      `Contents of logos folder:`,
      fs.readdirSync(path.dirname(logoPath))
    );
    process.exit(1);
  }

  const metadata = await sharp(logoPath).metadata();

  if (metadata.width !== 200 || metadata.height !== 200) {
    console.error(`Logo file ${logoFile} is not 200x200px`);
    process.exit(1);
  }

  if (!["webp", "jpeg", "jpg", "gif"].includes(metadata.format)) {
    console.error(
      `Logo file ${logoFile} is not in a valid format (webp, jpeg, jpg, or gif)`
    );
    process.exit(1);
  }

  console.log("Logo validation passed");
}

async function main(filePath) {
  if (filePath) {
    // Test a single file
    if (filePath.endsWith(".json")) {
      await validateJson(filePath);
      await validateLogo(filePath, "logos");
    } else {
      console.error("Please provide a JSON file path.");
      process.exit(1);
    }
  } else {
    // Original behavior for CI
    const changedFiles = execSync("git diff --name-only origin/main...HEAD")
      .toString()
      .trim()
      .split("\n");

    for (const file of changedFiles) {
      if (file.endsWith(".json")) {
        await validateJson(file);
        await validateLogo(file, "logos");
      }
    }
  }
}

// Check if a file path is provided as a command-line argument
const filePath = process.argv[2];
main(filePath).catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
