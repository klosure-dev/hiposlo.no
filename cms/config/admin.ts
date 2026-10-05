import type { Core } from '@strapi/strapi';
import { getPreviewPath } from './preview';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => {
  const clientUrl = env('CLIENT_URL')!;

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET')!,
    },
    apiToken: {
      salt: env('API_TOKEN_SALT')!,
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT')!,
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY')!,
    },
    flags: {
      nps: env.bool('FLAG_NPS', false),
      promoteEE: env.bool('FLAG_PROMOTE_EE', false),
      docLinks: env.bool('FLAG_DOC_LINKS', true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: [clientUrl],
        async handler(uid, { status }) {
          const path = getPreviewPath(uid);

          if (!path) {
            return null;
          }

          const url = new URL(path, clientUrl);
          url.searchParams.set('preview', 'true');

          if (status) {
            url.searchParams.set('status', status);
          }

          return url.toString();
        },
      },
    },
  };
};

export default config;
