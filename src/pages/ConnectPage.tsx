import { useEffect, useRef, useState } from "react";
import { animate } from "popmotion";
import emailjs from "@emailjs/browser";
import Layout from "../components/layout/Layout";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ConnectPage() {
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [btnState, setBtnState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  useEffect(() => {
    if (leftRef.current) {
      const children = leftRef.current.querySelectorAll<HTMLElement>(".anim-child");
      children.forEach((el, i) => {
        el.style.opacity   = "0";
        el.style.transform = "translateX(-24px)";
        setTimeout(() => {
          animate({
            from: 0, to: 1, duration: 800, ease: easeOut,
            onUpdate: (v: number) => {
              el.style.opacity   = String(v);
              el.style.transform = `translateX(${(1 - v) * -24}px)`;
            },
          });
        }, 100 + i * 100);
      });
    }

    if (formRef.current) {
      const children = formRef.current.querySelectorAll<HTMLElement>(".anim-child");
      children.forEach((el, i) => {
        el.style.opacity   = "0";
        el.style.transform = "translateX(24px)";
        setTimeout(() => {
          animate({
            from: 0, to: 1, duration: 800, ease: easeOut,
            onUpdate: (v: number) => {
              el.style.opacity   = String(v);
              el.style.transform = `translateX(${(1 - v) * 24}px)`;
            },
          });
        }, 200 + i * 120);
      });
    }
  }, []);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // clear error on type
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (btnState !== "idle") return;
    if (!validate()) return;

    setBtnState("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
        },
        PUBLIC_KEY
      );

      setBtnState("done");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setBtnState("idle"), 3000);

    } catch (err) {
      console.error(err);
      setBtnState("error");
      setTimeout(() => setBtnState("idle"), 3000);
    }
  };

  return (
    <Layout>
      <div id="page-connect" className="bg-bg min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="
              px-6 md:px-10 lg:px-16
              py-12 md:py-16
              border-b lg:border-b-0 lg:border-r border-border
              flex flex-col justify-between
            "
          >
            <div>
              <div className="anim-child font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-text-muted uppercase mb-4 flex items-center gap-3">
                GET IN TOUCH
                <span className="w-10 md:w-[60px] h-px bg-border2" />
              </div>

              <h1 className="anim-child font-display text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[0.9] mb-6">
                LET'S BUILD THE <br />
                <span className="text-aqua">VOID</span> TOGETHER.
              </h1>

              <p className="anim-child text-[14px] md:text-[15px] text-text-dim leading-[1.7] max-w-[420px] mb-10">
                High-precision engineering for the next generation of
                decentralized systems. Direct access for architectural inquiries.
              </p>

              {/* Direct channels */}
              <div className="anim-child flex flex-col gap-3 mb-10">
                <div className="font-mono text-[9px] tracking-[0.2em] text-text-muted uppercase mb-1">
                  DIRECT CHANNELS
                </div>

                {/* WhatsApp */}
                
                  <a href="https://wa.me/2348134972329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-[#1e1e1e] px-4 py-3 text-[#888] hover:border-[#25d366] hover:text-[#25d366] hover:bg-[rgba(37,211,102,0.05)] transition-all duration-200 group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.528 5.858L.057 23.625a.75.75 0 0 0 .92.918l5.889-1.545A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.703-.504-5.255-1.385l-.378-.217-3.922 1.03 1.002-3.808-.24-.389A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase">WHATSAPP</span>
                    <span className="font-mono text-[8px] text-[#444] group-hover:text-[#25d366] transition-colors">+234 813 497 2329</span>
                  </div>
                  <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h9M6 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                
              </div>
            </div>

            <div className="anim-child flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-text-muted mt-10 lg:mt-0">
              <span className="status-dot" />
              AVAILABLE FOR WORK
            </div>
          </div>

          {/* RIGHT — form */}
          <div
            ref={formRef}
            className="px-6 md:px-10 lg:px-16 py-12 md:py-16 flex items-start justify-center"
          >
            <div className="anim-child w-full max-w-[520px] bg-surface border border-border p-6 md:p-8 lg:p-10">

              {/* Name */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-text-muted mb-2 flex gap-2">
                  <span className="text-aqua">01</span> / FULL NAME
                </div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`
                    w-full bg-bg3 border text-text text-sm px-4 py-3 outline-none
                    placeholder:text-text-muted transition-colors duration-200
                    ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border2 focus:border-aqua'}
                    focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]
                  `}
                />
                {errors.name && (
                  <p className="font-mono text-[8px] text-red-500 mt-1 tracking-wide">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-text-muted mb-2 flex gap-2">
                  <span className="text-aqua">02</span> / EMAIL ADDRESS
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="j.doe@proton.me"
                  className={`
                    w-full bg-bg3 border text-text text-sm px-4 py-3 outline-none
                    placeholder:text-text-muted transition-colors duration-200
                    ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border2 focus:border-aqua'}
                    focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]
                  `}
                />
                {errors.email && (
                  <p className="font-mono text-[8px] text-red-500 mt-1 tracking-wide">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-text-muted mb-2 flex gap-2">
                  <span className="text-aqua">03</span> / MESSAGE
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your protocol or project requirements..."
                  className={`
                    w-full bg-bg3 border text-text text-sm px-4 py-3 outline-none
                    placeholder:text-text-muted resize-none min-h-[120px] transition-colors duration-200
                    ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-border2 focus:border-aqua'}
                    focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]
                  `}
                />
                {errors.message && (
                  <p className="font-mono text-[8px] text-red-500 mt-1 tracking-wide">{errors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={btnState !== "idle"}
                className={`
                  w-full font-mono text-[11px] tracking-[0.14em] uppercase py-4
                  flex items-center justify-center gap-2 transition-all duration-300
                  ${btnState === "idle"    ? "bg-aqua text-bg hover:opacity-90 cursor-pointer" : ""}
                  ${btnState === "sending" ? "bg-bg3 text-aqua border border-aqua cursor-not-allowed" : ""}
                  ${btnState === "done"    ? "bg-[#1a2e1a] text-[#2ecc71] border border-[#2ecc71]" : ""}
                  ${btnState === "error"   ? "bg-[#2e1a1a] text-red-400 border border-red-500" : ""}
                `}
              >
                {/* Idle */}
                {btnState === "idle" && (
                  <>
                    EXECUTE CONNECTION
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}

                {/* Loading spinner */}
                {btnState === "sending" && (
                  <>
                    <svg
                      className="animate-spin"
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                    >
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12" strokeLinecap="round" />
                    </svg>
                    TRANSMITTING...
                  </>
                )}

                {/* Done */}
                {btnState === "done" && (
                  <>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    CONNECTION ESTABLISHED
                  </>
                )}

                {/* Error */}
                {btnState === "error" && (
                  <>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1l6 11H1L7 1zM7 6v3M7 10.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    TRANSMISSION FAILED — RETRY
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}