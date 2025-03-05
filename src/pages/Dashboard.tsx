import { HStack, Box } from "@chakra-ui/react";

import ClaimAssessment from "@/components/dashboard/ClaimAssessment";
import IncidentDetails from "@/components/dashboard/IncidentDetails";
import AIAnalysis from "@/components/dashboard/AIAnalysis";

const Dashboard = () => {
  return (
    <HStack
      width="100%"
      border="1px solid #E0E0DE"
      borderRadius={16}
      alignItems="start"
      p="24px 0 24px 0"
    >
      <Box flex="1">
        <ClaimAssessment />
        <IncidentDetails />
      </Box>
      <Box flex="1">
        <AIAnalysis />
      </Box>
    </HStack>
  );
};

export default Dashboard;
