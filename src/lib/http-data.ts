export type HttpMethod = {
  name: string;
  description: string;
  typicalUse: string;
  idempotent: boolean;
  safe: boolean;
};

export type StatusCategory = {
  name: string;
  description: string;
  codes: {
    code: string;
    label: string;
    detail: string;
  }[];
};

export type LifecycleStep = {
  title: string;
  detail: string;
  developerNote: string;
};

export type HttpVersion = {
  version: string;
  releaseYear: number;
  highlights: string[];
};

export const httpMethods: HttpMethod[] = [
  {
    name: "GET",
    description: "Retrieves a representation of a resource without modifying it.",
    typicalUse: "Fetch a web page, list of products, or API resource.",
    idempotent: true,
    safe: true,
  },
  {
    name: "POST",
    description: "Creates subordinate resources or triggers server-side actions.",
    typicalUse: "Submit a form, create a record, or initiate an asynchronous process.",
    idempotent: false,
    safe: false,
  },
  {
    name: "PUT",
    description: "Replaces a resource entirely with the payload provided by the client.",
    typicalUse: "Update an entire user profile or overwrite a document.",
    idempotent: true,
    safe: false,
  },
  {
    name: "PATCH",
    description: "Applies partial modifications to an existing resource.",
    typicalUse: "Update a single attribute, such as an email or status flag.",
    idempotent: false,
    safe: false,
  },
  {
    name: "DELETE",
    description: "Removes the target resource from the server.",
    typicalUse: "Delete a comment, cancel a subscription, or revoke access.",
    idempotent: true,
    safe: false,
  },
  {
    name: "OPTIONS",
    description: "Describes server capabilities, often used for CORS preflight checks.",
    typicalUse: "Ask a server which methods/headers are allowed before sending the real request.",
    idempotent: true,
    safe: true,
  },
  {
    name: "HEAD",
    description: "Requests metadata identical to GET but omits the response body.",
    typicalUse: "Check if a resource exists or retrieve headers like Content-Length.",
    idempotent: true,
    safe: true,
  },
];

export const statusCategories: StatusCategory[] = [
  {
    name: "1xx Informational",
    description: "Provisional responses acknowledging the request has been received.",
    codes: [
      {
        code: "100",
        label: "Continue",
        detail: "Client can proceed with request body after headers are processed.",
      },
      {
        code: "101",
        label: "Switching Protocols",
        detail: "Server agrees to upgrade the connection (e.g., to WebSocket).",
      },
    ],
  },
  {
    name: "2xx Success",
    description: "Request was successfully received, understood, and accepted.",
    codes: [
      {
        code: "200",
        label: "OK",
        detail: "Standard success response for GET/PUT/PATCH/DELETE.",
      },
      {
        code: "201",
        label: "Created",
        detail: "New resource was created successfully after POST or PUT.",
      },
      {
        code: "204",
        label: "No Content",
        detail: "Request succeeded but no body is returned (common for DELETE).",
      },
    ],
  },
  {
    name: "3xx Redirection",
    description: "Client must take additional action to complete the request.",
    codes: [
      {
        code: "301",
        label: "Moved Permanently",
        detail: "Resource resides permanently at a different URI; cacheable.",
      },
      {
        code: "302",
        label: "Found",
        detail: "Temporary redirect; resource resides temporarily at a different URI.",
      },
      {
        code: "304",
        label: "Not Modified",
        detail: "Allows cached responses when resource has not changed.",
      },
    ],
  },
  {
    name: "4xx Client Errors",
    description: "Client made a request the server cannot or will not process.",
    codes: [
      {
        code: "400",
        label: "Bad Request",
        detail: "Malformed request due to invalid syntax or missing fields.",
      },
      {
        code: "401",
        label: "Unauthorized",
        detail: "Authentication required; credentials missing or invalid.",
      },
      {
        code: "403",
        label: "Forbidden",
        detail: "Client authenticated but lacks permission to access the resource.",
      },
      {
        code: "404",
        label: "Not Found",
        detail: "Resource does not exist at the requested URI.",
      },
    ],
  },
  {
    name: "5xx Server Errors",
    description: "Request was valid, but the server failed to fulfill it.",
    codes: [
      {
        code: "500",
        label: "Internal Server Error",
        detail: "Generic error when the server encounters an unexpected condition.",
      },
      {
        code: "502",
        label: "Bad Gateway",
        detail: "Upstream server returned an invalid response to a gateway or proxy.",
      },
      {
        code: "503",
        label: "Service Unavailable",
        detail: "Server is overloaded or down for maintenance; often retryable.",
      },
    ],
  },
];

