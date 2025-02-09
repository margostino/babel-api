// TODO: validate

import { splitVariable } from './utils'

export const HEADERS = {
  AUTHORIZATION: 'authorization',
  X_BABEL_ADMIN_TOKEN: 'x-babel-admin-token',
}

export const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''
export const OPENAI_API_BASE_URL = process.env.OPENAI_HOST || 'https://api.openai.com/v1'
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''

export const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o'

export const GITHUB_USERNAME = process.env.GITHUB_USERNAME || ''

export const GITHUB_REPO_PROMPTS = process.env.GITHUB_REPO_PROMPTS || ''

export const GITHUB_MEMORY_CLASSIFICATION_PROMPT_PATH =
  process.env.GITHUB_MEMORY_CLASSIFICATION_PROMPT_PATH || ''

export const GITHUB_MEMORY_ASSISTANT_PROMPT_PATH =
  process.env.GITHUB_MEMORY_ASSISTANT_PROMPT_PATH || ''

export const GITHUB_REPO_DATA = process.env.GITHUB_REPO_DATA || ''

export const GITHUB_REPO_PARKING_PATH = process.env.GITHUB_REPO_PARKING_PATH || ''

export const GITHUB_REPO_METADATA_INDEX_PATH = process.env.GITHUB_REPO_METADATA_INDEX_PATH || ''

export const BABEL_ADMIN_TOKEN = process.env.BABEL_ADMIN_TOKEN || ''

export const BABEL_API_TOKEN = process.env.BABEL_API_TOKEN || ''

export const PORT_DEV_SERVER = process.env.PORT_DEV_SERVER ?? 3000

export const MINIMAL_HEADERS = splitVariable(process.env.MINIMAL_HEADERS)

export const REQUIRED_HEADERS = splitVariable(process.env.REQUIRED_HEADERS)

export const ENV = process.env.VERCEL_ENV || ''

export const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || ''

export const GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY =
  process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || ''

export const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || ''

export const GOOGLE_SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE || ''

export const GOOGLE_SERVICE_ACCOUNT_CREDENTIALS =
  process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS || ''

export const VECTOR_SEARCH_RESULT_SCORE_THRESHOLD =
  Number(process.env.VECTOR_SEARCH_RESULT_SCORE_THRESHOLD) || 0.6

export const VECTOR_SEARCH_LIMIT = Number(process.env.VECTOR_SEARCH_LIMIT) || 20

export const VECTOR_SEARCH_ALPHA = Number(process.env.VECTOR_SEARCH_ALPHA) || 0.2
