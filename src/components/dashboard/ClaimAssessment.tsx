import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const ClaimAssessment = () => {
  return (
    <VStack
      alignItems="left"
      gap={6}
      borderBottom="1px solid #E0E0DE"
      p="0 24px 24px 24px"
    >
      <Text fontSize={24} fontWeight="light">
        Claim assessment
      </Text>
      <VStack gap="18px" alignItems="left">
        <Text fontWeight="medium">Customer</Text>
        <HStack justifyContent="space-between">
          <Text>User</Text>
          <Text>Coverage</Text>
        </HStack>
      </VStack>
      <VStack gap="16px" alignItems="left">
        <Text fontWeight="medium">Customer Summary</Text>
        <Box p={4} backgroundColor="#F5F5F5" borderRadius={12}>
          <Text color="black">
            Carlos has been a customer since December 2023, has the coverage
            plan in the gold category, payments on time. The next renewal of the
            plan is scheduled for December 2025.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default ClaimAssessment;
