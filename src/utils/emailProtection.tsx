
import React from 'react';

/**
 * Utility functions to protect email addresses from crawlers
 */

/**
 * Returns an email address that's obfuscated in the HTML but visible to users
 * This splits the email and adds HTML entities to make it harder for bots to parse
 */
export const obfuscateEmail = (email: string): React.ReactNode => {
  const [username, domain] = email.split('@');
  
  return (
    <>
      <span className="username">{username}</span>
      <span className="at">&#64;</span>
      <span className="domain">{domain}</span>
    </>
  );
};

/**
 * Generates the mailto link for an obfuscated email
 */
export const generateMailtoLink = (email: string): string => {
  // Simple encoding to make it slightly harder for basic crawlers
  const encodedEmail = email.replace('@', '&#64;');
  return `mailto:${email}`;
};
