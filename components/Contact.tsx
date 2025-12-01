
import React, { useState } from 'react';
import { NeuCard } from './NeuCard';
import { NeuInput, NeuTextArea } from './NeuInput';
import { NeuButton } from './NeuButton';
import { Mail, Phone, MapPin, Loader2, CheckCircle, CheckSquare } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtCvrqk3iEnKeE_nqJbXfqGVH-NNDu2kYevhdC9kRqNEQoQRe43z3JwlD6JyV_Iu4O2A/exec'; 

interface FormState {
  date: string;
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
}

interface FormErrors {
  date?: string;
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ 
    date: new Date().toISOString().split('T')[0],
    name: '', 
    email: '', 
    company: '', 
    type: 'Request Demo', 
    message: '' 
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'date':
        if (!value.trim()) return 'Date is required';
        return undefined;
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters.';
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

    const fieldsToValidate: (keyof FormState)[] = ['date', 'name', 'email', 'message'];

    fieldsToValidate.forEach(field => {
      const error = validateField(field, formState[field]);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        isValid = false;
      }
    });

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
      const formData = new FormData();
      Object.keys(formState).forEach(key => {
        formData.append(key, formState[key as keyof FormState]);
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        body: formData,
      });

      setStatus('success');
      setFormState({ date: new Date().toISOString().split('T')[0], name: '', email: '', company: '', type: 'Request Demo', message: '' });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const demoBenefits = [
      "A live walkthrough tailored to your specific challenges.",
      "An action plan to reduce inventory errors and boost output.",
      "A no-obligation pricing and implementation roadmap.",
      "An opportunity to have your questions answered by an expert."
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-neu-base">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-neu-text mb-6">Ready to Eliminate Manufacturing Chaos?</h2>
                    <p className="text-gray-500 text-lg max-w-xl">
                        Schedule a personalized demo with one of our experts to see how BuildQueue can dramatically improve your efficiency, traceability, and bottom line. See the platform in action and get all your questions answered.
                    </p>
                </div>

                <NeuCard className="p-8">
                    <h3 className="text-xl font-bold text-neu-text mb-6">In your personalized demo, you'll discover how to:</h3>
                    <div className="space-y-5">
                        {demoBenefits.map((benefit, index) => (
                             <div key={index} className="flex items-start gap-3">
                                <CheckSquare size={20} className="text-neu-teal mt-1 flex-shrink-0" />
                                <p className="text-gray-500">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </NeuCard>
            </div>

            <NeuCard className="p-8 md:p-10 relative">
                {status === 'success' ? (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neu-base/90 rounded-[2rem] animate-fade-in-down">
                        <div className="w-20 h-20 rounded-full bg-neu-base shadow-neu-btn flex items-center justify-center text-green-500 mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-neu-text mb-2">Request Sent!</h3>
                        <p className="text-gray-500 mb-6">Our team will be in touch shortly.</p>
                        <NeuButton onClick={() => setStatus('idle')}>Send Another</NeuButton>
                    </div>
                ) : null}

                <h3 className="text-2xl font-bold text-neu-text mb-8">Get in Touch</h3>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-4">
                        <NeuInput 
                            label="Date" 
                            name="date" 
                            type="date"
                            value={formState.date}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.date}
                        />
                        <NeuInput 
                            label="Full Name" 
                            name="name" 
                            placeholder="John Doe" 
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.name}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                         <NeuInput 
                            label="Company Name" 
                            name="company" 
                            placeholder="Acme Mfg." 
                            value={formState.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-bold text-neu-text mb-2 mt-4">Request Type</label>
                        <select
                            id="type"
                            name="type"
                            value={formState.type}
                            onChange={handleChange}
                            className="w-full bg-neu-base shadow-neu-inner rounded-xl px-4 py-3 text-neu-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neu-purple"
                        >
                            <option>Request Demo</option>
                            <option>Integration Quote</option>
                            <option>General Inquiry</option>
                            <option>Partnership</option>
                        </select>
                    </div>

                    <NeuTextArea 
                        label="Message" 
                        name="message" 
                        rows={4} 
                        placeholder="Your message..."
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
                                'Submit Request'
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