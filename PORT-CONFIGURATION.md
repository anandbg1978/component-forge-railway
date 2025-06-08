# Port Configuration Summary

## 🔌 **Current Port Assignments**

### Your Main Application
- **Port 5173**: React/Vite development server (your AI Agents Platform)

### Rowboat Services (Docker Containers)
- **Port 3001**: Rowboat main web interface (external → container:3000)
- **Port 3002**: Rowboat copilot service (external → container:3002)  
- **Port 3003**: Rowboat agents API (external → container:3001)

### Supporting Services
- **Port 6333**: Qdrant vector database
- **Port 6379**: Redis cache
- **Port 27017**: MongoDB database
- **Port 8000**: Documentation (when enabled)

### Optional/Experimental Services (Disabled by Default)
- **Port 3005**: Tools webhook (commented out)
- **Port 3006**: Chat widget (commented out)
- **Port 4010**: Twilio handler (commented out)

## 🔄 **Service Communication**

### Internal Docker Network Communication
All services communicate internally using container ports:
- `rowboat` → `rowboat_agents`: `http://rowboat_agents:3001` ✅
- `rowboat` → `copilot`: `http://copilot:3002` ✅
- `rowboat` → `qdrant`: `http://qdrant:6333` ✅
- `rowboat` → `redis`: `redis://redis:6379` ✅
- `rowboat` → `mongo`: `mongodb://mongo:27017/rowboat` ✅

### External Access
- **Your App**: http://localhost:5173
- **Rowboat UI**: http://localhost:3001
- **Rowboat API**: http://localhost:3003/api (if needed)
- **Copilot API**: http://localhost:3002/api (if needed)

## ⚡ **Port Conflict Resolution**

### Changes Made from Default Rowboat
1. **Main Rowboat**: `3000 → 3001` (to avoid conflict with common dev servers)
2. **Agents API**: `3001 → 3003` (to free up 3001 for main Rowboat)
3. **Copilot**: `3002` (unchanged, no conflict)

### Verification
```bash
# Check if ports are available before starting
lsof -i :3001 -i :3002 -i :3003

# Should return empty if ports are free
```

## 🛠 **If You Need to Change Ports**

### To change Rowboat main port (currently 3001):
1. Update `rowboat/docker-compose.yml`:
   ```yaml
   ports:
     - "NEW_PORT:3000"  # Change NEW_PORT to desired port
   ```
2. Update `src/components/RowboatPage.tsx`:
   ```typescript
   fetch('http://localhost:NEW_PORT'  // Update port check
   ```
3. Update `README-ROWBOAT-INTEGRATION.md` with new port

### To change other service ports:
Follow similar pattern in `docker-compose.yml` - only change the external port (left side of colon).

## 🚨 **Common Port Conflicts**

### If you get port conflicts:
1. **Port 3001 (Node.js/Express)**: Common for development servers
2. **Port 3002**: Less common, usually safe  
3. **Port 3003**: Rarely used, should be safe

### Solutions:
- Use `lsof -i :PORT` to identify what's using the port
- Kill the conflicting process: `kill -9 PID`
- Or change Rowboat ports as described above

## ✅ **Current Status**
- ✅ No port conflicts detected
- ✅ All services properly configured
- ✅ Internal communication verified
- ✅ External access points documented

## 🔧 **Testing Port Configuration**

```bash
# Test main app
curl -I http://localhost:5173

# Test Rowboat (after starting)
curl -I http://localhost:3001

# Check all ports at once
for port in 5173 3001 3002 3003; do
  echo "Testing port $port:"
  curl -s -I http://localhost:$port | head -1 || echo "Port $port not responding"
done
``` 