import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://webinar.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "HbGm7IFrlpO6",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "ltqNqSXfUZbs",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "gkqzVJ5Z28ff",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "3BlTgDS7gDgs",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "bNd6bWAIMlKc",
    },
    firstName: { type: "string", storageKey: "Yj3aEGMHRZDr" },
    googleImageUrl: { type: "url", storageKey: "qD5jOIv8znU2" },
    googleProfileId: { type: "string", storageKey: "ASfZ7Nvs-_XY" },
    lastName: { type: "string", storageKey: "OfvVwqBvkpIq" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "_C5vWBLP9dkN",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "I0iX3O8q-rDF",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "9ZQALywzJ5I1",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "qqzTlmjuBoyh",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "WxepAIS0E8V9",
    },
  },
};
