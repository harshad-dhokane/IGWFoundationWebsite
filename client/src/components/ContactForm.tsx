import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  inquiryType: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  schoolSite: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  schoolSite?: string;
}

const ContactForm = ({ schoolSite }: ContactFormProps) => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
      schoolSite: schoolSite || "foundation",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Message Sent",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (values: ContactFormValues) => {
    contactMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-800">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-500/60 hover:border-primary-400 shadow-sm"
                  />
                </FormControl>
                <FormMessage className="text-sm text-gray-800" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-800">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    {...field} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-500/60 hover:border-primary-400 shadow-sm"
                  />
                </FormControl>
                <FormMessage className="text-sm text-gray-800" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-gray-800">Phone Number</FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="Enter your phone number (optional)" 
                  {...field} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-500/60 hover:border-primary-400 shadow-sm"
                />
              </FormControl>
              <FormMessage className="text-sm text-gray-800" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-gray-800">Inquiry Type</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-400">
                    <SelectValue placeholder="Select an option" className="text-gray-500" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="admission" className="hover:bg-primary-50 text-gray-800">Admission Information</SelectItem>
                  <SelectItem value="general" className="hover:bg-primary-50 text-gray-800">General Inquiry</SelectItem>
                  <SelectItem value="career" className="hover:bg-primary-50 text-gray-800">Career Opportunities</SelectItem>
                  <SelectItem value="feedback" className="hover:bg-primary-50 text-gray-800">Feedback</SelectItem>
                  <SelectItem value="other" className="hover:bg-primary-50 text-gray-800">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-sm text-gray-800" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-sm font-medium text-gray-800">Your Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Write your message here..." 
                  {...field} 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-500/60 hover:border-primary-400 resize-none shadow-sm"
                />
              </FormControl>
              <FormMessage className="text-sm text-gray-800" />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className={`w-full py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] mt-4 ${
            schoolSite === "global-kids" 
              ? "bg-pink-600 hover:bg-pink-700" 
              : schoolSite === "global-school"
              ? "bg-indigo-600 hover:bg-indigo-700"
              : schoolSite === "vishwasatya"
              ? "bg-cyan-600 hover:bg-cyan-700"
              : "bg-violet-600 hover:bg-violet-700"
          }`}
          disabled={contactMutation.isPending}
        >
          {contactMutation.isPending ? "Sending..." : "Submit Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;