import { Text, VStack, HStack, Input, Box, Image } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import CheckIcon from "../../assets/icons/check.svg"; 
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
      spacing={2}
      position="relative"
    >
      {}
      <Text fontSize={20} fontWeight="light" mb={1}>Agentic AI Analysis</Text>

      {}
      <HStack w="100%" justifyContent="center" spacing={4}  alignItems="center" position="relative" mt={-350}>
        {[
          "Fraud Analysis",
          "Policy Analysis",
          "Rules Analysis",
        ].map((text, index, arr) => (
          <HStack key={index} spacing={2} alignItems="center">
            <Box w={6} h={6} display="flex" alignItems="center" justifyContent="center">
              <Image src={CheckIcon} alt="Check" boxSize={6} />
            </Box>
            
            {}
            <Text fontSize="sm" color="gray.700">{text}</Text>
            
            {}
            {index < arr.length - 1 && <Box w={20} h="1px" backgroundColor="#D1D5DB" />}
          </HStack>
        ))}
           
      <Box position="absolute" top="35px" left="8">
       <Image src="/src/assets/icons/Reloj.svg" alt="Reloj" boxSize={5} />
      </Box>
      </HStack>
      {}
      
      <ChatBox />
      
 <Box
        w="100%"
        p={3}
        borderRadius="lg"
        backgroundColor="white"
        boxShadow="md"
        textAlign="center"
        mt={4}
      >
        <Text fontSize="md" fontWeight="medium" color="black">
          Complete Claim and Generate a Document
        </Text>
      </Box>
      
      <Box w="100%" pb={3} position="relative">
        <HStack
          w="100%"
          p={2}
          borderRadius="full"
          backgroundColor="white"
          boxShadow="md"
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
        >
          {}
          <HStack background="black" borderRadius="full" pl={2} pr={4} py={2}>
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
          >
            <IoPaperPlaneOutline size={24} color="white" />
          </Box>
        </HStack>
        
      </Box>
    </VStack>
  );
};

export default AIAnalysis;