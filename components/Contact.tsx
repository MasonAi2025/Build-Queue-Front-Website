import React, { useState } from 'react';
import { NeuCard } from './NeuCard';
import { NeuInput, NeuTextArea } from './NeuInput';
import { NeuButton } from './NeuButton';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

// INSTRUCTIONS FOR GOOGLE SHEETS INTEGRATION:
// 1. Go to your Google Apps Script editor.
// 2. Replace the code with the following robust version:
/*
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data;

    // Robust way to get data: Check if it's JSON, otherwise use parameters (FormData)
    if (e.postData && e.postData.type == "application/json") {
      data = JSON.parse(e.postData.contents);
    } else {
      // This handles the new FormData approach
      data = e.parameter;
    }

    sheet.appendRow([new Date(), data.name, data.email, data.company, data.type, data.message]);

    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
*/
// 3. Click Deploy > New Deployment.
// 4. Ensure "Who has access" is set to "Anyone".
// 5. Copy the NEW Web App URL and paste it below.

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtCvrqk3iEnKeE_nqJbXfqGVH-NNDu2kYevhdC9kRqNEQoQRe43z3JwlD6JyV_Iu4O2A/exec'; 

interface FormState {
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ 
    name: '', 
    email: '', 
    company: '', 
    type: 'Request Demo', // Default value updated to match primary CTA
    message: '' 
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        // Basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate all fields
    const nameError = validateField('name', formState.name);
    if (nameError) {
      newErrors.name = nameError;
      isValid = false;
    }

    const emailError = validateField('email', formState.email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    }

    const messageError = validateField('message', formState.message);
    if (messageError) {
      newErrors.message = messageError;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      // Convert state to FormData. 
      // This is much more reliable for Google Apps Script than raw JSON
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('company', formState.company);
      formData.append('type', formState.type);
      formData.append('message', formState.message);

      // We use no-cors. This allows the request to go through to Google without blocking.
      // However, it means we won't get a readable response (response.ok will be false/opaque).
      // We assume if it doesn't throw a network error, it worked.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        body: formData,
      });

      setStatus('success');
      setFormState({ name: '', email: '', company: '', type: 'Request Demo', message: '' });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-6">Let's Connect</h2>
                    <p className="text-gray-500 text-lg">
                        Ready to modernize your manufacturing workflow? Request a comprehensive quotation or partnership discussion with BuildQueue Ltd.
                    </p>
                </div>

                <div className="space-y-6">
                    <NeuCard className="p-6 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-neu-purple">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-neu-text">Email Us</h4>
                            <a href="mailto:integrations@buildqueue.io" className="text-gray-500 hover:text-neu-purple transition-colors">integrations@buildqueue.io</a>
                        </div>
                    </NeuCard>

                    <NeuCard className="p-6 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-neu-teal">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-neu-text">Call Us</h4>
                            <p className="text-gray-500">+44 (0) 161 123 4567</p>
                        </div>
                    </NeuCard>
                    
                    <NeuCard className="p-6 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-neu-purple">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-neu-text">HQ</h4>
                            <p className="text-gray-500">Manchester, United Kingdom</p>
                        </div>
                    </NeuCard>
                </div>
            </div>

            {/* Form */}
            <NeuCard className="p-8 md:p-10 relative">
                {status === 'success' ? (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neu-base/90 rounded-[2rem] animate-fade-in-down">
                        <div className="w-20 h-20 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-green-500 mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-neu-text mb-2">Message Sent!</h3>
                        <p className="text-gray-500 mb-6">We'll get back to you shortly.</p>
                        <NeuButton onClick={() => setStatus('idle')}>Send Another</NeuButton>
                    </div>
                ) : null}

                <h3 className="text-2xl font-bold text-neu-text mb-8">Get in Touch</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-4">
                        <NeuInput 
                            label="Full Name" 
                            name="name" 
                            placeholder="John Doe" 
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.name}
                        />
                         <NeuInput 
                            label="Company Name" 
                            name="company" 
                            placeholder="Acme Mfg." 
                            value={formState.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // Company is optional, so we typically don't validate unless specific requirements exist
                        />
                    </div>
                    
                    <NeuInput 
                        label="Email Address" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                    />

                    {/* Inquiry Type Dropdown */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label className="text-sm font-bold text-neu-text ml-2">Inquiry Type</label>
                        <div className="relative">
                            <select
                                name="type"
                                value={formState.type}
                                onChange={handleChange}
                                className="w-full bg-neu-base rounded-xl px-4 py-3 outline-none text-neu-text shadow-neu-in focus:ring-2 focus:ring-neu-accent/20 transition-all appearance-none cursor-pointer"
                            >
                                <option value="Request Demo">Request Demo</option>
                                <option value="Integration Quote">Integration Quotation</option>
                                <option value="Partnership">Partnership Discussion</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>

                    <NeuTextArea 
                        label="Message" 
                        name="message" 
                        rows={4} 
                        placeholder="Tell us about your needs..." 
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.message}
                    />
                    
                    <div className="mt-8">
                        <NeuButton type="submit" className="w-full flex justify-center items-center gap-2" disabled={status === 'submitting'}>
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : (
                                'Send Request'
                            )}
                        </NeuButton>
                    </div>
                </form>
            </NeuCard>

        </div>
      </div>
    </section>
  );
};