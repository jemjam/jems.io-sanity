import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Home Page — `reference`
   *
   * Select a page to use as the homepage.
   */
  home?: SanityReference<Page>;

  /**
   * Description — `string`
   *
   * A short description of this site generally.
   */
  description?: string;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   * The title of the page, rendered as H1 and page title.
   */
  title?: string;

  /**
   * Description — `text`
   *
   * A short description of the page, used in listings and search results.
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   * The slug of the page defines the URL path to this content (relative to the content type).
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `imageWithAlt`
   *
   * The main image of the page typically displayed in a hero region.
   */
  mainImage?: ImageWithAlt;

  /**
   * Body — `blockContent`
   *
   * The body of the page, our main content.
   */
  body?: BlockContent;

  /**
   * Topics — `array`
   *
   * Topic (references) that this post is related to. This is used to find and filter posts by topic.
   */
  relatedTopics?: Array<SanityKeyedReference<Topic>>;

  /**
   * Published at — `datetime`
   *
   * A date and time when this post is available (unavailable until then).
   */
  publishedAt?: string;
}

/**
 * Topic
 *
 *
 */
export interface Topic extends SanityDocument {
  _type: "topic";

  /**
   * Title (label) — `string`
   *
   * Title as displayed in tag and topic pages.
   */
  Title?: string;

  /**
   * Slug (value) — `slug`
   *
   * Slug used as reference or for part of the topic URL.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   * A brief description of the topic displayed on topic pages.
   */
  description?: string;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   * The title of the page, rendered as H1 and page title.
   */
  title?: string;

  /**
   * Description — `text`
   *
   * A short description of the page, used in listings and search results.
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   * The slug of the page defines the URL path to this content (relative to the content type).
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `imageWithAlt`
   *
   * The main image of the page typically displayed in a hero region.
   */
  mainImage?: ImageWithAlt;

  /**
   * Body — `blockContent`
   *
   * The body of the page, our main content.
   */
  body?: BlockContent;
}

export type BlockContent = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<ImageWithAlt>
>;

export type ImageWithAlt = {
  _type: "imageWithAlt";
  /**
   * Image — `cloudinary.asset`
   *
   *
   */
  image?: CloudinaryAsset;

  /**
   * Alt — `string`
   *
   *
   */
  alt?: string;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
};

export type Documents = SiteSettings | Post | Topic | Page;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type CloudinaryAsset = any;
