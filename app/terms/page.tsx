import { siteConfig } from '@/config/site';

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section style={{backgroundColor: '#f2f4f6'}} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Terms & Conditions</h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-700">
                By accessing or using the services of {siteConfig.brandName}, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Investment Advisory Services</h2>
              <p className="text-gray-700 mb-4">
                {siteConfig.brandName} provides investment advisory services to qualified clients. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Personalized investment strategy and portfolio guidance</li>
                <li>Portfolio construction and risk management advisory</li>
                <li>Ongoing portfolio monitoring and rebalancing recommendations</li>
                <li>Wealth preservation and financial planning consultation</li>
              </ul>
              <p className="text-gray-700 mt-4">
                All investment advisory services are provided subject to a written advisory agreement between you and {siteConfig.brandName}.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">No Guarantee of Results</h2>
              <p className="text-gray-700">
                Investment advisory services involve risk, and past performance is not indicative of future results. {siteConfig.brandName} does not guarantee any specific investment returns or outcomes. All investments carry the risk of loss, and you may lose some or all of your invested capital.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Fiduciary Duty</h2>
              <p className="text-gray-700">
                {siteConfig.brandName} acts as a fiduciary to our advisory clients, meaning we are legally obligated to act in your best interest when providing investment advice. We will provide advice that is suitable for your financial situation, investment objectives, and risk tolerance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Fees and Compensation</h2>
              <p className="text-gray-700">
                Our fee structure will be clearly outlined in your advisory agreement. Fees may be based on assets under management, hourly rates, or fixed fees, depending on the services provided. All fees will be disclosed to you before you engage our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">SMS/Text Messaging Terms</h2>
              <p className="text-gray-700 mb-4">
                If you opt in to receive text messages from {siteConfig.brandName}, the following terms apply:
              </p>
              
              <div className="bg-gray-50 border-l-4 border-black p-6 my-6">
                <h3 className="text-xl font-semibold mb-4">SMS Program Details</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Program Name:</strong> {siteConfig.brandName} {siteConfig.smsUseCase}</li>
                  <li><strong>Use Case:</strong> {siteConfig.smsUseCase}</li>
                  <li><strong>Message Types:</strong> You will receive text messages related to {siteConfig.smsUseCase.toLowerCase()}, including:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Appointment reminders and confirmations</li>
                      <li>Account notifications and updates</li>
                      <li>Important service announcements</li>
                      <li>Customer support communications</li>
                    </ul>
                  </li>
                  <li><strong>Message Frequency:</strong> Message frequency varies based on your account activity and preferences. You may receive up to 10 messages per month.</li>
                  <li><strong>Cost:</strong> Message and data rates may apply. Check with your mobile carrier for details on your messaging plan.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opt-In and Consent</h3>
              <p className="text-gray-700 mb-4">
                By opting in to receive text messages, you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Consent to receive {siteConfig.smsUseCase} text messages from {siteConfig.brandName}</li>
                <li>Confirm that you are the account holder or have authorization to opt in this phone number</li>
                <li>Agree that your consent is not a condition of purchasing any goods or services</li>
                <li>Understand that message and data rates may apply</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Opt-Out Instructions</h3>
              <p className="text-gray-700 mb-4">
                You can opt out of receiving text messages at any time:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Text STOP:</strong> Reply STOP to any text message to unsubscribe</li>
                <li><strong>Confirmation:</strong> You will receive a confirmation message that you have been unsubscribed</li>
                <li><strong>Re-subscribe:</strong> To re-subscribe, text START or contact us directly</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Help and Support</h3>
              <p className="text-gray-700 mb-4">
                For help with text messages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Text HELP:</strong> Reply HELP to any text message for assistance</li>
                <li><strong>Contact Us:</strong> Email {siteConfig.supportEmail} or call {siteConfig.supportPhone}</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Supported Carriers</h3>
              <p className="text-gray-700 mb-4">
                Our SMS program is supported by major carriers including AT&T, T-Mobile, Verizon, Sprint, and others. Carriers are not liable for delayed or undelivered messages.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Privacy and Data</h3>
              <p className="text-gray-700 mb-4">
                <strong>No mobile information will be shared with third parties or affiliates.</strong> Your mobile number and text message data will be used solely for the purpose of providing {siteConfig.smsUseCase} communications. For more information, please review our <a href="/privacy" className="text-black hover:text-gray-700">Privacy Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
              <p className="text-gray-700">
                We maintain strict confidentiality of all client information in accordance with applicable laws and regulations. We will not disclose your personal or financial information to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Termination of Services</h2>
              <p className="text-gray-700">
                Either party may terminate the advisory relationship at any time with written notice. Upon termination, you will be responsible for any fees incurred up to the termination date, as outlined in your advisory agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                To the fullest extent permitted by law, {siteConfig.brandName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our liability is limited to the fees paid for our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, and software, is the property of {siteConfig.brandName} and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which {siteConfig.brandName} operates, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <p className="text-gray-700">
                Any disputes arising out of or related to these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, unless otherwise specified in your advisory agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. We will notify you of any material changes by posting the updated terms on this page and updating the "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms and Conditions, please contact us:
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
