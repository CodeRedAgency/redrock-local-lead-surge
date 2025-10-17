import { GeneralNavigation } from "@/components/GeneralNavigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SubContractorAgreement = () => {
  const [signatureData, setSignatureData] = useState({
    addressLine: '',
    city: '',
    state: '',
    zipCode: '',
    firstName: '',
    lastName: '',
    date: '',
    signatureName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignatureData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate signature name
    if (!signatureData.signatureName.trim()) {
      alert('Please type your full name to consent to this agreement.');
      return;
    }

    try {
      // Show loading state
      const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Submitting...';
      submitButton.disabled = true;
      
      // Create a formatted message with all agreement details
      const formattedMessage = `
SUB-CONTRACTOR AGREEMENT - SIGNED
===================================

CONTRACTOR INFORMATION:
----------------------
Full Name: ${signatureData.firstName} ${signatureData.lastName}
Address: ${signatureData.addressLine}
City: ${signatureData.city}
State: ${signatureData.state}
Zip Code: ${signatureData.zipCode}

AGREEMENT DETAILS:
-----------------
Agreement Date: ${signatureData.date}
Signed On: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}

TERMS AGREED TO:
---------------
✓ Independent contractor relationship with Red Rock Cleaning (Hero Industries LLC DBA Red Rock Cleaning)
✓ Part-time cleaning work arrangement
✓ Starting pay: $17-$20/hour (subject to change via written notice)
✓ Flexible days and hours based on client needs and contractor availability
✓ Contractor provides all cleaning materials, equipment, and tools as agreed
✓ No employer-employee relationship
✓ $50 withholding clause for client claims (shared cost $50-$500)
✓ Non-solicitation agreement: 18 months after termination
✓ No direct client contact information to be provided
✓ Weekly or bi-weekly payroll (calculated Friday, paid Monday/Tuesday)
✓ 14 days written notice required for termination by contractor
✓ Contractor can cancel without notice for nonperformance

IMPORTANT NOTES:
---------------
- Jobs will be assigned according to distance to the provided address
- Improper notice forfeits all monies due
- Poor workmanship resulting in customer cancellation forfeits last payment

CONSENT & SIGNATURE:
-------------------
By typing their name below, the contractor agrees to all terms and conditions of this agreement.
Signed by: ${signatureData.signatureName}

This is a legally binding agreement between the contractor and Red Rock Cleaning.
      `.trim();
      
      // Build FormData with formatted message and signature
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('message', formattedMessage);
      formDataToSubmit.append('_subject', `Sub-Contractor Agreement Signed - ${signatureData.firstName} ${signatureData.lastName}`);
      
      // Add individual fields for Formspree database
      formDataToSubmit.append('contractor_name', `${signatureData.firstName} ${signatureData.lastName}`);
      formDataToSubmit.append('contractor_address', signatureData.addressLine);
      formDataToSubmit.append('contractor_city', signatureData.city);
      formDataToSubmit.append('contractor_state', signatureData.state);
      formDataToSubmit.append('contractor_zipcode', signatureData.zipCode);
      formDataToSubmit.append('agreement_date', signatureData.date);
      formDataToSubmit.append('signed_by', signatureData.signatureName);
      formDataToSubmit.append('submission_timestamp', new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
      
      const response = await fetch('https://formspree.io/f/mqaynpgd', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // Log response for debugging
      const responseData = await response.json().catch(() => ({}));
      console.log('Formspree response:', response.status, responseData);
      
      if (response.ok) {
        // Success - show confirmation or redirect
        alert('Thank you! Your Sub-Contractor Agreement has been submitted successfully. You should receive a confirmation email shortly.');
        // Clear the form
        setSignatureData({
          addressLine: '',
          city: '',
          state: '',
          zipCode: '',
          firstName: '',
          lastName: '',
          date: '',
          signatureName: ''
        });
      } else {
        const errorMessage = responseData.error || responseData.errors?.[0]?.message || 'Unknown error';
        console.error('Formspree error:', errorMessage, responseData);
        alert(`There was a problem submitting your agreement: ${errorMessage}. Please try again or contact support.`);
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your agreement. Please check your internet connection and try again.');
      const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Finished';
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Sub-Contractor Agreement | Red Rock Cleans</title>
        <meta name="description" content="Complete your sub-contractor agreement with Red Rock Cleans. Review terms and sign the agreement to join our team." />
        <link rel="canonical" href="/sub-contractor-agreement" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <GeneralNavigation />
        
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-6">Sub-Contractor Agreement</h1>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
                <div className="prose prose-lg max-w-none">
                  <h1 className="text-4xl font-bold mb-6 text-center">Red Rock Cleaning</h1>
                  <h2 className="text-3xl font-bold mb-8 text-center">SubContractor Agreement</h2>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    This Independent Contractor Agreement, ("Agreement") is entered as of the date signed by both parties marked below.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    Hero Industries LLC DBA Red Rock Cleaning ("Contractor"), with its principal place of business located at: 4032 Pinewood Lane Weston, Fl 33331
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    And the undersigned independent contractor ("Subcontractor") on the date and at the place set forth below:
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    WHEREAS, the Contractor is in the business of providing cleaning services for homeowners/business owners/vacation rental hosts ("Clients").
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    WHEREAS, the Subcontractor is ready, willing and able to provide cleaning and other related services for our Clients.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    NOW, THEREFORE, it is mutually agreed as follows:
                  </p>

                  <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-4">
                    <li>Red Rock Cleaning will supply the Subcontractor with cleaning work on a part time basis.</li>
                    
                    <li>The Subcontractor shall work diligently and use best efforts to service clients of the Contractor as necessary.</li>
                    
                    <li>The Contractor will pay an agreed-upon amount to the Subcontractor for services rendered. Most Subcontractors start with $17-$20/hour and any changes in pay can be sent via written form such as email or text by Contractor.</li>
                    
                    <li>The Subcontractor's days and hours of performing such services can change from day to day and week to week and are mutually determined and agreed upon based upon the requirements and needs of the clients and the availability of the Subcontractor to render such services.</li>
                    
                    <li>Subcontractor shall provide all cleaning materials, equipment and tools necessary, as agreed upon by the parties.</li>
                    
                    <li>The Contractor shall not be liable for any negligent, reckless or intentional acts or omissions of the Subcontractor, nor shall the Subcontractor bind or attempt to bind the Contractor in any manner; and nothing herein shall be construed as creating the relationship of employer and employee between the parties, but rather, the Subcontractor shall at all times be deemed to be an independent contractor and free of any control by the Contractor in selecting the time or method of work or transportation used;</li>
                    
                    <li>The Contractor may withhold $50.00 from any sum or sums due or accruing to the Subcontractor for services performed in the event of any claim by a client of the Contractor due to loss, injury or damage as the result of services rendered or provided by the Subcontractor, to be applied to the cost thereof, with any excess amount withheld paid to the Subcontractor after cost of such loss, injury or damage is ascertained; any damage amount between $50 and $500 will be shared equally between the Contractor and Subcontractor.</li>
                    
                    <li>The Subcontractor shall indemnify and hold the Contractor harmless from all losses, injuries or damages caused by the negligent, reckless or intentional acts or omissions of the Subcontractor in rendering services pursuant to the Agreement, including payment of reasonable attorneys' fees and costs in the defense of any claim made by a third person incident to such negligent, reckless or intentional act or omission;</li>
                    
                    <li>The Subcontractor shall not make known to any person, firm, corporation, or business the names and/or addresses of any clients of the Contractor, or any other information pertaining to them, or call on, solicit, take away, or accept, directly or indirectly, business from such clients, with whom the Subcontractor becomes acquainted during and/or as a result of services rendered pursuant to this Agreement, whether for the Subcontractor's benefit, or potential benefit, of any other person, firm, corporation or business during the term of this Agreement, or for a period of eighteen (18) months after the termination of this Agreement.</li>
                    
                    <li>The Subcontractor shall not provide the clients of the Contractor with the Subcontractor's home telephone number or any other information enabling such clients to contact the Subcontractor other than through the Contractor.</li>
                    
                    <li>Payroll is made weekly or bi-weekly and calculated on Friday and paid out on Monday or Tuesday the following week.</li>
                  </ol>

                  <p className="text-lg text-gray-700 mb-4">
                    The term of this Agreement shall commence on its execution and shall terminate upon fourteen (14) days written notice, by the Subcontractor. The Contractor can cancel, without notice, for nonperformance.
                  </p>

                  <ul className="list-disc list-inside text-lg text-gray-700 mb-6 ml-6 space-y-2">
                    <li>If proper notice is not given by the Subcontractor, then all monies due Subcontractor are forfeited.</li>
                    <li>If a customer cancels due to poor workmanship or due to any fault of the Subcontractor, then the last payment from the canceled customer will be forfeited.</li>
                  </ul>

                  <p className="text-lg text-gray-700 mb-6">
                    NOW, THEREFORE, in consideration of the mutual promises and benefits to be derived by the parties they mutually agree to the terms and conditions as outlined above in this agreement.
                  </p>

                  <p className="text-lg text-gray-700 mb-6">
                    IN WITNESS WHEREOF, the parties have executed this Agreement effective as of the date and year first written above.
                  </p>
                </div>
              </div>

              {/* Signature Section */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 mb-6">(Jobs will be assigned according to distance to this Address)</p>
                
                <form onSubmit={handleSubmit} className="space-y-6" method="POST" action="https://formspree.io/f/mqaynpgd">
                  <input type="hidden" name="form-name" value="sub-contractor-agreement" />
                  <input type="hidden" name="_subject" value={`Sub-Contractor Agreement Signed - ${signatureData.firstName} ${signatureData.lastName}`} />
                  <div style={{ display: 'none' }}>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="addressLine" className="block text-sm font-medium mb-2">
                        Address Line
                      </label>
                      <input
                        type="text"
                        id="addressLine"
                        name="addressLine"
                        value={signatureData.addressLine}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={signatureData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={signatureData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={signatureData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={signatureData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={signatureData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Signature - Type Name for Consent */}
                  <div>
                    <label htmlFor="signatureName" className="block text-sm font-medium mb-2">
                      Type Your Full Name to Sign and Consent
                    </label>
                    <p className="text-sm text-muted-foreground mb-3">
                      By typing your full name below, you acknowledge that you have read, understood, and agree to all terms and conditions of this Sub-Contractor Agreement. This constitutes your legal signature.
                    </p>
                    <input
                      type="text"
                      id="signatureName"
                      name="signatureName"
                      value={signatureData.signatureName}
                      onChange={handleInputChange}
                      placeholder="Type your full name here"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Date of this Agreement
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={signatureData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Finished
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SubContractorAgreement;
