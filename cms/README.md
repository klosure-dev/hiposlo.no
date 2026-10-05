# Hærverk i Parken - CMS

This package contains website's CMS application.

## MCP

1. Set `MCP_ENABLED=true` in `.env` and start the CMS.
2. Create an Admin token under **Settings → Global settings → Admin Tokens**.
3. Add `http://localhost:1337/mcp` as a remote MCP server using the header `Authorization: Bearer <token>`.

