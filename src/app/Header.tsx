import BrandIcon from "@/assets/icons/brand";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack
      height="93px"
      padding="32px 24px 26px 24px"
      width="100%"
      justifyContent="space-between"
    >
      <HStack>
        <Box
          width="35px"
          height="35px"
          border="1px solid #E7E7E4"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BrandIcon width="22px" />
        </Box>
        <Text fontWeight="medium" fontSize="22px" letterSpacing="-1.1px">
          Agentic{" "}
          <Text as="span" color="#D10001">
            AI
          </Text>
        </Text>
      </HStack>
      <Image
        src="../../assets/images/user-avatar.png"
        alt="User Avatar"
        width="35px"
        height="35px"
        borderRadius="50%"
      />
    </HStack>
  );
};

export default Header;
