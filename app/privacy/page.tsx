import { siteConfig } from '@/config/site';

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section style={{backgroundColor: '#f2f4f6'}} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Privacy Policy</h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700">
                {siteConfig.brandName} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide to us.</li>
                <li><strong>Financial Information:</strong> Information related to your investment goals, risk tolerance, and financial situation when you engage our advisory services.</li>
                <li><strong>Communication Data:</strong> Records of your communications with us, including emails, phone calls, and text messages.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide, operate, and maintain our investment advisory services</li>
                <li>Communicate with you about your account, appointments, and our services</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">SMS/Text Messaging</h2>
              <p className="text-gray-700 mb-4">
                If you opt in to receive text messages from us, the following terms apply:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>By opting in, you consent to receive {siteConfig.smsUseCase} text messages from {siteConfig.brandName}</li>
                <li>Message frequency varies based on your account activity and preferences</li>
                <li>Message and data rates may apply</li>
                <li>You can opt out at any time by replying STOP to any text message</li>
                <li>Reply HELP for assistance</li>
                <li><strong>No mobile information will be shared with third parties or affiliates</strong></li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., technology providers, compliance services)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Important: No mobile information will be shared with third parties or affiliates.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to opt out of SMS messages by replying STOP</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700">
                We may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>SnowOwl Investments LLC</strong></p>
                <p className="text-gray-700">{siteConfig.address}</p>
                <p className="text-gray-700">Email: <a href={`mailto:${siteConfig.supportEmail}`} className="text-black hover:text-gray-700">{siteConfig.supportEmail}</a></p>
                <p className="text-gray-700">Phone: <a href={`tel:${siteConfig.supportPhone}`} className="text-black hover:text-gray-700">{siteConfig.supportPhone}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
