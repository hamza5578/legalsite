import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FIRM_NAME, FIRM_PHONE, FIRM_EMAIL, FIRM_ADDRESS, PRACTICE_AREAS } from "@/lib/constants";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconTwitterX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socials = [
  { label: "LinkedIn",   href: "#", Icon: IconLinkedIn  },
  { label: "Twitter/X",  href: "#", Icon: IconTwitterX  },
  { label: "Facebook",   href: "#", Icon: IconFacebook  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark text-warm-300">
      <div className="h-px bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/images/logo_transparent.png"
                alt="Shafi Law Associates"
                width={690}
                height={441}
                className="h-16 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-warm-400 text-sm leading-relaxed mb-8">
              A premier Islamabad law firm delivering sophisticated legal counsel since{" "}
              <span className="text-warm-200">1999</span>. We represent individuals, corporations, and institutions with the precision and integrity that consequential matters demand.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-sm border border-warm-500/30 flex items-center justify-center text-warm-400 hover:text-gold hover:border-gold/50 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {PRACTICE_AREAS.map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/practice-areas/${slug}`}
                    className="group flex items-center gap-2 text-warm-400 text-sm hover:text-gold transition-colors duration-200">
                    <span className="block w-0 h-px bg-gold transition-all duration-300 group-hover:w-4 flex-shrink-0" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-warm-500 text-[11px] uppercase tracking-widest mb-1">Office</p>
                  <p className="text-warm-300 text-sm whitespace-pre-line leading-relaxed">{FIRM_ADDRESS}</p>
                </div>
              </li>
              <li>
                <a href={`tel:${FIRM_PHONE}`} className="flex items-start gap-3 group">
                  <Phone size={15} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-warm-500 text-[11px] uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-warm-300 text-sm group-hover:text-gold transition-colors duration-200">{FIRM_PHONE}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${FIRM_EMAIL}`} className="flex items-start gap-3 group">
                  <Mail size={15} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-warm-500 text-[11px] uppercase tracking-widest mb-1">Email</p>
                    <p className="text-warm-300 text-sm group-hover:text-gold transition-colors duration-200 break-all">{FIRM_EMAIL}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-warm-500 text-xs">&copy; {year}&nbsp;{FIRM_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-warm-500 text-xs">
            <Link href="#" className="hover:text-gold transition-colors duration-200">Privacy Policy</Link>
            <span className="text-warm-600">|</span>
            <Link href="#" className="hover:text-gold transition-colors duration-200">Terms of Use</Link>
            <span className="text-warm-600">|</span>
            <span>Attorney Advertising.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
