import { createAuthClient } from "better-auth/react";
import {
  adminClient,
  apiKeyClient,
  magicLinkClient,
  organizationClient,
} from "better-auth/client/plugins";
import { env } from "@/env";

const authBaseUrl =
  typeof window !== "undefined" ? window.location.origin : env.NEXT_PUBLIC_APP_URL;

/**
 * BetterAuth client setup with organization plugin for React components
 */
export const authClient = createAuthClient({
  // In browser, always use current origin to avoid baked localhost URLs in production bundles.
  baseURL: authBaseUrl,

  // Add the organization client plugin
  plugins: [
    adminClient(),
    apiKeyClient(),
    organizationClient(),
    magicLinkClient(),
  ],
});

// Export commonly used auth client methods
export const {
  // Session management
  useSession,
  getSession,

  // Authentication methods
  signIn,
  signUp,
  signOut,

  // Organization-related hooks and methods
  useListOrganizations,
  useActiveOrganization,

  // Organization management methods
  organization,
} = authClient;

// Export specific organization methods for convenience
export const {
  inviteMember,
  cancelInvitation,
  updateMemberRole,
  removeMember,
  listInvitations,
  acceptInvitation,
} = authClient.organization;
