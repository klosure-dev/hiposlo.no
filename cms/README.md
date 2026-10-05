# Hærverk i Parken - CMS

This package contains website's CMS application.

## MCP

Follow these steps to let your AI agent manage CMS content directly:

1. Set `MCP_ENABLED=true` in `.env` and start the CMS.
2. Create an Admin token under **Settings -> Global settings -> Admin Tokens**.
3. Give all permissions for Collection types, Single types and Plugins -> Media Library
3. Add `http://localhost:1337/mcp` as a remote MCP server using the header `Authorization: Bearer <token>`.

Note: there is a bug with the User Collection type, so skip permissions for that.
