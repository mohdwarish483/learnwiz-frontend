import React from 'react';
import { Box, Heading, Text, VStack, Link } from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <Box p={['5', '32']} className="backcolor" mt={'5vh'}>
      <VStack alignItems="flex-start">
        <Heading as="h1" fontSize="5xl" mb="2">
          Privacy Policy
        </Heading>
        <Text fontSize="lg" fontWeight="bold">
          Updated at 21-09-2023
        </Text>
        <Text>
          LearnWiz (“we,” “our,” or “us”) is committed to protecting your
          privacy. This Privacy Policy explains how your personal information is
          collected, used, and disclosed by LearnWiz.
        </Text>
        <Text>
          This Privacy Policy applies to our website, and its associated
          subdomains (collectively, our “Service”) alongside our application,
          LearnWiz. By accessing or using our Service, you signify that you have
          read, understood, and agree to our collection, storage, use, and
          disclosure of your personal information as described in this Privacy
          Policy and our Terms of Service.
        </Text>
        <Heading as="h2" fontSize="2xl" mt="4">
          What Information Do We Collect?
        </Heading>
        <Text>
          We collect information from you when you visit our website, register
          on our site, place an order, subscribe to our newsletter, respond to a
          survey, or fill out a form.
        </Text>
        <Text>
          - Name / Username
          <br />
          - Email Addresses
          <br />- Password
        </Text>
        <Heading as="h2" fontSize="2xl" mt="4">
          How Do We Use The Information We Collect?
        </Heading>
        <Text>
          Any of the information we collect from you may be used in one of the
          following ways:
        </Text>
        <Text>
          - To personalize your experience (your information helps us to better
          respond to your individual needs)
          <br />
          - To improve our website (we continually strive to improve our website
          offerings based on the information and feedback we receive from you)
          <br />
          - To improve customer service (your information helps us to more
          effectively respond to your customer service requests and support
          needs)
          <br />
          - To process transactions
          <br />
          - To administer a contest, promotion, survey, or other site feature
          <br />- To send periodic emails
        </Text>
        <Heading as="h2" fontSize="2xl" mt="4">
          When does LearnWiz use end user information from third parties?
        </Heading>
        <Text>
          LearnWiz will collect End User Data necessary to provide the LearnWiz
          services to our customers.
        </Text>
        <Text>
          End users may voluntarily provide us with information they have made
          available on social media websites. If you provide us with any such
          information, we may collect publicly available information from the
          social media websites you have indicated. You can control how much of
          your information social media websites make public by visiting these
          websites and changing your privacy settings.
        </Text>
        <Heading as="h2" fontSize="2xl" mt="4">
          Is the information collected through the LearnWiz Service secure?
        </Heading>
        <Text>
          We take precautions to protect the security of your information. We
          have physical, electronic, and managerial procedures to help
          safeguard, prevent unauthorized access, maintain data security, and
          correctly use your information. However, neither people nor security
          systems are foolproof, including encryption systems. In addition,
          people can commit intentional crimes, make mistakes or fail to follow
          policies. Therefore, while we use reasonable efforts to protect your
          personal information, we cannot guarantee its absolute security. If
          applicable law imposes any non-disclaimable duty to protect your
          personal information, you agree that intentional misconduct will be
          the standards used to measure our compliance with that duty.
        </Text>
        <Heading as="h2" fontSize="2xl" mt="4">
          Can I update or correct my information?
        </Heading>
        <Text>
          The rights you have to request updates or corrections to the
          information LearnWiz collects depend on your relationship with
          LearnWiz. Personnel may update or correct their information as
          detailed in our internal company employment policies.
        </Text>
        <Text>
          Customers have the right to request the restriction of certain uses
          and disclosures of personally identifiable information as follows. You
          can contact us in order to update or correct your personally
          identifiable information,change your preferences with respect to
          communications and other information you receive from us, or delete
          the personally identifiable information maintained about you on our
          systems (subject to the following paragraph), by canceling your
          account. Such updates, corrections, changes, and deletions will have
          no effect on other information that we maintain or information that we
          have provided to third parties in accordance with this Privacy Policy
          prior to such update, correction, change, or deletion. To protect your
          privacy and security, we may take reasonable steps (such as requesting
          a unique password) to verify your identity before granting you profile
          access or making corrections. You are responsible for maintaining the
          secrecy of your unique password and account information at all times.
        </Text>
        <Text>
          You should be aware that it is not technologically possible to remove
          each and every record of the information you have provided to us from
          our system. The need to back up our systems to protect information
          from inadvertent loss means that a copy of your information may exist
          in a non-erasable form that will be difficult or impossible for us to
          locate. Promptly after receiving your request, all personal
          information stored in databases we actively use, and other readily
          searchable media will be updated, corrected, changed, or deleted, as
          appropriate, as soon as and to the extent reasonably and technically
          practicable.
        </Text>
        <Text>We do not sell the Personal Information of our users.</Text>
        <Text mt="4" fontWeight={'bold'}>
          For more information about these rights, please{' '}
          <Link color="rgb(12,120,254)" href="/contact">
            contact us
          </Link>
          .
        </Text>
        <Heading as="h2" fontSize="2xl" mt="8">
          Contact Us
        </Heading>
        <Text>Don't hesitate to contact us if you have any questions.</Text>
        <Text>Via Email: [khanwarish483@gmail.com]</Text>
        <Text>Via Phone Number: +919991463786</Text>
        <Text>At Office : Ferozepur Jhirka Nuh(mewat) Haryana - 122104.</Text>
      </VStack>
    </Box>
  );
};

export default PrivacyPolicy;
