import React from "react";

export const HowTo = () => {
  return (
    <div className="p-6 border-2 border-dashed border-border container px-4 py-8 max-w-2xl mx-auto my-8">
      <h1 className="text-2xl mb-6">
        How to Use Model Context Protocol (MCP) in Cursor
      </h1>

      <section className="mb-6">
        <h2 className="text-xl mb-3">What is MCP?</h2>
        <p className="text-[#878787]">
          Model Context Protocol (MCP) is an open protocol that allows you to
          provide custom tools to agentic LLMs (Large Language Models) in
          Cursor&apos;s Composer feature.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-3">Installation Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-[#878787]">
            <span className="font-medium">Open Cursor Settings</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>Navigate to Cursor Settings &gt; Features &gt; MCP</li>
              <li>Click the &quot;+ Add New MCP Server&quot; button</li>
            </ul>
          </li>
          <li className="text-[#878787]">
            <span className="font-medium">Configure the Server</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>Name: Give your server a nickname</li>
              <li>Type: Select the transport type (stdio or sse)</li>
              <li>
                Command/URL: Enter either:
                <ul className="ml-6 mt-1">
                  <li>For SSE servers: The URL of the SSE endpoint</li>
                  <li>
                    For stdio servers: A valid shell command to run the server
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-3">Example Configurations</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">
              For stdio Server (Weather Server Example):
            </h3>
            <code className="p-2 block text-[#878787] font-mono border border-border text-sm">
              Command: node
              ~/mcp-quickstart/weather-server-typescript/build/index.js
            </code>
          </div>
          <div>
            <h3 className="font-medium mb-2">For SSE Server:</h3>
            <code className="p-2 block text-[#878787] font-mono border border-border text-sm">
              URL: http://example.com:8000/sse
            </code>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-3">Using MCP Tools</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li className="text-[#878787]">
            <span className="font-medium">Tool Availability</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>
                After adding a server, it will appear in your MCP servers list
              </li>
              <li>
                You may need to click the refresh button to populate the tool
                list
              </li>
            </ul>
          </li>
          <li className="text-[#878787]">
            <span className="font-medium">Using Tools in Composer</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>
                The Composer Agent automatically uses MCP tools when relevant
              </li>
              <li>
                You can explicitly prompt tool usage by:
                <ul className="ml-6 mt-1">
                  <li>Referring to the tool by name</li>
                  <li>Describing the tool&apos;s function</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="text-[#878787]">
            <span className="font-medium">Tool Execution Process</span>
            <ul className="ml-6 mt-1 list-disc">
              <li>Displays a message in chat requesting approval</li>
              <li>Shows tool call arguments (expandable)</li>
              <li>Executes the tool upon user approval</li>
              <li>Displays the tool&apos;s response in the chat</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl mb-3">Important Notes</h2>
        <ul className="list-disc list-inside space-y-2 text-[#878787]">
          <li>MCP tools may not work with all models</li>
          <li>MCP tools are only available to the Agent in Composer</li>
          <li>
            For servers requiring environment variables, create a wrapper script
            that sets the variables before running the server
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HowTo;
