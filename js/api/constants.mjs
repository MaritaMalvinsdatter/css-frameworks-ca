export const API_HOST_URL = 'https://nf-api.onrender.com';
export const API_BASE = '/api/v1';
export const API_SOCIAL_BASE = '/social';
export const API_POSTS_BASE = '/posts';
export const API_POST_AUTHOR = '_author=true&_reactions=true&_comments=true';
export const API_SOCIAL_URL = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}`;
export const API_POSTS_URL = `${API_SOCIAL_URL}${API_POSTS_BASE}`;
export const API_AUTHOR_URL = `${API_SOCIAL_URL}${API_POSTS_BASE}/?${API_POST_AUTHOR}`;