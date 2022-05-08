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
   *
   */
  mainImage?: CloudinaryAsset;

  /**
   * Topics — `array`
   *
   * Topics (tags) that this post is related to
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
   *
   */
  label?: string;

  /**
   * Slug (value) — `slug`
   *
   *
   */
  value?: { _type: "value"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
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

export type Documents = Post | Page | Topic;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type CloudinaryAsset = any;
