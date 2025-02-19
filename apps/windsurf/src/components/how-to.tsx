import React from "react";

export const HowTo = () => {
  return (
    <div className="p-6 border-2 border-dashed border-border container px-4 py-8 max-w-2xl mx-auto my-8">
      <h1 className="text-2xl mb-6">
        How to Use Model Context Protocol (MCP) in Codeium
      </h1>

      <section className="mb-6">
        <h2 className="text-xl mb-3">What is MCP?</h2>
        <p className="text-[#878787]">
          Model Context Protocol (MCP) is a protocol that enables LLMs to access
          custom tools and services. An MCP client (Cascade, in this case) can
          make requests to MCP servers to access tools that they provide.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-3">Configuration Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-[#878787]">
            <span className="font-medium">Create Configuration File</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>Create a JSON file at ~/.codeium/windsurf/mcp_config.json</li>
              <li>
                Quick access: Click the hammer icon in the Cascade toolbar, then
                click "Configure"
              </li>
            </ul>
          </li>
          <li className="text-[#878787]">
            <span className="font-medium">Configure MCP Servers</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>Specify servers in the JSON configuration</li>
              <li>Include necessary arguments and environment variables</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-3">Example Configuration</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Google Maps Server Example:</h3>
            <code className="p-2 block text-[#878787] font-mono border border-border text-sm">
              {`{
  "mcpServers": {
    "google-maps": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-google-maps"
      ],
      "env": {
        "GOOGLE_MAPS_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}`}
            </code>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-3">Important Notes</h2>
        <ul className="list-disc list-inside space-y-2 text-[#878787]">
          <li>This feature is only available for paying individual users</li>
          <li>
            MCP tool calls will consume credits regardless of success or failure
          </li>
          <li>Only tools are supported (not prompts or resources)</li>
          <li>Tools that output images are not supported</li>
          <li>Only servers using the stdio transport type are supported</li>
        </ul>
      </section>
    </div>
  );
};

export default HowTo;
