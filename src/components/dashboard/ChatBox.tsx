import { VStack, Box, Text } from "@chakra-ui/react";

const ChatBox = () => {
  return (
<VStack alignItems="left" p="24px" spacing={1} mt={0}> 
<Text fontSize={18} fontWeight="bold" mt={0}>Claim Analysis Conclusion</Text>
      <Text color="gray.700" mt={0} >
        The provided evidence confirms that the submitted photo aligns with the customer's description. 
        No indications of fraud or inconsistencies were found.
      </Text>
      <Text fontSize={18} fontWeight="bold" mt={0}>Claim Summary:</Text>
      <VStack alignItems="left" spacing={1}>
        <Text>
          <strong>• Vehicle:</strong> Toyota Sedan (Blue) – License Plate: 987654321
        </Text>
        <Text>
          <strong>• Incident Location:</strong> Avenue Providencia
        </Text>
        <Text>
          <strong>• Applicable Coverages:</strong> Liability, Collision, Comprehensive, and PIP
        </Text>
        <Text>
          <strong>• Estimated Claim Cost:</strong> $500 <span style={{ color: "gray" }}>(after deductible and coverage adjustments)</span>
        </Text>
        

      </VStack>

      
      <Box bg="green.100" p={2} borderRadius={8} width="100%" mt={2}>
        <Text color="green.800" fontWeight="medium">
          <strong>Covered:</strong> Proceeding with claim approval based on the verified details.
        </Text>
      </Box>

      
      </VStack>
    
  );
};
export default ChatBox;