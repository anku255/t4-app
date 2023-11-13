/**
 * TODO: This is a WIP. The goal is to have a single source of truth for all environment variables.
 * Different prefixes for public environments across Expo & Next.js currently block this.
 */

import { string, object, parse } from 'valibot'

const envSchema = object({
  NODE_ENV: string(),
  // Routing
  NEXT_PUBLIC_API_URL: string(),
  NEXT_PUBLIC_APP_URL: string(),
  // Authentication
  APP_NAME: string(),
  APP_URL: string(),
  API_URL: string(),
  SUPERTOKENS_CONNECTION_URI: string(),
  SUPERTOKENS_API_KEY: string(),
  // Customer Support
  NEXT_PUBLIC_SUPPORT_EMAIL: string(),
  // Tamagui Debug
  TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD: string(),
  TAMAGUI_TARGET: string(),
  // Web Metadata
  NEXT_PUBLIC_METADATA_NAME: string(),
})

export const env = parse(envSchema, process.env)
