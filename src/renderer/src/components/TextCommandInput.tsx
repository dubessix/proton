import { useState, useRef } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

interface TextCommandInputProps {
  onSendMessage: (message: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
}

export default function TextCommandInput({
  onSendMessage,
  isDisabled = false,
  placeholder = "TRANSMIT COMMAND...",
}: TextCommandInputProps) {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (message.trim() && !isDisabled) {
      onSendMessage(message.trim());
      setMessage("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.split("\n").length <= 3) {
      setMessage(value);
    }
  };

  return (
    <div
      className={`flex flex-col gap-2 transition-all duration-300 ${
        isFocused ? "ring-2 ring-emerald-500/50" : ""
      }`}
    >
      <div className="flex items-end gap-2 bg-black/40 backdrop-blur-xl border border-white/5 rounded-xl p-3 shadow-xl hover:border-white/10 transition-all duration-300">
        <textarea
          ref={inputRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={isDisabled}
          placeholder={placeholder}
          rows={1}
          className="flex-1 bg-transparent text-zinc-100 text-sm font-mono placeholder-zinc-600 outline-none resize-none max-h-20 scrollbar-small"
          style={{
            height: "auto",
            minHeight: "40px",
            maxHeight: "80px",
          }}
        />

        <button
          onClick={handleSend}
          disabled={isDisabled || !message.trim()}
          className={`flex-shrink-0 p-2.5 rounded-lg transition-all duration-300 font-bold tracking-wider flex items-center gap-2 ${
            isDisabled || !message.trim()
              ? "bg-zinc-800/30 text-zinc-600 cursor-not-allowed"
              : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
          }`}
          title="Send (Enter) | Newline (Shift+Enter)"
        >
          <RiSendPlaneLine size={16} />
        </button>
      </div>

      <div className="flex justify-between items-center px-2">
        <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
          ENTER TO SEND • SHIFT+ENTER FOR NEWLINE
        </span>
        <span
          className={`text-[8px] font-mono tracking-widest ${
            message.length > 0 ? "text-emerald-500/60" : "text-zinc-700"
          }`}
        >
          {message.length}
        </span>
      </div>
    </div>
  );
}
