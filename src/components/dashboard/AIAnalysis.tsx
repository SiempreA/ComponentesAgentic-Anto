import { Text, VStack, HStack, Input, Box } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa"; 
import { IoPaperPlaneOutline } from "react-icons/io5"; 

import ChatBox from "./ChatBox";

const AIAnalysis = () => {
  return (
    <VStack
      p={6}
      alignItems="flex-start"
      backgroundColor="#F8F8F6"
      borderRadius={16}
      height="100vh"
      justifyContent="space-between"
      spacing={4}
      position="relative"
    >
      <Text fontSize={20} fontWeight="light">
        Agentic AI Analysis
      </Text>
      <ChatBox />
      
      {}
      <Box w="100%" pb={3} position="relative">
        <HStack
          w="100%"
          p={2}
          borderRadius="full"
          backgroundColor="white"
          boxShadow="md"
          position="relative"
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
        >
          {}
          <HStack
            background="black"
            borderRadius="full"
            pl={2}
            pr={4}
            py={2}
            
          >
            <Box
              w={8}
              h={8}
              borderRadius="full"
              background="linear-gradient(to bottom, #000000, #666666)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaRegUser size={16} color="white" />  
            </Box>
            <Text fontSize="sm" color="white">All Agents</Text>
          </HStack>
          
          {}
          <Input
            placeholder="Ask to all agents"
            variant="unstyled"
            flex="1"
            px={3}
            ml={3}
            fontSize="sm"
            color="gray.500"
          />

          
        {}
        <Box
            w={12} 
            h={12}
            borderRadius="full"
            backgroundColor="black"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            //position="relative" 
          >
            <IoPaperPlaneOutline size={24} color="white" />
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AIAnalysis;

//cambio de chatInput