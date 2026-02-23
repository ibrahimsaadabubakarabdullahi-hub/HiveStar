'use client';
import { useChat } from '@ai-sdk/react';
import { Send, User, Sparkles } from 'lucide-react';

export default function HiveStar() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="flex flex-col min-h-screen bg-amber-50/20 text-slate-900 font-sans">
      <header className="p-4 bg-white border-b border-amber-100 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐝</span>
          <h1 className="font-black text-xl tracking-tight text-amber-900">HiveStar</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 max-w-2xl mx-auto w-full space-y-4 pb-32">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${m.role === 'user' ? 'bg-amber-500 text-white' : 'bg-white border border-amber-100'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </main>

      <footer className="fixed bottom-0 w-full p-4 bg-gradient-to-t from-white to-transparent">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative">
          <input
            className="w-full p-4 rounded-xl border-2 border-amber-200 focus:border-amber-500 outline-none shadow-lg text-black"
            value={input}
            placeholder="Talk to the hive..."
            onChange={handleInputChange}
          />
          <button type="submit" disabled={isLoading} className="absolute right-3 top-3 bg-amber-500 p-2 rounded-lg text-white">
            <Send size={20} />
          </button>
        </form>
      </footer>
    </div>
  );
      }
          
