import * as React from "react";
import type { Component } from "react";

/**
 * These types are far from perfect, but they cover our primary use cases.
 * Maintain and add to these as the schema evolves.
 */

interface GroupDefinition {
  name: string;
  title: string;
  default?: boolean;
  icon?: Component;
  hidden?: () => boolean;
}

/** Sanity Field Definitions tend to include a handful of base properties */
interface BaseFieldDefinition extends Object {
  title?: string;
  type: string;
  description?: string;
  group?: string | string[];
  options?: any;
  hidden?: () => boolean;
  readonly?: () => boolean | boolean;
}

/** NamedFields will display a label for their "name" in the studio */
interface NamedFieldDefinition extends BaseFieldDefinition {
  name: string;
}

/** https://www.sanity.io/docs/text-type */
interface TextField extends NamedFieldDefinition {
  type: "text";
  rows: number;
}

interface ArrayField extends NamedFieldDefinition {
  type: "array";
  of: SanityField[];
}

interface DateTimeField extends NamedFieldDefinition {
  type: "datetime";
}

/** https://www.sanity.io/docs/reference-type */
interface ReferenceField extends BaseFieldDefinition {
  type: "reference";
  to: { type: string };
  weak?: boolean; // Weak references allow us to delete the referenced document
  // without deleting the referencing document
}

/** Sanity field types as defined locally: this list is non-exhaustive */
type SanityField =
  | BaseFieldDefinition
  | NamedFieldDefinition
  | ArrayField
  | TextField
  | ReferenceField
  | DateTimeField;

/**
 * Common group definitions
 */
export const commonGroups: GroupDefinition[] = [
  { name: "content", title: "Content" },
  { name: "meta", title: "Meta", default: true },
];

/**
 * These common fields are useful for pages representing nearly any "kind" so
 * long as that page is meant to be shared online at a URL (slug) with some
 * basic content.
 */
export const commonFields: NamedFieldDefinition[] = [
  {
    name: "title",
    title: "Title",
    type: "string",
    description: "The title of the page, rendered as H1 and page title.",
    group: ["content", "meta"],
  },
  {
    name: "description",
    title: "Description",
    description:
      "A short description of the page, used in listings and search results.",
    type: "text",
    rows: 4,
    group: ["meta"],
  } as TextField,
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    description:
      "The slug of the page defines the URL path to this content (relative to the content type).",
    group: ["meta"],
    options: {
      source: "title",
      maxLength: 96,
    },
  },
  {
    name: "mainImage",
    title: "Main image",
    type: "imageWithAlt",
    description:
      "The main image of the page typically displayed in a hero region.",
    group: ["content", "meta"],
  },
  {
    name: "body",
    title: "Body",
    description: "The body of the page, our main content.",
    type: "blockContent",
    group: ["content"],
  },
];

/**
 * Document type generator: creates a document type with: title, slug, desc, etc
 * Covers a set of standard fields while allowing you to add your own.
 */
export default function webPageDocumentGenerator(
  /** Include a friendly type name, used for the name and _type */
  typeName: string,
  /** Extra fields on top of the common ones to include for this type */
  additionalFields: Array<SanityField> = []
) {
  const typeIdentifier = typeName.toLowerCase();
  return {
    name: typeIdentifier,
    title: typeName,
    type: "document",
    groups: [...commonGroups],
    fields: [...commonFields, ...additionalFields],
    preview: {
      prepare(selection) {
        const { title, slug, mainImage = {} } = selection;
        // This is coming from the cloudinary image asset field
        const { image = {} } = mainImage;
        const { secure_url = "", derived = [] } = image;
        // Get first derived image if it exists, otherwise use the main image
        const imageUrl = derived?.[0]?.secure_url ?? secure_url;
        return {
          title: title,
          subtitle: slug?.current,
          media: imageUrl ? <img src={imageUrl} alt="mainImage" /> : null,
        };
      },
      select: {
        title: "title",
        slug: "slug",
        mainImage: "mainImage",
      },
    },
  };
}
