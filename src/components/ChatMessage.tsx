import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  if (role === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end mb-6"
      >
        <div className="max-w-[80%] bg-secondary rounded-2xl rounded-br-sm px-5 py-4">
          <p className="text-secondary-foreground text-sm leading-relaxed">{content}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-primary font-serif text-sm font-bold tracking-wide uppercase">⚖️ The Verdictor</span>
      </div>
      <div className="prose prose-invert prose-sm max-w-none prose-headings:font-serif prose-headings:text-primary prose-strong:text-primary prose-p:text-foreground/90 prose-p:leading-relaxed">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
