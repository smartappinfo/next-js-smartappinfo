"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-100 to-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <img
            src="/smartAppInfoLogo.webp"
            alt="SmartAppInfo Logo"
            className="h-14 w-auto mb-4"
          />

          <p className="text-sm text-gray-600 leading-6">
            SmartAppInfo helps you discover trusted Android apps, reviews,
            guides, and useful resources for a better mobile experience.
          </p>

        
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about-us"
                className="hover:text-blue-700 transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="hover:text-blue-700 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Policies
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-blue-700 transition"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms-of-service"
                className="hover:text-blue-700 transition"
              >
                Terms of Service
              </Link>
            </li>

            <li>
              <Link
                href="/disclaimer"
                className="hover:text-blue-700 transition"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/apps/entertainment"
                className="hover:text-blue-700 transition"
              >
                Entertainment Apps
              </Link>
            </li>

            <li>
              <Link
                href="/apps/finance"
                className="hover:text-blue-700 transition"
              >
                Finance Apps
              </Link>
            </li>

            <li>
              <Link
                href="/apps/tools"
                className="hover:text-blue-700 transition"
              >
                Tools Apps
              </Link>
            </li>

            <li>
              <Link
                href="/apps/games"
                className="hover:text-blue-700 transition"
              >
                Games
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} SmartAppInfo. All rights reserved.</span>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-blue-700">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-700">
              Terms
            </Link>
            <Link href="/contact-us" className="hover:text-blue-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;