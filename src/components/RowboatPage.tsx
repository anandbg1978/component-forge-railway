import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Bot, ArrowLeft } from 'lucide-react';

interface RowboatPageProps {
  onBack?: () => void;
}

export default function RowboatPage({ onBack }: RowboatPageProps) {
  const [isRowboatRunning, setIsRowboatRunning] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if rowboat is running on port 3001
    const checkRowboatStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001', { 
          method: 'HEAD',
          mode: 'no-cors'
        });
        setIsRowboatRunning(true);
      } catch (error) {
        setIsRowboatRunning(false);
      } finally {
        setIsChecking(false);
      }
    };

    checkRowboatStatus();
    
    // Check every 5 seconds
    const interval = setInterval(checkRowboatStatus, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleOpenRowboat = () => {
    window.open('http://localhost:3001', '_blank');
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <Bot className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">Checking Rowboat Status...</h3>
            <p className="text-muted-foreground">Please wait while we check if Rowboat is running.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isRowboatRunning) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          {onBack && (
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Landing Page
            </Button>
          )}
          
          <Card className="w-full">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Welcome to Rowboat</CardTitle>
              <p className="text-muted-foreground mt-2">
                AI-powered multi-agent builder - Start building intelligent workflows in minutes
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Rowboat is not currently running
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  To start using Rowboat, please follow these steps:
                </p>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">1. Set your OpenAI API Key</h5>
                  <code className="bg-muted p-2 rounded text-sm block">
                    export OPENAI_API_KEY=your-openai-api-key
                  </code>
                </div>

                <div className="border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">2. Start Rowboat</h5>
                  <code className="bg-muted p-2 rounded text-sm block">
                    cd rowboat && ./start.sh
                  </code>
                  <p className="text-muted-foreground text-sm mt-2">
                    This will start Rowboat on port 3001 (different from your current app port 5173)
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">3. Access Rowboat</h5>
                  <p className="text-muted-foreground text-sm">
                    Once started, you can access Rowboat at{' '}
                    <code className="bg-muted px-1 rounded">http://localhost:3001</code>
                  </p>
                </div>
              </div>

              <div className="pt-4 text-center">
                <Button 
                  onClick={() => window.location.reload()}
                  className="mr-2"
                >
                  Refresh Status
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://docs.rowboatlabs.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {onBack && (
            <Button 
              variant="ghost" 
              onClick={onBack}
              size="sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            <span className="font-semibold">Rowboat AI Agent Builder</span>
          </div>
          
          <Button onClick={handleOpenRowboat} size="sm">
            <ExternalLink className="w-4 h-4 mr-2" />
            Open in New Tab
          </Button>
        </div>
      </div>
      
      <iframe
        src="http://localhost:3001"
        className="w-full h-screen border-0"
        title="Rowboat AI Agent Builder"
        style={{ height: 'calc(100vh - 73px)' }}
      />
    </div>
  );
} 