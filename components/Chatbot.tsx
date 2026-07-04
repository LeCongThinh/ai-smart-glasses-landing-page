"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Bot, LoaderCircle, MessageCircle, Send, Sparkles, X } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const initialMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I’m the VisionAI product advisor. Ask me about features, specifications, battery life, or availability.",
};

const suggestions = ["How long does the battery last?", "Tell me about translation", "When is VisionAI available?"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function sendMessage(content: string) {
    const cleanContent = content.trim();
    if (!cleanContent || loading) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: "user", content: cleanContent };
    const nextMessages = [...messages, userMessage].slice(-10);
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content: messageContent }) => ({ role, content: messageContent })),
        }),
      });
      const payload = (await response.json()) as { reply?: string; message?: string };
      if (!response.ok || !payload.reply) throw new Error(payload.message ?? "Unable to get a response.");

      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), role: "assistant", content: payload.reply as string },
      ]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="fixed bottom-5 right-4 z-[75] sm:bottom-6 sm:right-6">
      <section
        role="dialog"
        aria-modal="false"
        aria-labelledby="chatbot-title"
        aria-hidden={!open}
        className={`absolute bottom-16 right-0 flex h-[min(600px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[390px] origin-bottom-right flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur-2xl transition duration-300 dark:border-white/10 dark:bg-[#0b1124]/95 ${open ? "visible scale-100 opacity-100" : "invisible pointer-events-none scale-95 opacity-0"}`}
      >
        <header className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-600 px-5 py-4 text-white">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
            <Bot aria-hidden="true" size={21} />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-blue-600 bg-emerald-400" />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="chatbot-title" className="font-bold">VisionAI Advisor</h2>
            <p className="text-xs text-blue-100">Product support · Online</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="rounded-full p-2 text-blue-100 transition hover:bg-white/15 hover:text-white"
          >
            <X aria-hidden="true" size={19} />
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50/70 p-4 dark:bg-slate-950/30" aria-live="polite">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "rounded-br-md bg-blue-600 text-white"
                    : "rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => void sendMessage(suggestion)}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-left text-xs font-medium text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-300 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                <LoaderCircle aria-hidden="true" className="animate-spin text-blue-500" size={16} />
                VisionAI is thinking…
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-[#0b1124]">
          {error && <p role="alert" className="mb-2 px-1 text-xs text-rose-600 dark:text-rose-300">{error}</p>}
          <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-400/10 dark:border-white/10 dark:bg-white/5">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, 1_000))}
              onKeyDown={handleKeyDown}
              rows={1}
              maxLength={1_000}
              placeholder="Ask about VisionAI…"
              aria-label="Message VisionAI Advisor"
              className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send aria-hidden="true" size={17} />
            </button>
          </div>
          <p className="mt-2 flex items-center justify-center gap-1 text-[10px] text-slate-400">
            <Sparkles aria-hidden="true" size={11} /> AI responses may contain mistakes.
          </p>
        </form>
      </section>

      <button
        type="button"
        onClick={() => {
          setOpen((current) => !current);
          window.setTimeout(() => inputRef.current?.focus(), 200);
        }}
        aria-label={open ? "Close VisionAI chat" : "Open VisionAI chat"}
        aria-expanded={open}
        data-engagement="chatbot-toggle"
        className="group relative ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_12px_35px_rgba(37,99,235,0.4)] transition hover:-translate-y-1 hover:bg-blue-500 active:scale-95"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-500/30 motion-reduce:hidden" />
        {open ? <X aria-hidden="true" size={23} /> : <MessageCircle aria-hidden="true" size={24} />}
      </button>
    </div>
  );
}
