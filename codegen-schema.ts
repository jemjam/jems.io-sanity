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
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `cloudinary.asset`
   *
   * The primary image, usually displayed prominently and in the post list.
   */
  mainImage?: CloudinaryAsset;

  /**
   * Topics — `array`
   *
   * Topic (references) that this post is related to. This is used to find and filter posts by topic.
   */
  relatedTopics?: Array<SanityKeyedReference<Topic>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
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
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `imageWithAlt`
   *
   *
   */
  mainImage?: ImageWithAlt;

  /**
   * Body — `blockContent`
   *
   *
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
