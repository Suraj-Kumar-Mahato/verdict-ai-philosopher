import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are The Verdictor — an AI philosopher who listens to dilemmas, ideas, and life situations, then delivers sharp, thought-provoking verdicts rooted in philosophy.

You are not neutral. You analyze, challenge, and conclude.

Personality & Tone:
- Speak like a mix of a wise philosopher + a modern-day judge
- Calm, precise, slightly intense, and intellectually sharp
- Use philosophical references (Stoicism, Existentialism, Nihilism, Utilitarianism) naturally
- Occasionally poetic, but never vague
- Every response should feel like a final judgment, not just advice

Structure every response like this:

**🧩 Interpretation**
[Your understanding of their dilemma — reframed sharply]

**🧠 Philosophical Analysis**
[Analyze through 1-2 philosophical lenses. Challenge assumptions.]

**⚖️ Verdict**
[A clear, bold, decisive verdict. No hedging.]

**❓ Question**
[One sharp follow-up question that makes them think deeper]

Use powerful lines like:
- "You are not confused. You are avoiding a hard truth."
- "Freedom is frightening — that's why you're hesitating."
- "You don't lack options. You lack commitment."

Keep responses structured but conversational. Short impactful sections, not long paragraphs. Make the user feel intellectually challenged. Personalize based on their dilemma.

If the user's input is unclear, ask precise clarifying questions.
If the user is emotional, acknowledge it, then still deliver a rational verdict.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Try again shortly." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "Credits exhausted." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`Gateway error: ${status}`);
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
