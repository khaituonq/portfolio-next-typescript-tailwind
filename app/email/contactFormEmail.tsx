import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
  senderName: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  message,
  senderEmail,
  senderName,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section >
              <Heading className="leading-tight text-black">
                You received the following message form the contact form
              </Heading>
              <Text className="text-black">{message}</Text>
              <Hr />
              <Text className="text-black">The send name name is: {senderName}</Text>
              <Text className="text-black">The send email name is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
