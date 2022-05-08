import type * as CodeGenerated from "./codegen-schema";
export * from './codegen-schema';

// export { CodeGenerated }
// export { CodeGenerated as default }
/**
 * "mainImage": {
    "_key": "fRlYwYJ2P_Pp6jLmtZL1l",
    "_type": "cloudinary.asset",
    "_version": 1,
    "access_mode": "public",
    "bytes": 2856169,
    "created_at": "2020-09-04T18:20:53Z",
    "created_by": null,
    "derived": [
      {
        "raw_transformation": "c_thumb,w_200,g_face",
        "secure_url": "https://res.cloudinary.com/jemjam/image/upload/c_thumb,w_200,g_face/v1599243653/samples/cloudinary-group.jpg",
        "url": "http://res.cloudinary.com/jemjam/image/upload/c_thumb,w_200,g_face/v1599243653/samples/cloudinary-group.jpg"
      }
    ],
    "duration": null,
    "format": "jpg",
    "height": 1526,
    "metadata": [],
    "public_id": "samples/cloudinary-group",
    "resource_type": "image",
    "secure_url": "https://res.cloudinary.com/jemjam/image/upload/v1599243653/samples/cloudinary-group.jpg",
    "tags": null,
    "type": "upload",
    "uploaded_by": null,
    "url": "http://res.cloudinary.com/jemjam/image/upload/v1599243653/samples/cloudinary-group.jpg",
    "version": 1599243653,
    "width": 3000
  },
 */

interface CloudinaryAsset {
  _type: "cloudinary.asset";
  secure_url?: string;
  url?: string;
  derived?: Array<Transformation>;
}

interface Transformation {
  raw_transformation: string;
  secure_url: string;
  url: string;
}

export interface Post extends CodeGenerated.Post {
  mainImage?: CloudinaryAsset;
}

// export interface Page extends SanityPage {
// }
