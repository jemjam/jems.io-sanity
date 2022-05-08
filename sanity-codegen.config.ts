import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.ts',
  outputPath: './codegen-schema.ts',
};

export default config;