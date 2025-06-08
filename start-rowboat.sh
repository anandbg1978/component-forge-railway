#!/bin/bash

echo "🚣 Starting Rowboat AI Agent Builder..."
echo ""

# Load environment variables from .env file if it exists
if [ -f "rowboat/.env" ]; then
    echo "📝 Loading environment variables from rowboat/.env"
    export $(grep -v '^#' rowboat/.env | xargs)
elif [ -f ".env" ]; then
    echo "📝 Loading environment variables from .env"
    export $(grep -v '^#' .env | xargs)
fi

# Check if OPENAI_API_KEY is set
if [ -z "$OPENAI_API_KEY" ]; then
    echo "❌ Error: OPENAI_API_KEY environment variable is not set!"
    echo ""
    echo "Please set your OpenAI API key in rowboat/.env or .env file:"
    echo "OPENAI_API_KEY=your-openai-api-key"
    echo ""
    exit 1
fi

echo "✅ OpenAI API Key is set"

# Check for port conflicts
echo "🔍 Checking for port conflicts..."
CONFLICTS=""

for port in 3001 3002 3003; do
    if lsof -i :$port >/dev/null 2>&1; then
        PROCESS=$(lsof -i :$port | tail -1 | awk '{print $1}')
        CONFLICTS="$CONFLICTS\n❌ Port $port is in use by: $PROCESS"
    else
        echo "✅ Port $port is available"
    fi
done

if [ ! -z "$CONFLICTS" ]; then
    echo "🚨 Port conflicts detected:"
    echo -e "$CONFLICTS"
    echo ""
    echo "Please stop the conflicting processes or see PORT-CONFIGURATION.md for port change instructions."
    exit 1
fi

# Change to rowboat directory and start
cd rowboat

echo "🔧 Starting Rowboat services..."
./start.sh

echo ""
echo "🎉 Rowboat should now be running on http://localhost:3001"
echo "💡 You can now click 'Start Building Your Agent' in your main app!" 