export const lifecycle: LifecycleStep[] = [
  {
    title: "DNS Resolution",
    detail:
      "The client resolves the domain name (e.g., www.example.com) to an IP address using the Domain Name System.",
    developerNote:
      "Use global DNS or edge caching services to minimize lookup latency for worldwide audiences.",
  },
  {
    title: "TCP & TLS Handshake",
    detail:
      "A TCP connection is established with a three-way handshake; HTTPS adds a TLS handshake to negotiate encryption.",
    developerNote:
      "Enable HTTP/2 or HTTP/3 on top of TLS for multiplexing and reduced head-of-line blocking.",
  },
  {
    title: "Request Construction",
    detail:
      "The client formats the request line, headers, optional body, and sends it over the open connection.",
    developerNote:
      "Avoid sending unnecessary headers; use compression like gzip or brotli for large payloads.",
  },
  {
    title: "Server Processing",
    detail:
      "The origin server (or CDN/edge) authenticates, authorizes, and executes application logic to generate a response.",
    developerNote:
      "Instrument your handlers with metrics and tracing to observe latency per endpoint.",
  },
  {
    title: "Response Delivery",
    detail:
      "The server returns status line, headers, and body. Clients handle caching directives, redirects, or errors.",
    developerNote:
      "Set cache-control and content-type intentionally; return consistent error formats for debugging.",
  },
];

export const httpVersions: HttpVersion[] = [
  {
    version: "HTTP/1.1",
    releaseYear: 1997,
    highlights: [
      "Persistent TCP connections with keep-alive",
      "Chunked transfer encoding for streaming bodies",
      "Pipelining requests over the same connection (rarely used due to HOL blocking)",
    ],
  },
  {
    version: "HTTP/2",
    releaseYear: 2015,
    highlights: [
      "Binary framing and multiplexed streams over a single connection",
      "Header compression using HPACK to reduce overhead",
      "Server push (largely deprecated but improved asset delivery at the time)",
    ],
  },
  {
    version: "HTTP/3",
    releaseYear: 2022,
    highlights: [
      "Built on top of QUIC over UDP for faster handshake and loss recovery",
      "Eliminates head-of-line blocking at the transport layer",
      "Improved connection migration for mobile clients switching networks",
    ],
  },
];

export const securityPractices = [
  {
    title: "TLS Everywhere",
    detail:
      "Always serve HTTP over TLS to prevent eavesdropping and tampering. Use certificates from trusted authorities and enable HSTS.",
  },
  {
    title: "Authentication & Authorization",
    detail:
      "Use headers such as Authorization with JWT or OAuth tokens. Combine with scopes or roles to limit access.",
  },
  {
    title: "Input Validation",
    detail:
      "Sanitize user input to prevent injection. Validate content-type to ensure payloads match expectations.",
  },
  {
    title: "Rate Limiting & Throttling",
    detail:
      "Protect APIs by limiting request frequency per client. Combine with circuit breakers for downstream dependencies.",
  },
  {
    title: "Content Security Policy (CSP)",
    detail:
      "Use headers to restrict resource loading and mitigate cross-site scripting (XSS) in browsers.",
  },
];

export const cachingStrategies = [
  {
    title: "Freshness-Based Caching",
    detail:
      "Use Cache-Control: max-age and s-maxage to control how long intermediaries may serve cached content.",
  },
  {
    title: "Validation Tokens",
    detail:
      "Etag and Last-Modified headers allow clients to revalidate content with conditional requests (If-None-Match, If-Modified-Since).",
  },
  {
    title: "Content Negotiation",
    detail:
      "Vary responses based on Accept, Accept-Encoding, or Accept-Language while preserving cache correctness.",
  },
  {
    title: "Layered Caching",
    detail:
      "Combine CDN edge nodes, reverse proxies, and client caches to reduce origin load and latency.",
  },
];

export const headerHighlights = [
  {
    header: "Accept / Content-Type",
    detail:
      "Negotiate and describe MIME types. Always set Content-Type to match your payload (e.g., application/json).",
  },
  {
    header: "Authorization",
    detail:
      "Carries credentials for protected endpoints. Prefer bearer tokens over cookies for APIs.",
  },
  {
    header: "Cache-Control",
    detail:
      "Defines caching policies (e.g., no-cache, max-age). Critical for performance and consistency.",
  },
  {
    header: "Content-Length / Transfer-Encoding",
    detail:
      "Describe body size or streaming strategy. Chunked encoding allows servers to start sending before knowing total size.",
  },
  {
    header: "Set-Cookie",
    detail:
      "Stores session or stateful data. Combine with HttpOnly, Secure, and SameSite attributes to mitigate attacks.",
  },
];
