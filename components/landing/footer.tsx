import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  workshops: [
    { label: "Topics", href: "#workshops" },
    { label: "What to Expect", href: "#experience" },
    { label: "What You'll Learn", href: "#outcomes" },
  ],
  forYou: [
    { label: "Students", href: "#for-students" },
    { label: "Parents", href: "#for-students" },
    { label: "Educators", href: "#for-students" },
  ],
  connect: [
    { label: "Contact", href: "#contact" },
    { label: "Email Us", href: "mailto:info@lightspeedoptics.ca" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/lightspeed-logo.png"
                  alt="Lightspeed Optical Workshops"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <div>
                  <span className="text-base font-semibold tracking-tight text-foreground">
                    Lightspeed
                  </span>
                  <span className="ml-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Optical
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                Hands-on workshops helping students discover the fascinating 
                science of light and optics.
              </p>
              
              {/* Contact info */}
              <div className="mt-5 space-y-1.5">
                <p className="text-sm text-muted-foreground">
                  <a 
                    href="mailto:info@lightspeedoptics.ca" 
                    className="hover:text-foreground transition-colors"
                  >
                    info@lightspeedoptics.ca
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Ottawa, Ontario
                </p>
              </div>
            </div>

            {/* Workshops links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Workshops
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.workshops.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For You links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                For You
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.forYou.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Future student portal placeholder */}
              <div className="mt-6 p-3 rounded-lg border border-dashed border-border">
                <p className="text-xs text-muted-foreground">
                  Student learning portal coming soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lightspeed Optical Workshops. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
