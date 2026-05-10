import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900">EduConsult.</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Fast-tracking your admission to top global universities with expert guidance and proven strategies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-600 hover:text-black">Home</Link>
              <Link href="/colleges" className="text-sm text-gray-600 hover:text-black">Colleges</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-black">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
            <p className="text-sm text-gray-600 mb-2">contact@educonsult.com</p>
            <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} EduConsult. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">Privacy Policy</span>
            <span className="text-xs text-gray-500">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}