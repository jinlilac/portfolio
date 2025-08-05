import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionHeading from "./SectionHeading";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/common/SocialLinks";
import { Mail, Check } from "lucide-react";
import { personalInfo } from "@/constants/personals";
import { supabase } from "@/supabaseClient";

const ContactSection = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: any) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error: insertError } = await supabase.from("contact").insert([
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    ]);

    if (insertError) {
      console.error(insertError);
      alert("메시지 전송에 실패했습니다.");
    } else {
      setSent(true);
      setData({ name: "", email: "", subject: "", message: "" });
    }

    setSubmitting(false);
  };

  return (
    <Container className="py-24" id="contact">
      <SectionHeading id="contact" title="Contact" />
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">{personalInfo.goals}</p>
            <p className="flex items-center gap-2 mb-2">
              <Mail /> {personalInfo.email}
            </p>
            <SocialLinks className="mt-4" />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8">
            {sent ? (
              <div className="text-center p-8">
                <Check size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                <Button onClick={() => setSent(false)} variant="outline">
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Subject"
                  name="subject"
                  value={data.subject}
                  onChange={handleChange}
                />
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={data.message}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  isLoading={submitting}
                >
                  Send
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </Container>
  );
};
export default ContactSection;
