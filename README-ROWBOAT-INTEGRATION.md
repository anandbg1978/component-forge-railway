# AI Agency + Rowboat Integration

This project integrates [Rowboat](https://github.com/rowboatlabs/rowboat) - an AI-powered multi-agent builder - directly into your AI Agents Platform landing page.

## 🚀 Quick Start

### 1. Set up your environment

First, set your OpenAI API key:

```bash
export OPENAI_API_KEY=your-openai-api-key
```

### 2. Start your main application

In one terminal, start the main React app:

```bash
npm run dev
```

This will start your main app on http://localhost:5173

### 3. Start Rowboat

In another terminal, start Rowboat:

```bash
./start-rowboat.sh
```

This will start Rowboat on http://localhost:3001

### 4. Use the integration

1. Open your browser and go to http://localhost:5173
2. Click the **"Start Building Your Agent"** button
3. You'll be taken to the Rowboat interface where you can build AI agents

## 🔧 How it works

- The main landing page is a React app built with Vite running on port 5173
- Rowboat runs as a separate Next.js app in Docker containers on port 3001
- The "Start Building Your Agent" button now navigates to `/rowboat` which either:
  - Shows setup instructions if Rowboat isn't running
  - Embeds the Rowboat interface in an iframe if it is running
  - Provides options to open Rowboat in a new tab

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── RowboatPage.tsx          # Rowboat integration page
│   │   └── generated/               # Your existing components
│   └── App.tsx                      # Updated with routing
├── rowboat/                         # Cloned Rowboat repository
├── start-rowboat.sh                 # Helper script to start Rowboat
└── README-ROWBOAT-INTEGRATION.md    # This file
```

## 🛠 Configuration

### Port Configuration

- Main app: http://localhost:5173 (Vite default)
- Rowboat: http://localhost:3001 (modified from default 3000)
- Rowboat Copilot: http://localhost:3002 (unchanged)
- Rowboat Agents API: http://localhost:3003 (modified from default 3001)

**Port Conflict Prevention**: The startup script automatically checks for conflicts on ports 3001, 3002, and 3003 before starting. See `PORT-CONFIGURATION.md` for detailed port information.

### Customization

The integration automatically detects if Rowboat is running and provides:

1. **Setup instructions** if Rowboat is not running
2. **Embedded interface** if Rowboat is running
3. **Fallback options** to open in new tab

## 🔍 Troubleshooting

### Rowboat won't start

1. Make sure Docker is running
2. Ensure OPENAI_API_KEY is set
3. Check that ports 3001 and 3003 are not in use
4. Try restarting Docker if containers are stuck

### Integration not working

1. Ensure both apps are running on their respective ports
2. Check browser console for any CORS or connection errors
3. Try refreshing the page or restarting both services

### Port conflicts

If you need to change ports:

1. Update `rowboat/docker-compose.yml` port mappings
2. Update the port checks in `src/components/RowboatPage.tsx`
3. Update this README with the new ports

## 📚 Additional Resources

- [Rowboat Documentation](https://docs.rowboatlabs.com/)
- [Rowboat GitHub Repository](https://github.com/rowboatlabs/rowboat)
- [OpenAI API Documentation](https://platform.openai.com/docs)

## 🎯 Features

With this integration, you can:

- ✨ Build multi-agent workflows from ideas using Rowboat's copilot
- 🌐 Connect MCP servers and import tools
- 📞 Integrate agents into your app using HTTP API or Python SDK
- 📁 Use RAG support including file uploads and URL scraping
- 🔧 Use custom LLM providers like OpenRouter and LiteLLM

Happy building! 🚣‍♀️ 