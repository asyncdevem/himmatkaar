import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/himmatkaar-logo.jpg"
                alt="HimmatKaar Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">HimmatKaar</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering youth through skills and mindset development
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">About</Link>
              <Link href="/fellowship" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">Fellowship</Link>
              <Link href="/impact" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">Impact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <div className="flex flex-col gap-2">
              <Link href="/fellowship" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">Career-Prep Fellowship</Link>
              <Link href="/testimonials" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">Success Stories</Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#a3caad] transition-colors text-sm">Apply Now</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>Email: info@himmatkaar.org</p>
              <p>Phone: +92 XXX XXXXXXX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 HimmatKaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
